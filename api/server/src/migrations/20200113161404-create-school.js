'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Schools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      slug: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      mission: {
        type: Sequelize.TEXT
      },
      motto: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      established: {
        type: Sequelize.STRING
      },
      founder: {
        type: Sequelize.STRING
      },
      campus: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      website: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      mascot: {
        type: Sequelize.STRING
      },
      colors: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      pmb: {
        type: Sequelize.INTEGER
      },
      school_photos: {
        type: Sequelize.ARRAY
      },
      commentCount: {
        type: Sequelize.INTEGER
      },
      likeCount: {
        type: Sequelize.INTEGER
      },
      viewsCount: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.ENUM
      },
      category: {
        type: Sequelize.ENUM
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      school_head: {
        type: Sequelize.STRING
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      },
      facultyCount: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Schools');
  }
};