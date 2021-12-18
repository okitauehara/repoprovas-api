import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import { createBadRequest, createExam } from '../factories/examFactory';
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
});
