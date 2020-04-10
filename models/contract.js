const conn = require('./connection');
const Sequelize = require('sequelize');
const path = require('./path');
const contractStatus = require('./contract-status');
const driver = require('./driver');


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
Contract.hasOne(contractStatus, { onDelete: 'cascade', onUpdate: 'cascade' });
Contract.hasOne(driver, { onDelete: 'cascade', onUpdate: 'cascade' });

module.exports = Contract