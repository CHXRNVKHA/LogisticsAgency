const conn = require('./connection');
const { DataTypes } = require('sequelize');


const Price = conn.define('price', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    tonneCost: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    kilometreCost: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    mileCost: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
}, {
  tableName: 'Price',
});


module.exports = Price