'use strict';
module.exports = (sequelize, DataTypes) => {
	const Course = sequelize.define(
		'Course',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			other_name: {
				type: DataTypes.STRING,
				allowNull: true
			},
			userid: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			schools: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: true
			},
			utme: {
				type: DataTypes.STRING,
				allowNull: false
			},
			utme_subjects: {
				type: DataTypes.STRING,
				allowNull: true
			},
			direct_entry: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: true
			},
			special_consideration: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: true
			},
			creadtedAt: {
				type: DataTypes.DATE
			},
			updatedAt: {
				type: DataTypes.DATE
			},
			deletedAt: {
				type: DataTypes.DATE
			}
		},
		{}
	);
	Course.associate = function(models) {
		// associations can be defined here
	};
	return Course;
};
