import { getRepository } from 'typeorm';
import Categories from '../entities/Categories';
import Exams from '../entities/Exams';
import Names from '../entities/Names';
import Professors from '../entities/Professors';
import Subjects from '../entities/Subjects';
import BadRequest from '../errors/BadRequest';
import Conflict from '../errors/Conflict';
import NotFound from '../errors/NotFound';
import { Exam } from '../interfaces/Exam';
import { examSchema } from '../schemas/examSchema';

async function post(exam: any) {
  const {
    name,
    category,
    subject,
    professor,
    url,
  }: Exam = exam;

  let nameId;

  const { error } = examSchema.validate(exam);
  if (error) throw new BadRequest('The request body contains invalid elements');

  const checkExam = await getRepository(Exams).find({
    url,
  });
  if (checkExam.length) throw new Conflict('Exam already registered');

  const checkName = await getRepository(Names).find({
    name,
  });
  if (!checkName.length) {
    await getRepository(Names).insert({ name });
    const returnName = await getRepository(Names).find({
      name,
    });
    nameId = Number(returnName[0].id);
  } else {
    nameId = Number(checkName[0].id);
  }

  const checkCategory = await getRepository(Categories).find({
    id: category,
  });
  if (!checkCategory.length) throw new NotFound('Invalid category');

  const checkSubject = await getRepository(Subjects).find({
    id: subject,
  });
  if (!checkSubject.length) throw new NotFound('Invalid subject');

  const checkProfessor = await getRepository(Professors).find({
    id: professor,
  });
  if (!checkProfessor.length) throw new NotFound('Invalid professor');

  const result = await getRepository(Exams).insert({
    name_id: nameId,
    category_id: category,
    subject_id: subject,
    professor_id: professor,
    url,
  });
  return result;
}

export {
  post,
};
