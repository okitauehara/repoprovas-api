import supertest from 'supertest';
import { getConnection } from 'typeorm';

import app, { init } from '../../src/app';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe('GET /subjects', () => {
  it('should return status 200 and an array containing subjects if the request was successfull', async () => {
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
