import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { authService, AUTH_URL } from './authService';
import { authHeader } from '../../helpers/authHeader';
jest.mock('../../helpers/authHeader');

describe('authService', () => {
  const testHeaders = {
    Authorization: 'testToken',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=utf-8',
  };

  authHeader.mockImplementation(() => testHeaders);

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

    it('should throw error on axios bad response', async () => {
      const reqBody = { email: 'email', password: 'password' };
      mock.onPost(`${AUTH_URL}auth`).reply(500);

      await expect(authService.authenticate(reqBody.email, reqBody.password)).rejects.toThrow();

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

    it('should throw error on axios bad response', async () => {
      const reqBody = { email: 'email', password: 'password' };
      mock.onPost(`${AUTH_URL}user`).reply(500);

      await expect(authService.register(reqBody)).rejects.toThrow();

      expect(mock.history.post.length).toEqual(1);
      expect(mock.history.post[0].data).toEqual(JSON.stringify(reqBody));
      expect(mock.history.post[0].url).toEqual(`${AUTH_URL}user`);
      expect(mock.history.post[0].headers).toEqual(testHeaders);
    });
  });

  describe('create new role', () => {
    it('makes a post to the AUTH_URL/role url', async () => {
      const testRole = { roles: 'test', name: 'newRole' };

      mock.onPost(`${AUTH_URL}role`).reply(200);

      await authService.createRole(testRole);
      expect(mock.history.post.length).toEqual(1);
      expect(mock.history.post[0].data).toEqual(JSON.stringify(testRole));
      expect(mock.history.post[0].url).toEqual(`${AUTH_URL}role`);
    });

    it('should throw error on axios bad response', async () => {
      const testRole = { roles: 'test', name: 'newRole' };
      mock.onPost(`${AUTH_URL}role`).reply(500);

      await expect(authService.createRole(testRole)).rejects.toThrow();

      expect(mock.history.post.length).toEqual(1);
      expect(mock.history.post[0].data).toEqual(JSON.stringify(testRole));
      expect(mock.history.post[0].url).toEqual(`${AUTH_URL}role`);
      expect(mock.history.post[0].headers).toEqual(testHeaders);
    });
  });

  describe('update role', () => {
    it('makes a put to the AUTH_URL/role/{role.id} url', async () => {
      const testRole = { roles: 'test', name: 'newRole', id: 1 };

      mock.onPut(`${AUTH_URL}role/${testRole.id}`).reply(200);

      await authService.updateRole(testRole);
      expect(mock.history.put.length).toEqual(1);
      expect(mock.history.put[0].data).toEqual(JSON.stringify(testRole));
      expect(mock.history.put[0].url).toEqual(`${AUTH_URL}role/1`);
    });

    it('should throw error on axios bad response', async () => {
      const testRole = { roles: 'test', name: 'newRole', id: 1 };
      mock.onPut(`${AUTH_URL}role/${testRole.id}`).reply(500);

      await expect(authService.updateRole(testRole)).rejects.toThrow();

      expect(mock.history.put.length).toEqual(1);
      expect(mock.history.put[0].data).toEqual(JSON.stringify(testRole));
      expect(mock.history.put[0].url).toEqual(`${AUTH_URL}role/1`);
      expect(mock.history.put[0].headers).toEqual(testHeaders);
    });
  });
});
