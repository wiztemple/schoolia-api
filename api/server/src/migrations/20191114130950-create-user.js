'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
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
			username: {
				type: Sequelize.STRING,
				allowNull: true
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			password: {
				type: Sequelize.STRING,
				allowNull: true
			},
			bio: {
				type: Sequelize.TEXT,
				allowNull: true
			},
			schoolname: {
				type: Sequelize.STRING,
				allowNull: true
			},
			course_of_study: {
				type: Sequelize.STRING,
				allowNull: true
			},
			year_of_admission: {
				type: Sequelize.STRING,
				allowNull: true
			},
			year_of_graduation: {
				type: Sequelize.STRING,
				allowNull: true
			},
			role: {
				type: Sequelize.ENUM('user', 'admin'),
				allowNull: true
			},
			isConfirmed: {
				type: Sequelize.BOOLEAN,
				allowNull: true
			},
			allowNotifications: {
				type: Sequelize.BOOLEAN,
				allowNull: true
			},
			avatar: {
				type: Sequelize.STRING,
				allowNull: true
			},
			isDeleted: {
				type: Sequelize.BOOLEAN,
				allowNull: true
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			deletedAt: {
				allowNull: true,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	}
};
