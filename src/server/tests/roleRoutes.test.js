import request from 'supertest';
import express from 'express';
import axios from 'axios';
import router from '../routes/roleRoutes';
const MockAdapter = require('axios-mock-adapter');
const config = require('config');

const serviceUrl = config.get('serviceUrl');

const mock = new MockAdapter(axios);

describe('Role Routes', () => {
    const app = express();
    app.use(router);

    describe('get', () => {
        it('should handle 200 success', () => {
            mock.onGet(`${serviceUrl}/role/`).reply(200, {}, { authorization: 'test_token' });

            return request(app)
                .get(`/`)
                .expect(200)
                .then(res => expect(res.text).toEqual(JSON.stringify({})));
        });

        // We are getting a 400 back, but since we are passing the errors down with next
        // This actually returns an internal server error.
        it('should handle errors', () => {
            mock.onGet(`${serviceUrl}/role/`).reply(400, {});

            return request(app)
                .get(`/`)
                .expect(500);
        });
    });

    describe('post', () => {
        it('should handle success as a 200 response', async () => {
            mock.onPost(`${serviceUrl}/role/`).reply(200);

            const res = await request(app)
                .post(`/`, { name: 'roleName' })
                .expect(200);

            expect(res.text).toEqual('');
        });

        it('should handle errors', async () => {
            mock.onPost(`${serviceUrl}/role/`).reply(400, {});

            await request(app)
                .post(`/`, { name: 'roleName' })
                .expect(500);
        });
    });

    describe('put', () => {
        it('should handle success as a 200 response', async () => {
            mock.onPut(`${serviceUrl}/role/1`).reply(200, { test: 'response' });
            const response = await request(app).put(`/1`).expect(200);
            expect(response.text).toEqual(JSON.stringify({ test: 'response' }));
        });

        it('should handle errors', async () => {
            mock.onPut(`${serviceUrl}/role/1`).reply(400, {});
            await request(app).put(`/1`).expect(500);
        });
    });
});