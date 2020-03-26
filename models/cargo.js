const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: 'mysql',
    host: process.env.host,
    define: {
      timestamps: false
    },
});

const Cargo = sequelize.define('cargo', {
    idCargo: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    weight: {
      type: Sequelize.STRING,
      allowNull: false,
    },
});
 

module.exports = Cargo