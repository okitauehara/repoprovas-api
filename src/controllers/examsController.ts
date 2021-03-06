import { Request, Response, NextFunction } from 'express';
import * as examsService from '../services/examsService';
import { HttpStatusCode } from '../enums/httpStatusCode';
import BadRequest from '../errors/BadRequest';
import Conflict from '../errors/Conflict';
import NotFound from '../errors/NotFound';

async function postExam(req: Request, res: Response, next: NextFunction) {
  try {
    await examsService.post(req.body);
    return res.sendStatus(HttpStatusCode.CREATED);
  } catch (error) {
    if (error instanceof BadRequest) return res.status(HttpStatusCode.BAD_REQUEST).send(error.message);
    if (error instanceof Conflict) return res.status(HttpStatusCode.CONFLICT).send(error.message);
    if (error instanceof NotFound) return res.status(HttpStatusCode.NOT_FOUND).send(error.message);
    next(error);
  }
}

async function getExamBySubjectId(req: Request, res: Response, next: NextFunction) {
  const subjectId = Number(req.params.subjectId);

  try {
    const result = await examsService.getBySubject(subjectId);
    return res.status(HttpStatusCode.OK).send(result);
  } catch (error) {
    next(error);
  }
}

async function getExamByProfessorId(req: Request, res: Response, next: NextFunction) {
  const professorId = Number(req.params.professorId);

  try {
    const result = await examsService.getByProfessor(professorId);
    return res.status(HttpStatusCode.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export {
  postExam,
  getExamBySubjectId,
  getExamByProfessorId,
};
