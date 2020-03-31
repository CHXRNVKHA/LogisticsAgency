const jwt = require('jsonwebtoken');
const User = require('../models/user');

require('dotenv').config();

const auth = async (req, res, next) => {
    try{
        const token = req.headers['x-access-token'];
        const decoded = jwt.verify(token, process.env.secretKeyforJsonwebtoken);
        const user = await User.findOne({ where: {idUser: decoded.id}});
        if(!user){
            throw new Error
        }
        req.token = token; 
        req.user = user; 
        next();
    } catch (e) {
        res.status(401).send({error: 'Please autentificate'});
    }
}

module.exports = auth