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

    describe('subtract route', () => {
        const value1 = '5';
        const value2 = '4';
        const response = { value: 1 };

        it('should handle success as a 200 response', () => {
            mock.onGet(`${serviceUrl}/mathematics/subtract/${value1}/${value2}`).reply(200, response.value);

            return request(app).get(`/subtract/${value1}/${value2}`)
                .expect(200)
                .then(res => expect(res.text).toEqual(JSON.stringify(response)));
        });

        // We are getting a 400 back, but since we are passing the errors down with next
        // This actually returns an internal server error.
        it('should handle errors', () => {
            mock.onGet(`${serviceUrl}/mathematics/subtract/${value1}/${value2}`).reply(400);

            return request(app).get(`/subtract/${value1}/${value2}`)
                .expect(500);
        });
    });

    describe('multiply route', () => {
        const value1 = '5';
        const value2 = '4';
        const response = { value: 20 };

        it('should handle success as a 200 response', () => {
            mock.onGet(`${serviceUrl}/mathematics/multiply/${value1}/${value2}`).reply(200, response.value);

            return request(app).get(`/multiply/${value1}/${value2}`)
                .expect(200)
                .then(res => expect(res.text).toEqual(JSON.stringify(response)));
        });

        // We are getting a 400 back, but since we are passing the errors down with next
        // This actually returns an internal server error.
        it('should handle errors', () => {
            mock.onGet(`${serviceUrl}/mathematics/multiply/${value1}/${value2}`).reply(400);

            return request(app).get(`/multiply/${value1}/${value2}`)
                .expect(500);
        });
    });

    describe('divide route', () => {
        const value1 = '10';
        const value2 = '2';
        const response = { value: 5 };

        it('should handle success as a 200 response', () => {
            mock.onGet(`${serviceUrl}/mathematics/divide/${value1}/${value2}`).reply(200, response.value);

            return request(app).get(`/divide/${value1}/${value2}`)
                .expect(200)
                .then(res => expect(res.text).toEqual(JSON.stringify(response)));
        });

        // We are getting a 400 back, but since we are passing the errors down with next
        // This actually returns an internal server error.
        it('should handle errors', () => {
            mock.onGet(`${serviceUrl}/mathematics/divide/${value1}/${value2}`).reply(400);

            return request(app).get(`/divide/${value1}/${value2}`)
                .expect(500);
        });
    });

    describe('squareRoot route', () => {
        const value1 = '4';
        const response = { value: 2 };

        it('should handle success as a 200 response', () => {
            mock.onGet(`${serviceUrl}/mathematics/squareRoot/${value1}`).reply(200, response.value);

            return request(app).get(`/squareRoot/${value1}`)
                .expect(200)
                .then(res => expect(res.text).toEqual(JSON.stringify(response)));
        });

        // We are getting a 400 back, but since we are passing the errors down with next
        // This actually returns an internal server error.
        it('should handle errors', () => {
            mock.onGet(`${serviceUrl}/mathematics/squareRoot/${value1}`).reply(400);

            return request(app).get(`/squareRoot/${value1}`)
                .expect(500);
        });
    });
});
