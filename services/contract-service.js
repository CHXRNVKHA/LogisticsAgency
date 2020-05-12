const contract = require('../models/contract');

const add = async function (req) {
    return  await contract.create(req.body);
}


module.exports = {
    add,
}
