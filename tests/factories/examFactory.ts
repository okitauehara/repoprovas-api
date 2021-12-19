import { getRepository } from 'typeorm';
import faker from 'faker';
import { createCategory } from './categoryFactory';
import { createProfessor } from './professorFactory';
import { createSubject } from './subjectFactory';
import Names from '../../src/entities/Names';
import Exams from '../../src/entities/Exams';

async function createName() {
  const fakeName = getRepository(Names).create({
    id: faker.datatype.number(),
    name: faker.lorem.word(),
  });
  await getRepository(Names).save(fakeName);
  return fakeName;
}

async function createExam() {
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

async function createBadRequest() {
  const fakeName = await createName();
  const fakeCategory = await createCategory();
  const fakeSubject = await createSubject();
  const fakeProfessor = await createProfessor();

  const fakeExam = {
    name: fakeName.name,
    category: fakeCategory.id,
    subject: fakeSubject.id,
    professor: fakeProfessor.id,
  };

  return fakeExam;
}

async function createNotFoundExam() {
  const fakeName = await createName();
  const fakeSubject = await createSubject();
  const fakeProfessor = await createProfessor();

  const fakeExam = {
    name: fakeName.name,
    category: faker.datatype.number(),
    subject: fakeSubject.id,
    professor: fakeProfessor.id,
    url: faker.internet.url(),
  };

  return fakeExam;
}

async function createConflictExam() {
  const getExams = await getRepository(Exams).find();
  const existentUrl = getExams[0].url;
  const fakeName = await createName();
  const fakeCategory = await createCategory();
  const fakeSubject = await createSubject();
  const fakeProfessor = await createProfessor();

  const fakeExam = {
    name: fakeName.name,
    category: fakeCategory.id,
    subject: fakeSubject.id,
    professor: fakeProfessor.id,
    url: existentUrl,
  };

  return fakeExam;
}

async function createExamBySubjectId(fakeSubject: any) {
  const fakeName = await createName();
  const fakeCategory = await createCategory();
  const fakeProfessor = await createProfessor();

  const fakeExam = {
    name: fakeName.name,
    category: fakeCategory.id,
    subject: fakeSubject.id,
    professor: fakeProfessor.id,
  };

  return fakeExam;
}

async function createExamByProfessorId(fakeProfessor: any) {
  const fakeName = await createName();
  const fakeCategory = await createCategory();
  const fakeSubject = await createSubject();

  const fakeExam = {
    name: fakeName.name,
    category: fakeCategory.id,
    subject: fakeSubject.id,
    professor: fakeProfessor.id,
  };

  return fakeExam;
}

export {
  createExam,
  createBadRequest,
  createNotFoundExam,
  createConflictExam,
  createExamBySubjectId,
  createExamByProfessorId,
};
