const express = require('express');
const userController = require('../../controllers/v1/user.controller');

const userRouter = express.Router();

userRouter.post('/signup', userController.signup);

module.exports = userRouter;