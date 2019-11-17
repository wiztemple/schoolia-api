import database from '../src/models';
import paginationMeta from '../utils/paginationMeta';

class SchoolService {
	static async getAllSchools(limit = 5, page = 1, category, type) {
		const offset = limit * (page - 1);
		const whereObj = {};
		if (category) {
			whereObj.category = category;
		}
		if (type) {
			whereObj.type = type;
		}
		const schoolRecords = await database.School.findAndCountAll({
			limit,
			offset,
			where: whereObj,
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
* Finds an school by slug supplied
* @param {string} slug Slug value
* @returns {object | null} School object or null if school is not found
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

	/**
* Finds an school by id supplied
* @param {string} id ID value
* @returns {object | null} School object or null if school is not found
*/
	static async getSchoolById(id) {
		const school = await database.School.findOne({
			where: { id: Number(id) }
		});

		if (!school) {
			return null;
		}
		return school;
	}

	/**
   * Function to update a school in the database
   * @param {object} newData object
   * @param {object} id number
   * @returns {object} school object
   */
	static async updateSchool(slug, updateSchool) {
		try {
			const schoolToUpdate = await database.School.findOne({
				where: { slug: slug }
			});

			if (schoolToUpdate) {
				await database.School.update(updateSchool, { where: { slug: slug } });

				return updateSchool;
			}
			return null;
		} catch (error) {
			throw error;
		}
	}

	/** 
* Function to delete a school from the database
* @param {object} school
* @returns {Object | null} User object or null
*/

	static async deleteSchool(school) {
		const schoolRecord = await this.getSchoolBySlug(school.slug);
		if (!schoolRecord) {
			return null;
		}
		await schoolRecord.update({
			isDeleted: true
		});
	}
}

export default SchoolService;
