const conn = require('./connection');
const { DataTypes } = require('sequelize');


const Driver = conn.define('driver', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    biography: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialNotes: {
      type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
  tableName: 'Driver',
});


module.exports = Driver