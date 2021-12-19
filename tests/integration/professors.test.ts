import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import { createProfessor } from '../factories/professorFactory';
import { createSubject } from '../factories/subjectFactory';
import { clearDatabase } from '../utils/database';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await clearDatabase();
  await getConnection().close();
});

describe('GET /professors/:subjectId', () => {
  it('should return status 200 and an array containing professors if the request was successfull', async () => {
    const fakeSubject = await createSubject();
    const response = await supertest(app).get(`/professors/${fakeSubject.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        professors: expect.any(Array),
        period_id: expect.any(Number),
        subject: expect.any(String),
      }),
    );
  });

  it('should return status 404 if the requested subjectId did not return any professor', async () => {
    const response = await supertest(app).get('/professors/9999');
    expect(response.status).toBe(404);
  });
});

describe('GET /professors', () => {
  it('should return status 200 and an array containing professors and exams if the request was successfull', async () => {
    await createProfessor();
    const response = await supertest(app).get('/professors');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          professor: expect.any(String),
          exams: expect.any(Array),
        }),
      ]),
    );
  });
});
