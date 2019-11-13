import SchoolService from '../services/SchoolService';

class SchoolController {
	static async getAllSchools(request, response) {
		try {
			const schools = await SchoolService.getAllSchools();
			console.log(schools);
			if (schools.length > 0) {
				response.status(200).json({
					message: 'schools retrieved successfully',
					schools
				});
			} else {
				response.status(200).json({
					message: 'no school found'
				});
			}
			return response;
		} catch (error) {
			console.log(error);
		}
	}
}
export default SchoolController;
