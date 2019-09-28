import request from 'supertest';
import express from 'express';
import axios from 'axios';
import router from '../routes/mathematics_route';
const MockAdapter = require('axios-mock-adapter');
const config = require('config');

const serviceUrl = config.get('serviceUrl');

const mock = new MockAdapter(axios);

describe('Mathematics Route', () => {
    const app = express();
    app.use(router);

    describe('add route', () => {
        const value1 = '3';
        const value2 = '4';
        const response = { value: 7 };

        it('should handle success as a 200 response', () => {
            mock.onGet(`${serviceUrl}/mathematics/add/${value1}/${value2}`).reply(200, response.value);

            return request(app).get(`/add/${value1}/${value2}`)
                .expect(200)
                .then(res => expect(res.text).toEqual(JSON.stringify(response)));
        });

        // We are getting a 400 back, but since we are passing the errors down with next
        // This actually returns an internal server error.
        it('should handle errors', () => {
            mock.onGet(`${serviceUrl}/mathematics/add/${value1}/${value2}`).reply(400);

            return request(app).get(`/add/${value1}/${value2}`)
                .expect(500);
        });
    });
});
