'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Comments', (0, _defineProperty2["default"])({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Comments');
  }
};