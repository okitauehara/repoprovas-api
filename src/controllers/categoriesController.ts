import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../enums/httpStatusCode';
import NotFound from '../errors/NotFound';
import * as categoriesService from '../services/categoriesService';

async function getCategories(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await categoriesService.get();
    return res.status(HttpStatusCode.OK).send(result);
  } catch (error) {
    if (error instanceof NotFound) return res.status(404).send(error.message);
    next(error);
  }
}

export {
  getCategories,
};
