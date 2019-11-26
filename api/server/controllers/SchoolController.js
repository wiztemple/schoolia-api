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
				category,
				description,
				alias,
				established,
				founder,
				pmb,
				email,
				history,
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
				school_photos,
				catchment_areas
			} = request.body;
			school_photos.push('');
			const newSchool = await SchoolService.addSchool({
				slug: slugify(`${name} ${Date.now()}`),
				userid: request.userId,
				name,
				mission,
				motto,
				type,
				category,
				description,
				alias,
				established,
				founder,
				pmb,
				email,
				history,
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
				school_photos,
				catchment_areas
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
			const category = request.query.category;
			const type = request.query.type;

			if (
				category &&
				[ 'university', 'polytechnic', 'college', 'monotechnic', 'others' ].indexOf(category) == -1
			) {
				return response.status(400).json({
					message: 'the parameter supplied is invalid'
				});
			}
			if (type && [ 'federal', 'state', 'private' ].indexOf(type) == -1) {
				return response.status(400).json({
					message: 'the parameter supplied is invalid'
				});
			}
			const schools = await SchoolService.getAllSchools(limit, page, category, type);
			if (!schools || schools.rows.length <= 0) {
				return response.status(200).json({
					message: 'no school found'
				});
			}
			const { rows, ...data } = schools;
			return response.status(200).json({
				message: 'schools successfully retrieved',
				data: {
					schools: rows,
					...data
				}
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

			// increment views based on how many times this endpoint is fired
			school.viewCount = school.viewCount++ + 1;
			school.save();

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

	/**
* Get a single article
* @param {object} request Request Object
* @param {object} response Response Object
* @returns {object} Article object or error object if article is not found
*/

	static async updateSchool(request, response) {
		try {
			const schoolSlug = request.params.slug;
			const school = await SchoolService.getSchoolBySlug(schoolSlug);
			const schoolUpdateFields = {
				// userid: request.userId,
				name: request.body.name,
				mission: request.body.mission,
				motto: request.body.motto,
				type: request.body.type,
				category: request.body.category,
				description: request.body.description,
				alias: request.body.alias,
				established: request.body.established,
				founder: request.body.founder,
				pmb: request.body.pmb,
				email: request.body.email,
				history: request.body.history,
				telephone: request.body.telephone,
				location: request.body.location,
				state: request.body.state,
				longitude: request.body.longitude,
				latitude: request.body.latitude,
				mascot: request.body.mascot,
				colors: request.body.colors,
				logo: request.body.logo,
				website: request.body.website,
				campus: request.body.campus,
				school_head: request.body.school_head,
				school_photos: request.body.school_photos,
				catchment_areas: request.body.catchment_areas
			};
			if (school) {
				const updatedSchool = await SchoolService.updateSchool(schoolUpdateFields);
				return response.status(200).json({
					message: 'School was successfully updated',
					updatedSchool
				});
			} else {
				return response.status(404).json({
					message: 'School Not Found'
				});
			}
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default SchoolController;
