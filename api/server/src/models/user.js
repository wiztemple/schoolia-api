'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.TEXT,
    schoolname: DataTypes.STRING,
    course_of_study: DataTypes.STRING,
    year_of_admission: DataTypes.STRING,
    year_of_graduation: DataTypes.STRING,
    role: DataTypes.ENUM,
    isConfirmed: DataTypes.BOOLEAN,
    avatar: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};