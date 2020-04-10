const conn = require('./connection');
const { DataTypes } = require('sequelize');


const Path = conn.define('path', {
    idCargo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    deadLine: {
      type: DataTypes.DATETIME,
      allowNull: false,
    },
    distance: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startLoc: {
      type: DataTypes.STRING,
        allowNull: false,
    },
    arrivalLoc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, {
  tableName: 'Path',
});
 

module.exports = Path