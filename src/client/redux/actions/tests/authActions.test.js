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
      // TODO: mock jwt successfully
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
});
