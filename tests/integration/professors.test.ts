import supertest from 'supertest';
import { getConnection } from 'typeorm';
import faker from 'faker';

import app, { init } from '../../src/app';

const fakeProfessorId = faker.random.arrayElement(['1', '2', '3', '4', '5']);

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe('GET /professors', () => {
  it('should return status 200 and an array containing professors if the request was successfull', async () => {
    const response = await supertest(app).get(`/professors/${fakeProfessorId}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          professor: expect.any(String),
        }),
      ]),
    );
  });

  it('should return status 404 if the requested subjectId did not return any professor', async () => {
    const response = await supertest(app).get('/professors/9999');
    expect(response.status).toBe(404);
  });
});
