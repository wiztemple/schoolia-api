import database from '../src/models';

class SchoolService {
	static async getAllSchools() {
		try {
			return await database.School.findAll();
		} catch (error) {
			console.log(error);
		}
	}
	// static async addSchool(newSchool) {
	// 	try {
	// 		return await database.School.create(newSchool);
	// 	} catch (error) {
	// 		throw error;
	// 	}
	// }

	// static async updateSchool(id, updateSchool) {
	// 	try {
	// 		const schoolToUpdate = await database.School.findOne({
	// 			where: { id: Number(id) }
	// 		});

	// 		if (schoolToUpdate) {
	// 			await database.School.update(updateSchool, { where: { id: Number(id) } });

	// 			return updateSchool;
	// 		}
	// 		return null;
	// 	} catch (error) {
	// 		throw error;
	// 	}
	// }

	// static async getASchool(id) {
	// 	try {
	// 		const school = await database.School.findOne({
	// 			where: { id: Number(id) }
	// 		});

	// 		return school;
	// 	} catch (error) {
	// 		throw error;
	// 	}
	// }

	// static async deleteSchool(id) {
	// 	try {
	// 		const schoolToDelete = await database.School.findOne({ where: { id: Number(id) } });

	// 		if (schoolToDelete) {
	// 			const deletedSchool = await database.School.destroy({
	// 				where: { id: Number(id) }
	// 			});
	// 			return deletedSchool;
	// 		}
	// 		return null;
	// 	} catch (error) {
	// 		throw error;
	// 	}
	// }
}
export default SchoolService;
