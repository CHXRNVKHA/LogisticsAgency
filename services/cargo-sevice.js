const cargo = require('../models/cargo');

const add = async function (req) {
    const cargoWeight = req.weight;
    return  await cargo.create({weight: cargoWeight})
}


module.exports = {
    add,
}
