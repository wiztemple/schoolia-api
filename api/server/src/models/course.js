'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    other_name: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    schools: DataTypes.STRING,
    utme: DataTypes.STRING,
    utme_subjects: DataTypes.STRING,
    direct_entry: DataTypes.STRING,
    special_consideration: DataTypes.STRING,
    creadtedAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
  };
  return Course;
};