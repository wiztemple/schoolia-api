import SchoolService from '../services/SchoolService';

class SchoolController {
	static async getAllSchools(request, response) {
		try {
			const limit = parseInt(request.query.limit, 5) || 5;
			const page = parseInt(request.query.page, 5) || 1;

			const schools = await SchoolService.getAllSchools(limit, page);
			if (!schools || schools.rows.length <= 0) {
				return response.status(200).json({
					message: 'no school found'
				});
			}
			return response.status(200).json({
				message: 'schools successfully retrieved',
				schools
			});
		} catch (error) {
			console.log(error);
		}
	}

	/**
* Get a single article
* @param {object} request Request Object
* @param {object} response Response Object
* @returns {object} Article object or error object if article is not found
*/
	static async getSchool(request, response) {
		try {
			const schoolSlug = request.params.slug;
			const school = await SchoolService.getSchoolBySlug(schoolSlug);
			if (!school) {
				return response.status(200).json({
					message: 'school not found'
				});
			}
			return response.status(200).json({
				message: 'school successfully retrieved',
				school
			});
		} catch (error) {
			console.log(error);
		}
	}
}
export default SchoolController;
