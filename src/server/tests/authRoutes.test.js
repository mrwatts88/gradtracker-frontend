import request from 'supertest';
import express from 'express';
import axios from 'axios';
import router from '../routes/authRoutes';
const MockAdapter = require('axios-mock-adapter');
const config = require('config');

const serviceUrl = config.get('serviceUrl');

const mock = new MockAdapter(axios);

describe('Auth Routes', () => {
  const app = express();
  app.use(router);

  it('should handle success as a 200 response', () => {
    mock
      .onPost(`${serviceUrl}/auth`)
      .reply(200, {}, { authorization: 'test_token' });

    return request(app)
      .post(`/`, { email: 'test_email', password: 'test_password' })
      .expect(200)
      .then(res =>
        expect(res.text).toEqual(JSON.stringify({ token: 'test_token' }))
      );
  });

  // We are getting a 400 back, but since we are passing the errors down with next
  // This actually returns an internal server error.
  it('should handle errors', () => {
    mock.onPost(`${serviceUrl}/auth`).reply(400, {});

    return request(app)
      .post(`/`, { email: 'test_email', password: 'test_password' })
      .expect(500);
  });
});
