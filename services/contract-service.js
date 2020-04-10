const contract = require('../models/contract');

const add = async function (req) {
    return  await req.user.createContract(req.body);
}


module.exports = {
    add,
}
