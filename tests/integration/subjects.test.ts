import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import { createSubject } from '../factories/subjectFactory';
import { clearDatabase } from '../utils/database';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await clearDatabase();
  await getConnection().close();
});

describe('GET /subjects', () => {
  it('should return status 200 and an array containing subjects if the request was successfull', async () => {
    await createSubject();
    const response = await supertest(app).get('/subjects');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          subject: expect.any(String),
        }),
      ]),
    );
  });
});

describe('GET /subjects/by-period', () => {
  it('should return status 200 and an array containing subjects if the request was successfull', async () => {
    await createSubject();
    const response = await supertest(app).get('/subjects/by-period');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          period: expect.any(String),
          subjects: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              subject: expect.any(String),
              period_id: expect.any(Number),
            }),
          ]),
        }),
      ]),
    );
  });
});
