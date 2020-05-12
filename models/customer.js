const conn = require('./connection');
const { DataTypes } = require('sequelize');
const company = require('./company');

const Customer = conn.define('customer', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, {
  tableName: 'Customer',
});

//Customer.hasOne(company, { onDelete: 'cascade', onUpdate: 'cascade' });

module.exports = Customer