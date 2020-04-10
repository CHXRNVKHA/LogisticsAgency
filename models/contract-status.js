const conn = require('./connection');
const { DataTypes } = require('sequelize');


const ContractStatus = conn.define('contractStatus', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    currentLoaction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passedTime: {
      type: DataTypes.DATETIME,
        allowNull: false,
    },
    leftTime: {
      type: DataTypes.DATETIME,
      allowNull: false,
    },
}, {
  tableName: 'ContractStatus',
});
 

module.exports = ContractStatus