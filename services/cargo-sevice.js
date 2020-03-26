const cargo = require('../models/cargo');

const add = async function (req) {
    const cargoWeight = req.weight;
    return await cargo.create({weight: cargoWeight});
}

const getAll = async function () {
    return await cargo.findAll({raw: true});
}

module.exports = {
    add,
    getAll,
}
