import { Router } from 'express';
import categoriesRouter from './routers/categoriesRouter';

const router = Router();

router.use('/categories', categoriesRouter);

export default router;
