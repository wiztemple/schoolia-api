import database from '../src/models';
import paginationMeta from '../utils/paginationMeta';

class SchoolService {
	static async getAllSchools(limit = 5, page = 1) {
		const offset = limit * (page - 1);
		const schoolRecords = await database.School.findAndCountAll({
			limit,
			offset,
			order: [ [ 'createdAt', 'DESC' ] ]
		});
		schoolRecords.meta = paginationMeta(limit, page, schoolRecords.count);
		return schoolRecords;
	}
	static async addSchool(newSchool) {
		try {
			return await database.School.create(newSchool);
		} catch (error) {
			throw error;
		}
	}

	static async updateSchool(id, updateSchool) {
		try {
			const schoolToUpdate = await database.School.findOne({
				where: { id: Number(id) }
			});

			if (schoolToUpdate) {
				await database.School.update(updateSchool, { where: { id: Number(id) } });

				return updateSchool;
			}
			return null;
		} catch (error) {
			throw error;
		}
	}

	static async getSchool(id) {
		try {
			const school = await database.School.findOne({
				where: { id: Number(id) }
			});

			return school;
		} catch (error) {
			throw error;
		}
	}

	/**
* Finds an article by slug supplied
* @param {string} slug Slug value
* @returns {object | null} Article object or null if article is not found
*/
	static async getSchoolBySlug(slug) {
		const school = await database.School.findOne({
			where: { slug }
		});

		if (!school) {
			return null;
		}
		return school;
	}

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
