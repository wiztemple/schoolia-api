const schools = require('../seedData/schools.data');

module.exports = {
	up: (queryInterface) => queryInterface.bulkInsert('Schools', schools, {}),
	down: (queryInterface) => queryInterface.bulkDelete('Schools', null, {})
};
