const conn = require('./connection');
const { DataTypes } = require('sequelize');


const Company = conn.define('company', {
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
}, {
  tableName: 'Company',
});
 

module.exports = Company