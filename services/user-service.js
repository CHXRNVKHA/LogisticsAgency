const cargo = require('../models/user');

const add = async function (req) {
    const name = req.name;
    const surname = req.surname;
    const login = req.login;
    const password = req.password;
    const user = new User(req.body);
    await user.save();
    user.token = user.generateAuthToken();
    return user;
};

module.exports = {
    add,
}