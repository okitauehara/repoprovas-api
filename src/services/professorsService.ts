import { getRepository } from 'typeorm';
import Subjects from '../entities/Subjects';
import NotFound from '../errors/NotFound';

async function getBySubjectId(subjectId: number) {
  const result = await getRepository(Subjects).find({
    where: { id: subjectId },
    relations: ['professors'],
  });
  if (!result.length) throw new NotFound('No professor found for this subject');
  return result[0];
}

export {
  getBySubjectId,
};
