'use strict';
module.exports = (sequelize, DataTypes) => {
	const Department = sequelize.define(
		'Department',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			userid: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			hod: {
				type: DataTypes.STRING,
				allowNull: true
			},
			facultyId: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			accredited: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue: false
			},
			utme_cut_off: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: 180
			},
			departmentView: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: 0
			}
		},
		{}
	);
	Department.associate = function(models) {
		Department.belongsTo(models.Faculty, {
			foreignKey: 'facultyId'
		});
		// Department.belongsTo(models.User, {
		// 	foreignKey: 'userId'
		// });
	};
	return Department;
};
