import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../enums/httpStatusCode';
import NotFound from '../errors/NotFound';
import * as professorsService from '../services/professorsService';

async function getProfessorsById(req: Request, res: Response, next: NextFunction) {
  const subjectId = Number(req.params.subjectId);

  try {
    const result = await professorsService.getBySubjectId(subjectId);
    return res.status(HttpStatusCode.OK).send(result);
  } catch (error) {
    if (error instanceof NotFound) return res.status(HttpStatusCode.NOT_FOUND).send(error.message);
    next(error);
  }
}

async function getProfessors(_req: Request, res: Response, next: NextFunction) {
  try {
    const result = await professorsService.get();
    return res.status(HttpStatusCode.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export {
  getProfessorsById,
  getProfessors,
};
