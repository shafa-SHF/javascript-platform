// middlewares/jwtMiddleware.js
const jwt = require('jsonwebtoken');
const prisma = require('../utils/prisma'); 
const { AuthenticationError, NotFoundError } = require('../utils/errors');
const { JWT_SECRET } = process.env;

exports.authenticateToken = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AuthenticationError('Access denied. Please log in.'));
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    const user = await prisma.user.findUnique({ 
        where: { id: decoded.id },
        select: { id: true, username: true, email: true, role: true, createdAt: true }
    });
    
    if (!user) {
      return next(new NotFoundError('User associated with token not found'));
    }

    req.user = user; 
    next(); 

  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return next(new AuthenticationError('Token expired. Please log in again.'));
    }
    return next(new AuthenticationError('Invalid token.'));
  }
};