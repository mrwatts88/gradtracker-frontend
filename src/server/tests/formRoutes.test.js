import request from 'supertest';
import express from 'express';
import axios from 'axios';
import router from '../routes/formRoutes';
const MockAdapter = require('axios-mock-adapter');
const config = require('config');

const serviceUrl = config.get('serviceUrl');

const mock = new MockAdapter(axios);

describe('Form Routes', () => {
  const app = express();
  app.use(router);

  describe('post', () => {
    it('should handle success as a 200 response', async () => {
      mock.onPost(`${serviceUrl}/form/`).reply(200);

      const r = await request(app)
        .post(`/`)
        .expect(200);
    });

    it('should handle errors', async () => {
      mock.onPost(`${serviceUrl}/form/`).reply(400, {});

      await request(app)
        .post(`/`)
        .expect(500);
    });
  });
});
