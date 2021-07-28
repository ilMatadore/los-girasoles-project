const express = require('express');
const contactEmailController = require('../controllers/contactEmail.controller');

const contactRouter = express.Router();

contactRouter.post("/", contactEmailController.sendContactEmail);

module.exports = contactRouter;