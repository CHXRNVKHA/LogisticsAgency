const conn = require('./connection');
const { DataTypes } = require('sequelize');
const carStatus = require('./carStatus');
const carRegistyInf = require('./carRegistryInf');

const Car = conn.define('car', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, {
  tableName: 'Car',
});

//Car.hasOne(carStatus, { onDelete: 'cascade', onUpdate: 'cascade' });
//Car.hasOne(carRegistyInf, { onDelete: 'cascade', onUpdate: 'cascade' });
 

module.exports = Car