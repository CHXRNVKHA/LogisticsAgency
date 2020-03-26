const express = require('express');

const OrderController = require('../controllers/order-controller')
const orderController = new OrderController();

const router = new express.Router();

router.get('/', orderController.getOrders);
//router.get('/orders', orderController.getOrders);
router.get('/:id', orderController.getOrderById);
//router.post('/orders', orderController.createOrder);
router.post('/', orderController.createOrder);
router.put('/', orderController.updateOrder);
router.delete('/', orderController.deleteOrder);
router.post('/save', orderController.saveChanges);

module.exports = router;