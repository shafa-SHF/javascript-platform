// services/authService.js
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const prisma = require('../utils/prisma'); 
const { AuthenticationError, BadRequestError } = require('../utils/errors');
const { JWT_SECRET } = process.env;

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: '1h',
  });
};

exports.registerUser = async (userData) => {
  const { username, email, password } = userData;

  let user = await prisma.user.findUnique({ where: { email } });
  if (user) {
    throw new BadRequestError('User already exists with this email');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: { username, email, password: hashedPassword },
    select: { id: true, username: true, email: true, role: true, createdAt: true }
  });
  
  const token = generateToken(newUser.id);
  return { user: newUser, token };
};

exports.loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });
  
  if (!user) {
    throw new AuthenticationError('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new AuthenticationError('Invalid credentials');
  }

  const { password: _, ...userWithoutPass } = user;
  const token = generateToken(user.id);
  
  return { user: userWithoutPass, token };
};
