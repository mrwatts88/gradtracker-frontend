import request from 'supertest';
import express from 'express';
import axios from 'axios';
import router from '../routes/formDefRoutes';
const MockAdapter = require('axios-mock-adapter');
const config = require('config');

const serviceUrl = config.get('serviceUrl');

const mock = new MockAdapter(axios);

describe('FormDef Routes', () => {
  const app = express();
  app.use(router);

  describe('get by id', () => {
    it('should handle success as a 200 response', async () => {
      mock.onGet(`${serviceUrl}/formDef/1`).reply(200, { test: 'formDef' });

      const res = await request(app)
        .get(`/1`)
        .expect(200);

      expect(res.text).toEqual(JSON.stringify({ test: 'formDef' }));
    });

    it('should handle errors', async () => {
      mock.onGet(`${serviceUrl}/formDef/1`).reply(400, {});

      await request(app)
        .get(`/1`)
        .expect(500);
    });
  });

  describe('get all', () => {
    it('should handle success as a 200 response', async () => {
      mock.onGet(`${serviceUrl}/formDef/`).reply(200, { test: 'formDefs' });

      const res = await request(app)
        .get(`/`)
        .expect(200);

      expect(res.text).toEqual(JSON.stringify({ test: 'formDefs' }));
    });

    it('should handle errors', async () => {
      mock.onGet(`${serviceUrl}/formDef/`).reply(400, {});

      await request(app)
        .get(`/`)
        .expect(500);
    });
  });

  describe('post', () => {
    it('should handle success as a 200 response', async () => {
      mock.onPost(`${serviceUrl}/formDef/`).reply(200);

      const res = await request(app)
        .post(`/`, { name: 'formDefName', fieldDefs: [] })
        .expect(200);

      expect(res.text).toEqual('');
    });

    it('should handle errors', async () => {
      mock.onPost(`${serviceUrl}/formDef/`).reply(400, {});

      await request(app)
        .post(`/`, { name: 'formDefName', fieldDefs: [] })
        .expect(500);
    });
  });
});
