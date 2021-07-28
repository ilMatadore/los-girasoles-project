const express = require('express');
const usersController = require('../controllers/users.controller');
const authController = require('../controllers/auth.controller');



const userRouter = express.Router();

userRouter.get("/", usersController.getUsers);
userRouter.post("/login", authController.loginUser);
userRouter.post("/register", usersController.registerUser);

module.exports = userRouter;