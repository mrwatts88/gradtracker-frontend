import request from 'supertest';
import express from 'express';
import axios from 'axios';
import router from '../index';
const MockAdapter = require('axios-mock-adapter');
const config = require('config');

const serviceUrl = config.get('serviceUrl');

const mock = new MockAdapter(axios);

describe('Concatenation Route', () => {
    const app = express();
    app.use(router);

    const val = 'test';
    it('should handle success as a 200 response', () => {
        mock.onGet(`${serviceUrl}/palindrome/${val}`).reply(200, true);

        return request(app).get(`/palindrome/${val}`)
            .expect(200)
            .then(res => expect(res.text).toEqual(JSON.stringify({result: true})));
    });

    // We are getting a 400 back, but since we are passing the errors down with next
    // This actually returns an internal server error.
    it('should handle errors', () => {
        mock.onGet(`${serviceUrl}/palindrome/${val}`).reply(400);

        return request(app).get(`/palindrome/${val}`)
            .expect(500);
    });
});
