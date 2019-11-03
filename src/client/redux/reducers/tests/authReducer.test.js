import authReducer from '../authReducer';
import * as actions from '../../actions/authActions';

describe('authReducer', () => {
  const currentUser = { test: 'user' };

  it('should return correct state', () => {
    expect(authReducer(undefined, {})).toEqual({});
    expect(authReducer({}, { type: actions.AUTHENTICATE })).toEqual({ authenticateStatus: actions.AUTHENTICATE });
    expect(authReducer({}, { type: actions.AUTHENTICATE_SUCCESS, payload: currentUser }))
      .toEqual({ authenticateStatus: actions.AUTHENTICATE_SUCCESS, currentUser });
    expect(authReducer({}, { type: actions.AUTHENTICATION_ERROR, payload: 'error' }))
      .toEqual({ errorMessage: 'error', authenticateStatus: actions.AUTHENTICATION_ERROR });
    expect(authReducer({}, { type: actions.CLEAR_AUTHENTICATE_STATUS }))
      .toEqual({ authenticateStatus: null, errorMessage: null });

    expect(authReducer({}, { type: actions.UNAUTHENTICATE }))
      .toEqual({ currentUser: undefined, unauthenticateStatus: actions.UNAUTHENTICATE });

    expect(authReducer({}, { type: actions.REGISTER })).toEqual({ registerStatus: actions.REGISTER });
    expect(authReducer({}, { type: actions.REGISTER_SUCCESS }))
      .toEqual({ currentUser: undefined, registerStatus: actions.REGISTER_SUCCESS });
    expect(authReducer({}, { type: actions.REGISTER_ERROR, payload: 'error' }))
      .toEqual({ errorMessage: 'error', registerStatus: actions.REGISTER_ERROR });
    expect(authReducer({}, { type: actions.CLEAR_REGISTER_STATUS }))
      .toEqual({ errorMessage: null, registerStatus: null });
  });
});
