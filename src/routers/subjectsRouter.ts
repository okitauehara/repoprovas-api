import { Router } from 'express';
import * as subjectsController from '../controllers/subjectsController';

const router = Router();

router.get('/', subjectsController.getSubjects);
router.get('/by-period', subjectsController.getSubjectsByPeriod);

export default router;
