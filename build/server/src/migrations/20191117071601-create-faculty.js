'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Faculties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dean: {
        type: Sequelize.STRING,
        allowNull: true
      },
      schoolId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      departmentCount: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      facultyView: {
        type: Sequelize.INTEGER,
        allowNull: true
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
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Faculties');
  }
};