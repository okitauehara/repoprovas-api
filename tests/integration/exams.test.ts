import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import { createExam } from '../factories/examFactory';
import { clearDatabase } from '../utils/database';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe('POST /exams', () => {
  it('should return status 201 if the exam was successfully created', async () => {
    const fakeExam = await createExam();
    const response = await supertest(app).post('/exams').send(fakeExam);
    expect(response.status).toBe(201);
  });
});
