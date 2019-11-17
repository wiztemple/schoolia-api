'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Departments', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			userid: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			hod: {
				type: Sequelize.STRING,
				allowNull: true
			},
			facultyId: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			accredited: {
				type: Sequelize.BOOLEAN,
				allowNull: true
			},
			utme_cut_off: {
				type: Sequelize.INTEGER,
				allowNull: true
			},
			departmentView: {
				type: Sequelize.INTEGER,
				allowNull: true
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
		return queryInterface.dropTable('Departments');
	}
};
