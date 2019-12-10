import request from 'supertest';
import express from 'express';
import axios from 'axios';
import router from '../routes/milestoneRoutes';
const MockAdapter = require('axios-mock-adapter');
const config = require('config');

const serviceUrl = config.get('serviceUrl');

const mock = new MockAdapter(axios);

describe('FormDef Routes', () => {
  const app = express();
  app.use(router);

  describe('get all', () => {
    it('should handle success as a 200 response', async () => {
      mock.onGet(`${serviceUrl}/degreeProgram/1`).reply(200, { test: 'milestoneInfo' });

      const res = await request(app)
        .get(`/`)
        .expect(200);

      expect(res.text).toEqual(JSON.stringify({ test: 'milestoneInfo' }));
    });

    it('should handle errors', async () => {
      mock.onGet(`${serviceUrl}/degreeProgram/1`).reply(400, {});

      await request(app)
        .get(`/`)
        .expect(500);
    });
  });

  describe('put', () => {
    it('should handle success as a 200 response', async () => {
        mock.onPut(`${serviceUrl}/degreeProgram/1`).reply(200, { test: 'response' });
        const response = await request(app).put(`/1`).expect(200);
        expect(response.text).toEqual(JSON.stringify({ test: 'response' }));
    });

    it('should handle errors', async () => {
        mock.onPut(`${serviceUrl}/degreeProgram/1`).reply(400, {});
        await request(app).put(`/1`).expect(500);
    });
});
});