require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const authenticate = require('./middleware/auth');
const authController = require('./controllers/authController');
const articleController = require('./controllers/articleController');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(authenticate);

// --- AUTH ROUTES ---
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);
app.post('/api/logout', authController.logout);

app.get('/api/me', (req, res) => {
    if (!req.user) return res.json({ loggedIn: false });
    res.json({ loggedIn: true, ...req.user });
});

// --- ADMIN ONLY: USER DATABASE TABLE ---
app.get('/api/admin/users', async (req, res) => {
    if (!req.user || req.user.role !== 'ADMIN') {
        return res.status(403).json({ error: "Access Denied" });
    }
    try {
        const users = await prisma.user.findMany({
            select: { id: true, email: true, role: true }
        });
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "DB Error" });
    }
});

// --- ARTICLE ROUTES ---
app.get('/articles', articleController.getArticles);
app.post('/articles', articleController.createArticle);
app.delete('/articles/:id', articleController.deleteArticle);

app.listen(3000, () => console.log(" Server running at http://localhost:3000"));