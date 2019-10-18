import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { authService, AUTH_URL } from './authService';

describe('authService', () => {
    const mock = new MockAdapter(axios);

    beforeEach(() => {
        mock.reset();
    });

    describe('log in', () => {
        it('makes a post to the AUTH_URL url', async () => {
            const reqBody = { email: 'email', password: 'password' };

            mock.onPost(`${AUTH_URL}auth`).reply(
                200,
                JSON.stringify({
                    data: {
                        user: {
                            name: 'username'
                        },
                        token: 'jwt.token.role'
                    }
                })
            );

            await authService.authenticate(reqBody.email, reqBody.password);
            expect(mock.history.post.length).toEqual(1);
            expect(mock.history.post[0].data).toEqual(JSON.stringify(reqBody));
            expect(mock.history.post[0].url).toEqual(`${AUTH_URL}auth`);
        });
    });
<<<<<<< HEAD
  });

  describe('register user'), () => {
    it('makes a post to the API_REGISTRATION url', async () => {
      const reqBody = { email: 'email', password: 'password' };

      mock.onPost(`${API_AUTH}/auth`).reply(
        200,
        JSON.stringify({
          data: {
            user: {
              name: 'username',
            },
            token: 'jwt.token.role',
          },
        })
      );

      await authService.logIn(reqBody.email, reqBody.password);
      expect(mock.history.post.length).toEqual(1);
      expect(mock.history.post[0].data).toEqual(JSON.stringify(reqBody));
      expect(mock.history.post[0].url).toEqual(`${API_AUTH}/auth`);
    });
  });
=======
>>>>>>> 6c3fa039295abec8a9c2c87081f135eba74a737e
});
