import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { formService, API_FORM } from './formService';

describe('formService', () => {
    const mock = new MockAdapter(axios);

    beforeEach(() => {
        mock.reset();
    });

    describe('submit form', () => {
        it('makes a post to the API_FORM url', async () => {
            mock.onPost(`${API_FORM}`).reply(200, { test: 'response' });

            await formService.submitForm({ test: 'form' });

            expect(mock.history.post.length).toEqual(1);
            expect(mock.history.post[0].data).toEqual(JSON.stringify({ test: 'form' }));
            expect(mock.history.post[0].url).toEqual(`${API_FORM}`);
        });
    });
});
