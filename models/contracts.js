const conn = require('./connection');
const Sequelize = require('sequelize');


const Contract = conn.define('contracts', {
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