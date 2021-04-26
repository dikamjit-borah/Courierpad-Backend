'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AGENTS_TABLEs', {
      agent_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agent_name: {
        type: Sequelize.STRING
      },
      agent_password: {
        type: Sequelize.STRING
      },
      agent_dob: {
        type: Sequelize.DATE
      },
      agent_doj: {
        type: Sequelize.DATE
      },
      agent_phone: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('AGENTS_TABLEs');
  }
};