const conn = require('./connection');
const Sequelize = require('sequelize');


const Contract = conn.define('contract', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'Contract',
});
 

module.exports = Contract