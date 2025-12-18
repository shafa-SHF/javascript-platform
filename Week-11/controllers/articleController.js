const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 1. GET ALL ARTICLES (Front Page / Read Only)
// Access: Public (Guest, Member, Admin)
exports.getArticles = async (req, res) => {
    try {
        const articles = await prisma.article.findMany({
            include: {
                author: {
                    select: { email: true, role: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch articles" });
    }
};

// 2. CREATE ARTICLE
// Access: Logged in Users only (Member or Admin)
exports.createArticle = async (req, res) => {
    const { title, content } = req.body;
    const user = req.user; // Provided by auth middleware

    if (!user) {
        return res.status(401).json({ error: "Unauthorized: Please login" });
    }

    try {
        const newArticle = await prisma.article.create({
            data: {
                title,
                content,
                authorId: user.id
            }
        });
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(500).json({ error: "Failed to create article" });
    }
};

// 3. DELETE ARTICLE (Authorization Logic)
// Access: Admin (All) or Member (Own articles only)
exports.deleteArticle = async (req, res) => {
    const { id } = req.params;
    const user = req.user;

    if (!user) {
        return res.status(401).json({ error: "Unauthorized: Please login" });
    }

    try {
        // Find the article first to check ownership
        const article = await prisma.article.findUnique({
            where: { id: Number(id) }
        });

        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }

        // --- AUTHORIZATION LOGIC ---
        // Allow if user is ADMIN OR if user is the original author
        const isAdmin = user.role === 'ADMIN';
        const isOwner = article.authorId === user.id;

        if (isAdmin || isOwner) {
            await prisma.article.delete({
                where: { id: Number(id) }
            });
            return res.json({ message: "Article deleted successfully" });
        } else {
            return res.status(403).json({ error: "Forbidden: You can only delete your own articles" });
        }

    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// 4. UPDATE ARTICLE
// Access: Admin (All) or Member (Own articles only)
exports.updateArticle = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const user = req.user;

    if (!user) return res.status(401).json({ error: "Login required" });

    try {
        const article = await prisma.article.findUnique({
            where: { id: Number(id) }
        });

        if (!article) return res.status(404).json({ error: "Not found" });

        // Authorization Check
        if (user.role === 'ADMIN' || article.authorId === user.id) {
            const updated = await prisma.article.update({
                where: { id: Number(id) },
                data: { title, content }
            });
            return res.json(updated);
        }

        res.status(403).json({ error: "You cannot edit this article" });
    } catch (error) {
        res.status(500).json({ error: "Update failed" });
    }
};