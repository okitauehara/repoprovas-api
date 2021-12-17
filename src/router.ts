import { Router } from 'express';
import categoriesRouter from './routers/categoriesRouter';
import professorsRouter from './routers/professorsRouter';
import subjectsRouter from './routers/subjectsRouter';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/subjects', subjectsRouter);
router.use('/professors', professorsRouter);

export default router;
