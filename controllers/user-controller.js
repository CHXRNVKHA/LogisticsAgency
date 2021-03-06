const service = require('../services/user-service');
const userValidateShema = require('../validate/user-shema');

class UserController {
    constructor(){};
    addUser = async (req, res) => {
        try {
            const value = await userValidateShema.validateAsync(req.body);
            const result = await service.add(value);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };
    loginUser = async (req, res) => {
        try {
            const result = await service.login(req.body);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    setAvatar
}

module.exports = UserController;