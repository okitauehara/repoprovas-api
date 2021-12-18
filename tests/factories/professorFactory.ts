import { getRepository } from 'typeorm';
import faker from 'faker';
import Professors from '../../src/entities/Professors';

export async function createProfessor() {
  const fakeProfessor = getRepository(Professors).create({
    id: faker.datatype.number(),
    professor: faker.lorem.word(),
  });
  await getRepository(Professors).save(fakeProfessor);
  return fakeProfessor;
}
