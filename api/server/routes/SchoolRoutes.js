import { Router } from 'express';
import SchoolController from '../controllers/SchoolController';
import FacultyController from '../controllers/FacultyController';
import isAuthenticated from '../middleware/checkAuth';

const router = Router();

router.get('/schools', SchoolController.getAllSchools);
router.post('/school', isAuthenticated, SchoolController.addSchool);
router.get('/schools/:slug', SchoolController.getSchool);
router.put('/schools/:slug', isAuthenticated, SchoolController.updateSchool);

// faculty
router.post('/schools/:id/faculty', isAuthenticated, FacultyController.addFaculty);
router.get('/schools/:id/faculties', FacultyController.getAllFaculties);
// router.delete('/:id', BookController.deleteBook);

export default router;
