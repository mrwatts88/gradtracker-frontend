import authReducer from '../authReducer';
import * as actions from '../../actions/authActions';

describe('authReducer', () => {
  describe('AUTHENTICATE', () => {
    it('should return the initial state', () => {
      expect(authReducer(undefined, {})).toEqual({});
    });

    it('should handle AUTHENTICATE', () => {
      expect(authReducer({}, { type: actions.AUTHENTICATE })).toEqual({
        status: actions.AUTHENTICATE,
      });
    });

    it('should handle AUTHENTICATE_SUCCESS', () => {
      const currentUser = { test: 'user' };

      expect(authReducer({}, { type: actions.AUTHENTICATE_SUCCESS, payload: currentUser })).toEqual({
        status: actions.AUTHENTICATE_SUCCESS,
        currentUser,
      });
    });

    it('should handle UNAUTHENTICATE', () => {
      expect(authReducer({}, { type: actions.UNAUTHENTICATE })).toEqual({
        currentUser: undefined,
        status: actions.UNAUTHENTICATE,
      });
    });

    it('should handle AUTHENTICATION_ERROR', () => {
      expect(authReducer({}, { type: actions.AUTHENTICATION_ERROR, payload: 'error' })).toEqual({
        errorMessage: 'error',
        status: actions.AUTHENTICATION_ERROR,
      });
    });
  });

  describe('REGISTER', () => {
    it('should return the initial state', () => {
      expect(authReducer(undefined, {})).toEqual({});
    });

    it('should handle REGISTER', () => {
      expect(authReducer({}, { type: actions.REGISTER })).toEqual({
        status: actions.REGISTER,
      });
    });

    it('should handle REGISTER_SUCCESS', () => {
      expect(authReducer({}, { type: actions.REGISTER_SUCCESS })).toEqual({
        currentUser: undefined,
        status: actions.REGISTER_SUCCESS,
      });
    });

    it('should handle REGISTER_ERROR', () => {
      expect(authReducer({}, { type: actions.REGISTER_ERROR, payload: 'error' })).toEqual({
        errorMessage: 'error',
        status: actions.REGISTER_ERROR,
      });
    });
  });

  describe('CLEAR_ERROR', () => {
    it('should clear error', () => {
      expect(authReducer({}, { type: actions.AUTH_CLEAR_ERROR })).toEqual({
        errorMessage: null,
        status: actions.AUTH_CLEAR_ERROR,
      });
    });
  });
});
