import database from '../src/models';

class SchoolService {
	static async getAllFaculties() {
		try {
			return await database.Faculty.findAll();
		} catch (error) {
			throw error;
		}
	}
	static async addFaculty(newFaculty) {
		try {
			return await database.Faculty.create(newFaculty);
		} catch (error) {
			throw error;
		}
	}
}

export default SchoolService;
