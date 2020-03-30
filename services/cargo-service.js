const cargo = require('../models/cargo');

const add = async function (req) {
    const cargoWeight = req.weight;
    return await cargo.create({weight: cargoWeight});
};

const getAll = async function () {
    return await cargo.findAll({raw: true});
};

const update = async function (body) {
    return await cargo.update({weight: body.weight}, {where: {idCargo: body.idCargo}});
};

const del = async function (body) {
    return await cargo.destroy({where: {idCargo: body.idCargo}});
};


module.exports = {
    add,
    getAll,
    update,
    del,
}
