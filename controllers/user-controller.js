const service = require('../services/user-service');
class UserController {
    constructor(){};
    addUser = async (req, res) => {
        try {
            const result = await service.add(req.body);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };
}

module.exports = UserController;