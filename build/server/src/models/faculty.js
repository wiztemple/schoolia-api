'use strict';

module.exports = function (sequelize, DataTypes) {
  var Faculty = sequelize.define('Faculty', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dean: {
      type: DataTypes.STRING,
      allowNull: true
    },
    schoolId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    departmentCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    facultyView: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {});

  Faculty.associate = function (models) {
    Faculty.belongsTo(models.School, {
      foreignKey: 'schoolId'
    });
    Faculty.hasMany(models.Department, {
      foreignKey: 'facultyId'
    }); // Faculty.belongsTo(models.User, {
    // 	foreignKey: 'userId'
    // });
  };

  return Faculty;
};