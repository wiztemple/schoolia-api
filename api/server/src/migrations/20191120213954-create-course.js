'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      other_name: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.INTEGER
      },
      schools: {
        type: Sequelize.STRING
      },
      utme: {
        type: Sequelize.STRING
      },
      utme_subjects: {
        type: Sequelize.STRING
      },
      direct_entry: {
        type: Sequelize.STRING
      },
      special_consideration: {
        type: Sequelize.STRING
      },
      creadtedAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Courses');
  }
};