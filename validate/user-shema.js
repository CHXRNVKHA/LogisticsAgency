const joi = require('@hapi/joi');

const shema = joi.object({
    login: joi.string()
        .alphanum()
        .min(6)
        .max(16)
        .required(),

    name: joi.string()
        .alphanum()
        .min(2)
        .max(25)
        .required(),
    
    surname: joi.string()
        .alphanum()
        .min(2)
        .max(25)
        .required(),

    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

module.exports = shema;