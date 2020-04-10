const conn = require('./connection');
const contract = require('./contract')
const Sequelize = require('sequelize');


const User = conn.define('user', {
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

User.hasMany(contract, { onDelete: 'cascade', onUpdate: 'cascade' });

module.exports = User