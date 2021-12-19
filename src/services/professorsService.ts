import { getRepository } from 'typeorm';
import Professors from '../entities/Professors';
import Subjects from '../entities/Subjects';
import NotFound from '../errors/NotFound';

async function getBySubjectId(subjectId: number): Promise<Subjects> {
  const result = await getRepository(Subjects).find({
    where: { id: subjectId },
    relations: ['professors'],
  });
  if (!result.length) throw new NotFound('No professor found for this subject');
  return result[0];
}

async function get() {
  const result = await getRepository(Professors).find({
    relations: ['exams'],
    order: {
      professor: 'ASC',
    },
  });
  return result;
}

export {
  getBySubjectId,
  get,
};
