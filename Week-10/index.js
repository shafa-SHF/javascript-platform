// index.js
const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middlewares/errorHandler'); 
const prisma = require('./utils/prisma'); 

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- Database Connection (Prisma) ---
async function connectDB() {
  try {
    await prisma.$connect();
    console.log('Prisma connected to database successfully (SQLite)');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1); 
  }
}

// --- Middleware ---
app.use(express.json());

// --- Routes ---
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); 

// --- Error Handling Middleware ---
app.use(errorHandler);

// --- Start Server ---
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});