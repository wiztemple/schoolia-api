import { Router } from 'express';
import SchoolController from '../controllers/SchoolController';
import isAuthenticated from '../middleware/checkAuth';

const router = Router();

router.get('/schools', SchoolController.getAllSchools);
router.post('/school', isAuthenticated, SchoolController.addSchool);
router.get('/schools/:slug', SchoolController.getSchool);
// router.put('/:id', BookController.updatedBook);
// router.delete('/:id', BookController.deleteBook);

export default router;
