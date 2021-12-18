import { getRepository } from 'typeorm';
import Categories from '../../src/entities/Categories';
import Exams from '../../src/entities/Exams';
import Names from '../../src/entities/Names';
import Periods from '../../src/entities/Periods';
import Professors from '../../src/entities/Professors';
import ProfessorsSubjects from '../../src/entities/ProfessorsSubjects';
import Subjects from '../../src/entities/Subjects';

export async function clearDatabase() {
  await getRepository(Exams).delete({});
  await getRepository(ProfessorsSubjects).delete({});
  await getRepository(Categories).delete({});
  await getRepository(Professors).delete({});
  await getRepository(Subjects).delete({});
  await getRepository(Periods).delete({});
  await getRepository(Names).delete({});
}
