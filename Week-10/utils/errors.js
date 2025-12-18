// utils/errors.js
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode || 500;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
class NotFoundError extends CustomError {
    constructor(message = 'Resource not found') {
        super(message, 404);
    }
}
class AuthenticationError extends CustomError {
    constructor(message = 'Authentication failed. Invalid credentials or token.') {
        super(message, 401);
    }
}
class ForbiddenError extends CustomError {
    constructor(message = 'Access denied. You do not have permission to perform this action.') {
        super(message, 403);
    }
}
class BadRequestError extends CustomError {
    constructor(message = 'Bad request. Check your request data.') {
        super(message, 400);
    }
}

module.exports = {
    CustomError, NotFoundError, AuthenticationError, ForbiddenError, BadRequestError
};