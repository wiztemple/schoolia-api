import SchoolService from '../services/SchoolService';
import FacultyService from '../services/FacultyService';

class FacultyController {
	static async addFaculty(request, response) {
		try {
			const schoolId = parseInt(request.params.id, 10);
			const school = await SchoolService.getSchoolById(schoolId);
			const userid = request.userId;
			if (!school) {
				return response.status(404).json({
					message: 'Sorry, no school found'
				});
			}
			const { name, dean } = request.body;
			const newFaculty = await FacultyService.addFaculty({
				userid,
				schoolId,
				name,
				dean
			});

			return response.status(201).json({
				message: 'Faculty successfully created',
				newFaculty
			});
		} catch (error) {
			console.error(error);
		}
	}

	static async getAllFaculties(request, response) {
		try {
			const schoolId = parseInt(request.params.id, 10);
			const school = await SchoolService.getSchoolById(schoolId);
			if (!school) {
				return response.status(404).json({
					message: 'Sorry, no school found'
				});
			}
			const allFaculties = await FacultyService.getAllFaculties();
			console.log(allFaculties);
			if (allFaculties.length > 0) {
				return response.status(200).json({
					message: 'faculties successfully retrieved',
					allFaculties
				});
			} else {
				return response.status(200).json({
					message: 'No faculty found'
				});
			}
		} catch (error) {
			console.log(error);
		}
	}
}

export default FacultyController;
