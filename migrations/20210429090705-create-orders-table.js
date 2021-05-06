'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ORDERS_TABLEs', {
   
      order_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_date: {
        type: Sequelize.DATE
      },
      order_client: {
        type: Sequelize.STRING
      },
      order_receiver: {
        type: Sequelize.STRING
      },
      order_location: {
        type: Sequelize.STRING
      },
      order_phone: {
        type: Sequelize.STRING
      },
      order_amount: {
        type: Sequelize.INTEGER
      },
      order_status: {
        type: Sequelize.STRING
      },
      order_assigned_to: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ORDERS_TABLEs');
  }
};