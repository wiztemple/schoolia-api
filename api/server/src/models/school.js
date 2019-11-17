'use strict';
module.exports = (sequelize, DataTypes) => {
	const School = sequelize.define(
		'School',
		{
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
			alias: {
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
				allowNull: false
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			history: {
				type: DataTypes.TEXT,
				allowNull: true
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
			catchment_areas: {
				type: DataTypes.ARRAY(DataTypes.STRING),
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
			createdAt: {
				type: DataTypes.DATE
			},
			updatedAt: {
				type: DataTypes.DATE
			},
			commentCount: {
				type: DataTypes.INTEGER
			},
			likeCount: {
				type: DataTypes.INTEGER,
				defaultValue: 0
			},
			viewCount: {
				type: DataTypes.INTEGER,
				defaultValue: 0
			},
			type: {
				type: DataTypes.ENUM('federal', 'state', 'private'),
				allowNull: false
			},
			category: {
				type: DataTypes.ENUM('university', 'polytechnic', 'college', 'monotechnic', 'others'),
				allowNull: false
			},
			isDeleted: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue: false
			},
			facultyCount: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: 0
			}
		},
		{}
	);
	School.associate = function(models) {
		School.belongsTo(models.User, {
			foreignKey: 'userid',
			as: 'Creator'
		});
		School.hasMany(models.Faculty, {
			foreignKey: 'schoolId',
			as: 'Faculties'
		});
	};
	return School;
};
