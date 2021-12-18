import { getRepository } from 'typeorm';
import Categories from '../../src/entities/Categories';

import Exams from '../../src/entities/Exams';

export async function clearDatabase() {
  await getRepository(Exams).delete({});
  await getRepository(Categories).delete({});
}
