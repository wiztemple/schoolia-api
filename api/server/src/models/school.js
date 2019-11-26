'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    slug: DataTypes.STRING,
    name: DataTypes.STRING,
    mission: DataTypes.TEXT,
    motto: DataTypes.STRING,
    nickname: DataTypes.STRING,
    established: DataTypes.STRING,
    founder: DataTypes.STRING,
    campus: DataTypes.STRING,
    description: DataTypes.TEXT,
    website: DataTypes.STRING,
    logo: DataTypes.STRING,
    location: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    mascot: DataTypes.STRING,
    colors: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    pmb: DataTypes.INTEGER,
    school_photos: DataTypes.ARRAY,
    commentCount: DataTypes.INTEGER,
    likeCount: DataTypes.INTEGER,
    viewsCount: DataTypes.INTEGER,
    type: DataTypes.ENUM,
    category: DataTypes.ENUM,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    school_head: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    isDeleted: DataTypes.BOOLEAN,
    facultyCount: DataTypes.INTEGER
  }, {});
  School.associate = function(models) {
    // associations can be defined here
  };
  return School;
};