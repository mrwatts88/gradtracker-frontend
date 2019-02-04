import request from 'supertest';
import express from 'express';
import axios from 'axios';
import router from '../routes/concatenation_route';
const MockAdapter = require('axios-mock-adapter');
const config = require('config');

const serviceUrl = config.get('serviceUrl');

const mock = new MockAdapter(axios);

describe('Concatenation Route', () => {
    const app = express();
    app.use(router);

    const val1 = 'test';
    const val2 = 'ing';
    it('should handle success as a 200 response', () => {
        mock.onGet(`${serviceUrl}/concatenate/${val1}/${val2}`).reply(200, `${val1}${val2}`);

        return request(app).get(`/${val1}/${val2}`)
            .expect(200)
            .then(res => expect(res.text).toEqual(`${val1}${val2}`));
    });

    // We are getting a 400 back, but since we are passing the errors down with next
    // This actually returns an internal server error.
    it('should handle errors', () => {
        mock.onGet(`${serviceUrl}/concatenate/${val1}/${val2}`).reply(400);

        return request(app).get(`/${val1}/${val2}`)
            .expect(500);
    });
});
