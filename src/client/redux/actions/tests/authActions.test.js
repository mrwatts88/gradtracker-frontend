import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../actions/authActions';
import { authService } from '../../../services';

describe('User actions', () => {
  const mock = new MockAdapter(axios);
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  let store;
  beforeEach(() => {
    mock.reset();
    store = mockStore();
  });

  describe('authenticate', () => {
    it('should handle success', async () => {
      authService.logIn = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.authenticate('email', 'password'));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_AUTHENTICATE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.AUTHENTICATE });
    });

    it('should handle errors', async () => {
      authService.logIn = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.AUTHENTICATION_ERROR,
        payload: 'Invalid email or password.',
      };

      await store.dispatch(actions.authenticate('email', 'password'));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_AUTHENTICATE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.AUTHENTICATE });
      expect(store.getActions()[2]).toEqual(expectedAction);
    });
  });

  describe('logOut', () => {
    it('returns action with currentUser undefined', () => {
      const expectedAction = { type: actions.UNAUTHENTICATE };
      store.dispatch(actions.logOut());
      expect(store.getActions()[0]).toEqual(expectedAction);
    });
  });

  describe('register', () => {
    it('should handle success', async () => {
      authService.register = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.register({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_REGISTER_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.REGISTER });
      expect(store.getActions()[2]).toEqual({ type: actions.REGISTER_SUCCESS });
      expect(authService.register).toBeCalled();
    });

    it('should handle errors', async () => {
      authService.register = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.REGISTER_ERROR,
        payload: 'Error registering user.',
      };

      await store.dispatch(actions.register({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_REGISTER_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.REGISTER });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(authService.register).toBeCalled();
    });
  });

  describe('createRole', () => {
    it('should handle success', async () => {
      authService.createRole = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.createRole({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_CREATE_ROLE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.CREATE_ROLE });
      expect(store.getActions()[2]).toEqual({ type: actions.CREATE_ROLE_SUCCESS });
      expect(authService.createRole).toBeCalled();
    });

    it('should handle errors', async () => {
      authService.createRole = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.CREATE_ROLE_ERROR,
        payload: 'Error creating role.',
      };

      await store.dispatch(actions.createRole({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_CREATE_ROLE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.CREATE_ROLE });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(authService.createRole).toBeCalled();
    });
  });

  describe('updateRole', () => {
    it('should handle success', async () => {
      authService.updateRole = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.updateRole({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_UPDATE_ROLE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.UPDATE_ROLE });
      expect(store.getActions()[2]).toEqual({ type: actions.UPDATE_ROLE_SUCCESS });
      expect(authService.updateRole).toBeCalled();
    });

    it('should handle errors', async () => {
      authService.updateRole = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.UPDATE_ROLE_ERROR,
        payload: 'Error updating role.',
      };

      await store.dispatch(actions.updateRole({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_UPDATE_ROLE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.UPDATE_ROLE });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(authService.updateRole).toBeCalled();
    });
  });
});
