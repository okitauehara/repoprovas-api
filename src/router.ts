import { Router } from 'express';
import categoriesRouter from './routers/categoriesRouter';
import professorsRouter from './routers/professorsRouter';
import subjectsRouter from './routers/subjectsRouter';
import examsRouter from './routers/examsRouter';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/subjects', subjectsRouter);
router.use('/professors', professorsRouter);
router.use('/exams', examsRouter);

export default router;
