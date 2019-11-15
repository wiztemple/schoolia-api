'use strict';
module.exports = (sequelize, DataTypes) => {
	const School = sequelize.define('School', {
		slug: {
			type: DataTypes.STRING,
			allowNull: false
		},
		userid: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		mission: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		motto: {
			type: DataTypes.STRING,
			allowNull: true
		},
		nickname: {
			type: DataTypes.STRING,
			allowNull: true
		},
		established: {
			type: DataTypes.STRING,
			allowNull: false
		},
		founder: {
			type: DataTypes.STRING,
			allowNull: true
		},
		campus: {
			type: DataTypes.STRING,
			allowNull: true
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		website: {
			type: DataTypes.STRING,
			allowNull: false
		},
		logo: {
			type: DataTypes.STRING,
			allowNull: false
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false
		},
		country: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'Nigeria'
		},
		mascot: {
			type: DataTypes.STRING,
			allowNull: true
		},
		colors: {
			type: DataTypes.STRING,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		telephone: {
			type: DataTypes.STRING,
			allowNull: false
		},
		pmb: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		school_photos: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE
		},
		updatedAt: {
			type: DataTypes.DATE
		},
		comments: {
			type: DataTypes.INTEGER
		},
		likes: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		views: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		school_head: {
			type: DataTypes.STRING,
			allowNull: true
		},
		type: {
			type: DataTypes.ENUM('federal', 'state', 'private'),
			allowNull: false
		},
		institution_type: {
			type: DataTypes.ENUM('university', 'polytechnic', 'college', 'monotechnic', 'others'),
			allowNull: false
		},
		isDeleted: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false
		}
	});
	School.associate = (models) => {
		School.belongsTo(models.User, {
			foreignKey: 'userid',
			as: 'Creator'
		});
	};
	return School;
};
