import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../enums/httpStatusCode';
import * as subjectsService from '../services/subjectsService';

async function getSubjects(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await subjectsService.get();
    return res.status(HttpStatusCode.OK).send(result);
  } catch (error) {
    next(error);
  }
}

async function getSubjectsByPeriod(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await subjectsService.getByPeriod();
    return res.status(HttpStatusCode.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export {
  getSubjects,
  getSubjectsByPeriod,
};
