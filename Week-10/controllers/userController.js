// controllers/userController.js
const userService = require('../services/userService');
const { ForbiddenError } = require('../utils/errors');

const isAuthorized = (req, targetId) => req.user.role === 'admin' || req.user.id === targetId;

exports.getUsers = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      throw new ForbiddenError('Access denied. Must be an admin.');
    }
    const users = await userService.getAllUsers();
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    if (!isAuthorized(req, req.params.id)) {
        throw new ForbiddenError('Access denied. Cannot view other users.');
    }
    const user = await userService.getUserById(req.params.id);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    if (!isAuthorized(req, req.params.id)) {
        throw new ForbiddenError('Access denied. Cannot update other users.');
    }
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ success: true, message: 'User updated successfully', data: user });
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
        throw new ForbiddenError('Access denied. Only admin can delete users.');
    }
    await userService.deleteUser(req.params.id);
    res.status(204).json({ success: true, data: null }); 
  } catch (error) {
    next(error);
  }
};