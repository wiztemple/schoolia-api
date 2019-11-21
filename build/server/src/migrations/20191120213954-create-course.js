'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Courses', (0, _defineProperty2["default"])({
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
      }
    }, "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE
    }));
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Courses');
  }
};