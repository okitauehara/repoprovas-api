import { getRepository } from 'typeorm';
import faker from 'faker';
import Professors from '../../src/entities/Professors';

async function createProfessor(): Promise<Professors> {
  const fakeProfessor = getRepository(Professors).create({
    id: faker.datatype.number(),
    professor: faker.lorem.word(),
  });
  await getRepository(Professors).save(fakeProfessor);
  return fakeProfessor;
}

export {
  createProfessor,
};
