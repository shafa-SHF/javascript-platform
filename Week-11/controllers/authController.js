const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// 1. REGISTER NEW USER
exports.register = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user (defaults to 'MEMBER' if no role provided)
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                role: role || 'MEMBER' 
            }
        });

        res.status(201).json({ 
            message: "User registered successfully", 
            user: { email: user.email, role: user.role } 
        });
    } catch (error) {
        res.status(500).json({ error: "Registration failed" });
    }
};

// 2. LOGIN USER
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Create JWT Token containing ID and Role
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Send token back in a secure HTTP-only cookie
        res.cookie('token', token, {
            httpOnly: true, // Prevents frontend JS from reading the token (secure)
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.json({ 
            message: "Login successful", 
            role: user.role,
            email: user.email 
        });
    } catch (error) {
        res.status(500).json({ error: "Login failed" });
    }
};

// 3. LOGOUT USER
exports.logout = (req, res) => {
    res.clearCookie('token');
    res.json({ message: "Logged out successfully" });
};