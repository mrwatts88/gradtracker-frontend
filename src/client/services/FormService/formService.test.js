import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { formService, API_AUTH } from './formService';

describe('formService', () => {
    const mock = new MockAdapter(axios);

    beforeEach(() => {
        mock.reset();
    });

    describe('submit form', () => {
        it('makes a post to the API_FORM url', async () => {
            //TODO: change reqBody
            const reqBody = { form };

            mock.onPost(`${API_AUTH}`).reply(200, JSON.stringify({
                /*TODO: Change this data
                data: {
                    user: {
                        name: 'username'
                    },
                    token: 'jwt.token.role'
                }
                */
            }));

            await formService.submitForm();
            expect(mock.history.post.length).toEqual(1);
            expect(mock.history.post[0].data).toEqual(JSON.stringify(reqBody));
            //TODO: change url
            expect(mock.history.post[0].url).toEqual(`${API_AUTH}/form/`);
        });
    });
});
