const express = require('express');
const auth = require('../middleware/auth');
const verifySignUp = require('../middleware/verifySignUp');

const UserController = require('../controllers/user-controller')
const userController = new UserController();

const router = new express.Router();

//router.get('/', userController.getAllusers);
router.post('/add', verifySignUp.checkDuplicateUsernameOrEmail, userController.addUser);
router.post('/login', userController.loginUser);
//router.delete('/delete/:id', userController.deleteuser);

module.exports = router;