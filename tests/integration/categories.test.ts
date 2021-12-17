import supertest from 'supertest';
import { getConnection } from 'typeorm';

import app, { init } from '../../src/app';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe('GET /categories', () => {
  it('should return status 200 if the request was successfull', async () => {
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
