import { Router } from 'express';
import * as examsController from '../controllers/examsController';

const router = Router();

router.post('/', examsController.postExam);
router.get('/by-subject/:subjectId', examsController.getExamBySubjectId);
router.get('/by-professor/:professorId', examsController.getExamByProfessorId);

export default router;
