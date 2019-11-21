'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

module.exports = {
  up: function up(queryInterface, Sequelize) {
    var _queryInterface$creat;

    return queryInterface.createTable('Schools', (_queryInterface$creat = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      mission: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      motto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      alias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      established: {
        type: Sequelize.STRING,
        allowNull: false
      },
      founder: {
        type: Sequelize.STRING,
        allowNull: true
      },
      campus: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      history: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      catchment_areas: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true
      },
      logo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mascot: {
        type: Sequelize.STRING,
        allowNull: true
      },
      colors: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      telephone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pmb: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      school_photos: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      commentCount: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      likeCount: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      viewCount: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.ENUM('federal', 'state', 'private'),
        allowNull: false
      },
      category: {
        type: Sequelize.ENUM('university', 'polytechnic', 'college', 'monotechnic', 'others'),
        allowNull: false
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      school_head: {
        type: Sequelize.STRING,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      facultyCount: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    }, (0, _defineProperty2["default"])(_queryInterface$creat, "createdAt", {
      allowNull: false,
      type: Sequelize.DATE
    }), (0, _defineProperty2["default"])(_queryInterface$creat, "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE
    }), _queryInterface$creat));
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Schools');
  }
};