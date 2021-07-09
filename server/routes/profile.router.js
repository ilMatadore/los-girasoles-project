const express = require('express');
const profileController = require('../controllers/profile.controller');

const profileRouter = express.Router();

profileRouter.get("/:id", profileController.getUserById);
profileRouter.put("/:id", profileController.updateUserProfile);

module.exports = profileRouter;