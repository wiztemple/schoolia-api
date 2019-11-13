'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Schools', {
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
			mission: {
				type: Sequelize.TEXT,
				allowNull: true
			},
			motto: {
				type: Sequelize.STRING,
				allowNull: true
			},
			nickname: {
				type: Sequelize.STRING,
				allowNull: true
			},
			established: {
				type: Sequelize.STRING,
				allowNull: false
			},
			founder: {
				type: Sequelize.STRING,
				allowNull: true
			},
			campus: {
				type: Sequelize.STRING,
				allowNull: true
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: false
			},
			website: {
				type: Sequelize.STRING,
				allowNull: false
			},
			logo: {
				type: Sequelize.STRING,
				allowNull: false
			},
			location: {
				type: Sequelize.STRING,
				allowNull: false
			},
			state: {
				type: Sequelize.STRING,
				allowNull: false
			},
			country: {
				type: Sequelize.STRING,
				allowNull: false
			},
			mascot: {
				type: Sequelize.STRING,
				allowNull: true
			},
			colors: {
				type: Sequelize.STRING,
				allowNull: true
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
			telephone: {
				type: Sequelize.STRING,
				allowNull: false
			},
			pmb: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			school_photos: {
				type: Sequelize.ARRAY(Sequelize.STRING),
				allowNull: true
			},
			comments: {
				type: Sequelize.INTEGER
			},
			likes: {
				type: Sequelize.INTEGER
			},
			views: {
				type: Sequelize.INTEGER
			},
			latitude: {
				type: Sequelize.FLOAT,
				allowNull: true
			},
			longitude: {
				type: Sequelize.FLOAT,
				allowNull: true
			},
			school_head: {
				type: Sequelize.STRING,
				allowNull: true
			},
			type: {
				type: Sequelize.ENUM('federal', 'state', 'private'),
				allowNull: false
			},
			institution_type: {
				type: Sequelize.ENUM('university', 'polytechnic', 'college', 'monotechnic', 'others'),
				allowNull: false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			isDeleted: {
				allowNull: false,
				type: Sequelize.BOOLEAN
			}
		});
	},
	down: (queryInterface) => {
		return queryInterface.dropTable('Schools');
	}
};
