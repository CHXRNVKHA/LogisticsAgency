const cargo = require('../models/cargo');

const add = async function (req) {
    return  await cargo.create(req)
}


module.exports = {
    add,
}
