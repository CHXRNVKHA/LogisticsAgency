const User = require('../models/user');

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const user = await User.findOne({
      where: {
        name: req.body.name
      }
    });
    if (user) {
        return res.status(400).send({
            message: 'Failed! Username is already in use!'
        })
    }
    //user = await User.findOne({
    //    where: {
    //      email: req.body.email
    //    }
    //});
    //if (user) {
    //    return res.status(400).send({
    //        message: "Failed! Email is already in use!"
    //   });
    next();
};

module.exports = {
    checkDuplicateUsernameOrEmail,
}