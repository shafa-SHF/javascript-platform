// controllers/authController.js
const authService = require('../services/authService');
const validators = require('../utils/validators'); 

exports.register = async (req, res, next) => {
  try {
    const validatedData = validators.validateRegistration(req.body); 
    const { user, token } = await authService.registerUser(validatedData);

    res.status(201).json({ success: true, message: 'User registered successfully', user, token });
  } catch (error) {
    next(error); 
  }
};

exports.login = async (req, res, next) => {
  try {
    const validatedData = validators.validateLogin(req.body);
    const { user, token } = await authService.loginUser(validatedData.email, validatedData.password);

    res.status(200).json({ success: true, message: 'Login successful', user, token });
  } catch (error) {
    next(error); 
  }
};

exports.getMe = async (req, res) => {
  res.status(200).json({ success: true, user: req.user });
};