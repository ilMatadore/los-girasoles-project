const express = require('express');
const usersController = require('../controllers/users.controller');

const userRouter = express.Router();

userRouter.get("/", usersController.getUsers);
userRouter.post("/login", usersController.loginUser);
userRouter.post("/register", usersController.registerUser);

module.exports = userRouter;