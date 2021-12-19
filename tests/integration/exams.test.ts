import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import {
  createBadRequest, createConflictExam, createExam, createExamBySubjectId, createNotFoundExam,
} from '../factories/examFactory';
import { createSubject } from '../factories/subjectFactory';
import { clearDatabase } from '../utils/database';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await clearDatabase();
  await getConnection().close();
});

describe('POST /exams', () => {
  it('should return status 201 if the exam was successfully created', async () => {
    const fakeExam = await createExam();
    const response = await supertest(app).post('/exams').send(fakeExam);
    expect(response.status).toBe(201);
  });

  it('should return status 400 if the request body was bad', async () => {
    const fakeExam = await createBadRequest();
    const response = await supertest(app).post('/exams').send(fakeExam);
    expect(response.status).toBe(400);
  });

  it('should return status 404 if the request body contains not found items', async () => {
    const fakeExam = await createNotFoundExam();
    const response = await supertest(app).post('/exams').send(fakeExam);
    expect(response.status).toBe(404);
  });

  it('should return status 409 if the exam url already exists', async () => {
    const fakeExam = await createConflictExam();
    const response = await supertest(app).post('/exams').send(fakeExam);
    expect(response.status).toBe(409);
  });
});

describe('GET /exams/:disciplineId', () => {
  it('should return status 200 and an array containing subject and exams', async () => {
    const fakeSubject = await createSubject();
    await createExamBySubjectId(fakeSubject);
    const response = await supertest(app).get(`/exams/${fakeSubject.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        subject: expect.any(String),
        period_id: expect.any(Number),
        exams: expect.any(Array),
      }),
    );
  });

  it('should return status 404 if the discipline id did not return any result', async () => {
    const response = await supertest(app).get('/exams/999');
    expect(response.status).toBe(404);
  });
});
