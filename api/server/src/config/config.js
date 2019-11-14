import dotenv from 'dotenv';

dotenv.config();

module.exports = {
	// If using onine database
	// development: {
	//   use_env_variable: 'DATABASE_URL'
	// },

	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE_DEV,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		PORT: 7000,
		dialect: 'postgres',
		secret: process.env.SECRET_KEY
	},

	test: {
		database: 'schoolia-test-db',
		username: 'postgres',
		password: 'postgres',
		host: '127.0.0.1',
		dialect: 'postgres'
	},

	production: {
		database: process.env.DB_NAME,
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		host: process.env.DB_HOST,
		dialect: 'postgres'
	}
};
