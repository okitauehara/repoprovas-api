import supertest from 'supertest';
import { getConnection } from 'typeorm';
import { createCategory } from '../factories/categoryFactory';
import app, { init } from '../../src/app';
import { clearDatabase } from '../utils/database';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await clearDatabase();
  await getConnection().close();
});

describe('GET /categories', () => {
  it('should return status 200 and an array containing categories if the request was successfull', async () => {
    await createCategory();
    const response = await supertest(app).get('/categories');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          category: expect.any(String),
        }),
      ]),
    );
  });
});
