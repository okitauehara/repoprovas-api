import { Router } from 'express';
import categoriesRouter from './routers/categoriesRouter';
import subjectsRouter from './routers/subjectsRouter';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/subjects', subjectsRouter);

export default router;
