const conn = require('./connection');
const { DataTypes } = require('sequelize');
const price = require('./price');


const Bill = conn.define('bill', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    sum: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialNotes: {
      type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
  tableName: 'Bill',
});

//Bill.hasOne(price, { onDelete: 'cascade', onUpdate: 'cascade' });

module.exports = Bill