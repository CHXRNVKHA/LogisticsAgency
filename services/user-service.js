const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const add = async function (req) {
    const user = await User.create({
        login: req.login,
        name: req.name,
        surname: req.surname,
        password: bcrypt.hashSync(req.password, 8),
        role: req.role,
    });
    return user;
};
const login = async function (req) {
    const user = await User.findOne({
        where: {login: req.login}
    });
    if (!user) {
        return res.status(404).send({messsage: 'User not found'});
    }
    let IsValidPassword = bcrypt.compareSync(req.password, user.password);
    if (!IsValidPassword) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
    }
    const token = jwt.sign({id: user.idUser.toString() }, process.env.secretKeyforJsonwebtoken, {
        expiresIn: 86400
    });
    return { user, token };
}

module.exports = {
    add,
    login,
}