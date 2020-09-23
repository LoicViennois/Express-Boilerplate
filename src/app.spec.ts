import * as request from 'supertest';
import { Response } from 'supertest';
import { app } from './app';

describe('app', () => {
  test('should answer to the GET method', async () => {
    const res: Response = await request(app).get('/hello');
    expect(res.status).toBe(200);
    expect(res.text).toBe('hello world');
  });
});

