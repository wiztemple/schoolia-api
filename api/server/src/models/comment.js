'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    creadtedAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};