const contract = require('../models/contracts');

const add = async function (req) {
    return  await contract.create(req)
}


module.exports = {
    add,
}
