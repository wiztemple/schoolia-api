import schools from '../seedData/schools.data';

export default {
	up: (queryInterface) => queryInterface.bulkInsert('Schools', schools, {}),
	down: (queryInterface) => queryInterface.bulkDelete('Schools', null, {})
};
