// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const jwtMiddleware = require('../middlewares/jwtMiddleware'); 

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', jwtMiddleware.authenticateToken, authController.getMe); 

module.exports = router;