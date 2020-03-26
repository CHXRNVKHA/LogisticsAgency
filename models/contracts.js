const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: 'mysql',
    host: process.env.host,
    define: {
      timestamps: false
    }
  });

const Contract = sequelize.define('contract', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    driver_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    orderStatus_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    bill_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    cargo_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    car_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    path_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  });
 

module.exports = Contract