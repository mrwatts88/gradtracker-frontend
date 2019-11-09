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
      await request(app).post(`/`).expect(200);
    });

    it('should handle errors', async () => {
      mock.onPost(`${serviceUrl}/form/`).reply(400, {});
      await request(app).post(`/`).expect(500);
    });
  });

  describe('put', () => {
    it('should handle success as a 200 response', async () => {
      mock.onPut(`${serviceUrl}/form/1`).reply(200, { test: 'response' });
      const response = await request(app).put(`/1`).expect(200);
      expect(response.text).toEqual(JSON.stringify({ test: 'response' }));
    });

    it('should handle errors', async () => {
      mock.onPut(`${serviceUrl}/form/1`).reply(400, {});
      await request(app).put(`/1`).expect(500);
    });
  });

  describe('get by formDef id', () => {
    it('should handle success as a 200 response', async () => {
      const expected = { test: 'response' };
      mock.onGet(`${serviceUrl}/form/panther_id/1`).reply(200, expected);
      const response = await request(app).get(`/panther_id/1`).expect(200);
      expect(response.text).toEqual(JSON.stringify(expected));
    });

    it('should handle errors', async () => {
      mock.onGet(`${serviceUrl}/form/panther_id/1`).reply(400, {});
      await request(app).get(`/panther_id/1`).expect(500);
    });
  });

  describe('get by panther id', () => {
    it('should handle success as a 200 response', async () => {
      const expected = { test: 'response' };
      mock.onGet(`${serviceUrl}/form/formDef/1`).reply(200, expected);
      const response = await request(app).get(`/formDef/1`).expect(200);

      expect(response.text).toEqual(JSON.stringify(expected));
    });

    it('should handle errors', async () => {
      mock.onGet(`${serviceUrl}/form/formDef/1`).reply(400);
      await request(app).get(`/formDef/1`).expect(500);
    });
  });
});
