import { getRepository } from 'typeorm';
import Categories from '../../src/entities/Categories';
import Exams from '../../src/entities/Exams';
import Professors from '../../src/entities/Professors';
import ProfessorsSubjects from '../../src/entities/ProfessorsSubjects';

export async function clearDatabase() {
  await getRepository(Exams).delete({});
  await getRepository(ProfessorsSubjects).delete({});
  await getRepository(Categories).delete({});
  await getRepository(Professors).delete({});
}
