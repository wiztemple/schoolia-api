import { Router } from 'express';
import SchoolController from '../controllers/SchoolController';

const router = Router();

router.get('/schools', SchoolController.getAllSchools);
// router.post('/', BookController.addBook);
router.get('/schools/:slug', SchoolController.getSchool);
// router.put('/:id', BookController.updatedBook);
// router.delete('/:id', BookController.deleteBook);

export default router;
