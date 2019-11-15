import SchoolService from '../services/SchoolService';
import slugify from '../utils/slugify';

class SchoolController {
	static async addSchool(request, response) {
		try {
			const {
				name,
				mission,
				motto,
				type,
				institution_type,
				description,
				nickname,
				established,
				founder,
				pmb,
				email,
				telephone,
				location,
				state,
				longitude,
				latitude,
				mascot,
				colors,
				logo,
				website,
				campus,
				school_head,
				school_photos
			} = request.body;
			const newSchool = await SchoolService.addSchool({
				slug: slugify(`${name} ${Date.now()}`),
				userid: request.userId,
				name,
				mission,
				motto,
				type,
				institution_type,
				description,
				nickname,
				established,
				founder,
				pmb,
				email,
				telephone,
				location,
				state,
				longitude,
				latitude,
				mascot,
				colors,
				logo,
				website,
				campus,
				school_head,
				school_photos
			});
			return response.status(201).json({
				message: 'School successfully created',
				newSchool
			});
		} catch (error) {
			console.error(error);
		}
	}
	static async getAllSchools(request, response) {
		console.log(request.query);
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

	static async searchSchools(request, response) {
		try {
			const whereObj = {};
			whereObj[params.searchField] = params.seachTerm;

			const result = schools.findAll({ where: whereObj });
		} catch (error) {
			console.log(error);
		}
	}
}

export default SchoolController;
