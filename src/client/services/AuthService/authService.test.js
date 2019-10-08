import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { authService, API_AUTH } from './authService';

describe('authService', () => {
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset();
  });

  describe('log in', () => {
    it('makes a post to the API_LOGIN url', async () => {
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
});
