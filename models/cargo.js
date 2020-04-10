const conn = require('./connection');
const Sequelize = require('sequelize');


const Cargo = conn.define('cargo', {
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