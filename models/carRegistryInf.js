const conn = require('./connection');
const { DataTypes } = require('sequelize');


const CarRegistryInf = conn.define('carRegistryInf', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    registryNum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, {
  tableName: 'CarRegistryInf',
});
 

module.exports = CarRegistryInf