const express = require('express');
const orderController = require('../controllers/order.controller');
const orderRouter = express.Router();

orderRouter.get("/", orderController.getAllOrders);
orderRouter.post("/", orderController.insertOrder);
orderRouter.get("/:id", orderController.getOrdersByUser);
orderRouter.post("/confirmation", orderController.sendOrderConf);

module.exports = orderRouter;