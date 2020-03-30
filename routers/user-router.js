const express = require('express');
const auth = require('../middleware/auth');

const UserController = require('../controllers/user-controller')
const userController = new UserController();

const router = new express.Router();

//router.get('/', userController.getAllusers);
router.post('/add', userController.addUser);
//router.put('/update', userController.updateuser);
//router.delete('/delete/:id', userController.deleteuser);

module.exports = router;