const service = require('../services/contract-service');
class ContractController {
    constructor(){};
    addContract = async (req, res) => {
        try {
            const result = await service.add(req.body.name, req.body.age);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };
}

module.exports = ContractController;