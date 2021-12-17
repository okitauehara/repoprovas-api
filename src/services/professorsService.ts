import { getRepository } from 'typeorm';
import Professors from '../entities/Professors';
import NotFound from '../errors/NotFound';

async function getBySubjectId(subjectId: number) {
  const result = await getRepository(Professors).find({
    where: { subject: subjectId },
  });
  if (!result.length) throw new NotFound('No professor found for this subject');
  return result;
}

export {
  getBySubjectId,
};
