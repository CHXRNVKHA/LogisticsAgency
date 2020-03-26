const service = require('../services/cargo-sevice');
class CargoController {
    constructor(){};
    addCargo = async (req, res) => {
        try {
            const result = await service.add(req.body);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };
    getAllCargos = async (req, res) => {
        try {
            const result = await service.getAll();
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };
    updateCargo = async (req, res) => {
        try {
            const result = await service.update(req.body);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };
    deleteCargo = async (req, res) => {
        try {
            const result = await service.del(req.body);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    }; 
}

module.exports = CargoController;