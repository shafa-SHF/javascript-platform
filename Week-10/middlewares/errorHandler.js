// middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); 

  let statusCode = err.statusCode || 500; 
  let message = err.message || 'Server Error';

  // Handle Prisma Unique constraint violation (P2002)
  if (err.code === 'P2002') { 
    statusCode = 400;
    const field = err.meta.target.join(', ');
    message = `Duplicate field value entered: ${field}. Please use another value.`;
  }
  
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined 
  });
};

module.exports = errorHandler;