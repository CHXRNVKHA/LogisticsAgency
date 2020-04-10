const conn = require('./connection');
const Sequelize = require('sequelize');
const path = require('./path');


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
 
Contract.hasOne(path, { onDelete: 'cascade', onUpdate: 'cascade' });

module.exports = Contract