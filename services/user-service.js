const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const add = async function (req) {
    user = await User.create({
        login: req.login,
        name: req.name,
        surname: req.surname,
        password: bcrypt.hashSync(req.password, 8),
        role: req.role,
    })
    const tok = jwt.sign({id: user.idUser.toString() }, process.env.secretKeyforJsonwebtoken, {
        expiresIn: 86400
    });
    user.token = tok;
    return user;
};

module.exports = {
    add,
}