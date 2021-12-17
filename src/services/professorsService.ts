import { getRepository } from 'typeorm';
import Professors from '../entities/Professors';

async function getBySubjectId(subjectId: number) {
  const result = await getRepository(Professors).find({
    where: { subject: subjectId },
  });
  return result;
}

export {
  getBySubjectId,
};
