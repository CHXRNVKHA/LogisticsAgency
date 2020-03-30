const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: 'mysql',
    host: process.env.host,
    define: {
      timestamps: false
    },
});

const User = sequelize.define('user', {
    idUser: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        is: /^[0-9a-f]{64}$/i,
        allowNull: false,
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'user',
    },
}, {
    tableName: 'User',
});

User.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({_id: user._id.toString() }, process.env.secretKeyforJsonwebtoken, {
        expiresIn: 86400
    });
    return token;
};

User.addHook('beforeSave', async function(){
    const user = this;
    user.password = await bcrypt.hash(user.password, 8);
})

module.exports = User