import { Router } from 'express';
import * as examsController from '../controllers/examsController';

const router = Router();

router.post('/', examsController.postExam);
router.get('/:disciplineId', examsController.getExamById);

export default router;
