// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwtMiddleware = require('../middlewares/jwtMiddleware'); 

router.use(jwtMiddleware.authenticateToken); 

router.get('/', userController.getUsers);

router
  .route('/:id')
  .get(userController.getUser)     
  .put(userController.updateUser)  
  .delete(userController.deleteUser); 

module.exports = router;