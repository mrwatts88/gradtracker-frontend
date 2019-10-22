import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { authService, AUTH_URL } from './authService';

describe('authService', () => {
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset();
  });

  describe('authenticate', () => {
    it('makes a post to the AUTH_URL/auth url', async () => {
      const reqBody = { email: 'email', password: 'password' };

      mock.onPost(`${AUTH_URL}auth`).reply(
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

      await authService.authenticate(reqBody.email, reqBody.password);
      expect(mock.history.post.length).toEqual(1);
      expect(mock.history.post[0].data).toEqual(JSON.stringify(reqBody));
      expect(mock.history.post[0].url).toEqual(`${AUTH_URL}auth`);
    });
  });

  describe('register', () => {
    it('makes a post to the AUTH_URL/user url', async () => {
      const reqBody = { email: 'email', password: 'password' };

      mock.onPost(`${AUTH_URL}user`).reply(
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

      await authService.register(reqBody);
      expect(mock.history.post.length).toEqual(1);
      expect(mock.history.post[0].data).toEqual(JSON.stringify(reqBody));
      expect(mock.history.post[0].url).toEqual(`${AUTH_URL}user`);
    });
  });
});
