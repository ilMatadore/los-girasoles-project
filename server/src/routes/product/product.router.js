const express = require('express');
const productController = require('./product.controller');

const productRouter = express.Router();

productRouter.get("/adicionales", productController.getAvailableProducts);
productRouter.get("/adicionales/all", productController.getAllProducts);
productRouter.get("/canastas", productController.getAllCanastas);

module.exports = productRouter;