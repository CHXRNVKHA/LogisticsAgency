const conn = require('./connection');
const { DataTypes } = require('sequelize');


const Path = conn.define('path', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    deadLine: {
      type: DataTypes.DATE,
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