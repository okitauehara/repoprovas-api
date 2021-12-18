import { getRepository } from 'typeorm';
import faker from 'faker';
import { createCategory } from './categoryFactory';
import Names from '../../src/entities/Names';
import Subjects from '../../src/entities/Subjects';
import Professors from '../../src/entities/Professors';
import Periods from '../../src/entities/Periods';

async function createName() {
  const fakeName = getRepository(Names).create({
    id: faker.datatype.number(),
    name: faker.lorem.word(),
  });
  await getRepository(Names).save(fakeName);
  return fakeName;
}

async function createPeriod() {
  const fakePeriod = getRepository(Periods).create({
    id: faker.datatype.number(),
    period: faker.lorem.word(),
  });
  await getRepository(Periods).save(fakePeriod);
  return fakePeriod;
}

async function createSubject() {
  const fakePeriod = await createPeriod();

  const fakeSubject = getRepository(Subjects).create({
    id: faker.datatype.number(),
    subject: faker.lorem.word(),
    period_id: fakePeriod.id,
  });
  await getRepository(Subjects).save(fakeSubject);
  return fakeSubject;
}

async function createProfessor() {
  const fakeProfessor = getRepository(Professors).create({
    id: faker.datatype.number(),
    professor: faker.lorem.word(),
  });
  await getRepository(Professors).save(fakeProfessor);
  return fakeProfessor;
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
