import authReducer from '../authReducer';
import * as actions from '../../actions/authActions';

describe('authReducer', () => {
  const currentUser = { user: { test: 'user' } };

  it('should return correct state', () => {
    expect(authReducer(undefined, {})).toEqual({});
    expect(authReducer({}, { type: actions.AUTHENTICATE })).toEqual({ authenticateStatus: actions.AUTHENTICATE });
    expect(authReducer({}, { type: actions.AUTHENTICATE_SUCCESS, payload: currentUser }))
      .toEqual({ authenticateStatus: actions.AUTHENTICATE_SUCCESS, currentUser: currentUser.user });
    expect(authReducer({}, { type: actions.AUTHENTICATION_ERROR, payload: 'error' }))
      .toEqual({ errorMessage: 'error', authenticateStatus: actions.AUTHENTICATION_ERROR });
    expect(authReducer({}, { type: actions.CLEAR_AUTHENTICATE_STATUS }))
      .toEqual({ authenticateStatus: null, errorMessage: null });

    expect(authReducer({}, { type: actions.UNAUTHENTICATE })).toEqual({});

    expect(authReducer({}, { type: actions.REGISTER })).toEqual({ registerStatus: actions.REGISTER });
    expect(authReducer({}, { type: actions.REGISTER_SUCCESS }))
      .toEqual({ currentUser: undefined, registerStatus: actions.REGISTER_SUCCESS });
    expect(authReducer({}, { type: actions.REGISTER_ERROR, payload: 'error' }))
      .toEqual({ errorMessage: 'error', registerStatus: actions.REGISTER_ERROR });
    expect(authReducer({}, { type: actions.CLEAR_REGISTER_STATUS }))
      .toEqual({ errorMessage: null, registerStatus: null });


    expect(authReducer({}, { type: actions.CREATE_ROLE }))
      .toEqual({ createRoleStatus: actions.CREATE_ROLE });
    expect(authReducer({}, { type: actions.CREATE_ROLE_SUCCESS }))
      .toEqual({ createRoleStatus: actions.CREATE_ROLE_SUCCESS });
    expect(authReducer({}, { type: actions.CREATE_ROLE_ERROR, payload: 'error' }))
      .toEqual({ errorMessage: 'error', createRoleStatus: actions.CREATE_ROLE_ERROR });
    expect(authReducer({}, { type: actions.CLEAR_CREATE_ROLE_STATUS }))
      .toEqual({ createRoleStatus: null, errorMessage: null });

    expect(authReducer({}, { type: actions.UPDATE_ROLE }))
      .toEqual({ updateRoleStatus: actions.UPDATE_ROLE });
    expect(authReducer({}, { type: actions.UPDATE_ROLE_SUCCESS }))
      .toEqual({ updateRoleStatus: actions.UPDATE_ROLE_SUCCESS });
    expect(authReducer({}, { type: actions.UPDATE_ROLE_ERROR, payload: 'error' }))
      .toEqual({ errorMessage: 'error', updateRoleStatus: actions.UPDATE_ROLE_ERROR });
    expect(authReducer({}, { type: actions.CLEAR_UPDATE_ROLE_STATUS }))
      .toEqual({ updateRoleStatus: null, errorMessage: null });
  });
});
