import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const router = Router();

// router.get('/', SchoolController.getAllSchools);
router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);
// router.get('/:slug', SchoolController.getSchool);
// router.put('/:id', BookController.updatedBook);
// router.delete('/:id', BookController.deleteBook);

export default router;
