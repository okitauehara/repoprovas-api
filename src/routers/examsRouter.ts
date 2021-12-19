import { Router } from 'express';
import * as examsController from '../controllers/examsController';

const router = Router();

router.post('/', examsController.postExam);
router.get('/:subjectId', examsController.getExamBySubjectId);
router.get('/:professorId', examsController.getExamByProfessorId);

export default router;
