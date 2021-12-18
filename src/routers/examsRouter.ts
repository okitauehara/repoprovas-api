import { Router } from 'express';
import * as examsController from '../controllers/examsController';

const router = Router();

router.post('/', examsController.postExam);

export default router;
