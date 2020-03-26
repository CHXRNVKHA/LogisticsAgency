const service = require('../services/contract-service');
class ContractController {
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
    deleteContract = async (req, res) => {
        try {
            const result = await service.deleteContract(req.body.id);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    updateContract = async (req, res) => {
        try {
            const result = await service.updateContract(req.body.id, req.body.name, req.body.age);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    createContract = async (req, res) => {
        try {
            const result = await service.createContract(req.body.name, req.body.age);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    getContracts = async (req, res) => {
        try {
            const result = await service.getContracts();
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    getContractById = async (req, res) => {
        try {
            const result = await service.getContractById(req.params.id);
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
}

module.exports = ContractController;