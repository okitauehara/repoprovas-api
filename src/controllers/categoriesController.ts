import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../enums/httpStatusCode';
import * as categoriesService from '../services/categoriesService';

async function getCategories(_req: Request, res: Response, next: NextFunction) {
  try {
    const result = await categoriesService.get();
    return res.status(HttpStatusCode.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export {
  getCategories,
};
