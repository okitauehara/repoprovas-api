import { getRepository } from 'typeorm';
import faker from 'faker';
import { createCategory } from './categoryFactory';
import { createProfessor } from './professorFactory';
import { createSubject } from './subjectFactory';
import Names from '../../src/entities/Names';

async function createName() {
  const fakeName = getRepository(Names).create({
    id: faker.datatype.number(),
    name: faker.lorem.word(),
  });
  await getRepository(Names).save(fakeName);
  return fakeName;
}

export async function createExam() {
  const fakeName = await createName();
  const fakeCategory = await createCategory();
  const fakeSubject = await createSubject();
  const fakeProfessor = await createProfessor();

  const fakeExam = {
    name: fakeName.name,
    category: fakeCategory.id,
    subject: fakeSubject.id,
    professor: fakeProfessor.id,
    url: faker.internet.url(),
  };

  return fakeExam;
}
