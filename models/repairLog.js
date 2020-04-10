const conn = require('./connection');
const { DataTypes } = require('sequelize');


const RepairLog = conn.define('repairLog', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    breakdownTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fixDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    describe: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
}, {
  tableName: 'RepairLog',
});
 

module.exports = RepairLog