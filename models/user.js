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

module.exports = User