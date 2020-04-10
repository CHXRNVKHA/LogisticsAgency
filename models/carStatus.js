const conn = require('./connection');
const { DataTypes } = require('sequelize');
const repairLogs = require('./repairLog');

const CarStatus = conn.define('carStatus', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    currentStatus: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
}, {
  tableName: 'CarStatus',
});

CarStatus.hasOne(repairLog, { onDelete: 'cascade', onUpdate: 'cascade' });

module.exports = CarStatus