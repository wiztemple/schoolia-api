import { Router } from 'express';
import SchoolController from '../controllers/SchoolController';

const router = Router();

router.get('/', SchoolController.getAllSchools);
// router.post('/', BookController.addBook);
// router.get('/:id', BookController.getABook);
// router.put('/:id', BookController.updatedBook);
// router.delete('/:id', BookController.deleteBook);

export default router;
