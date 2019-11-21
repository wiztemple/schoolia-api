'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    schoolname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    course_of_study: {
      type: DataTypes.STRING,
      allowNull: true
    },
    year_of_admission: {
      type: DataTypes.STRING,
      allowNull: true
    },
    year_of_graduation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      allowNull: true
    },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    allowNotifications: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  });

  User.associate = function (models) {
    User.hasMany(models.School, {
      foreignKey: 'userid',
      as: 'school',
      onDelete: 'CASCADE'
    });
    User.hasMany(models.Faculty, {
      foreignKey: 'userid',
      as: 'faculty',
      onDelete: 'CASCADE'
    });
    User.hasMany(models.Department, {
      foreignKey: 'userid',
      as: 'department',
      onDelete: 'CASCADE'
    });
  };

  return User;
};