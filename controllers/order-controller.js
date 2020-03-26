const service = require('../services/order-service');
class OrderController {
    constructor(){};
    saveChanges = async (req, res) => {
        try {
            const result = await service.saveChanges();
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    deleteOrder = async (req, res) => {
        try {
            const result = await service.deleteOrder(req.body.id);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    updateOrder = async (req, res) => {
        try {
            const result = await service.updateOrder(req.body.id, req.body.name, req.body.age);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    createOrder = async (req, res) => {
        try {
            const result = await service.createOrder(req.body.name, req.body.age);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    getOrders = async (req, res) => {
        try {
            const result = await service.getOrders();
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    getOrderById = async (req, res) => {
        try {
            const result = await service.getOrderById(req.params.id);
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
}

module.exports = OrderController;