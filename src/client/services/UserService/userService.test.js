import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { userService, API_SIGNIN } from './userService';

describe('userService', () => {
    const mock = new MockAdapter(axios);

    beforeEach(() => {
        mock.reset();
    });

    describe('sign in', () => {
        it('makes a post to the API_SIGNIN url', async () => {
            const reqBody = { email: 'email', password: 'password' };

            mock.onPost(API_SIGNIN).reply(200, JSON.stringify({
                data: {
                    user: {
                        name: 'username'
                    },
                    token: 'jwt.token.role'
                }
            }));

            await userService.signIn(reqBody);
            expect(mock.history.post.length).toEqual(1);
            expect(mock.history.post[0].data).toEqual(JSON.stringify(reqBody));
            expect(mock.history.post[0].url).toEqual(API_SIGNIN);
        });
    });
});
