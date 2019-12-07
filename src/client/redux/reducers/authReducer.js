import * as actions from '../actions/authActions';

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTHENTICATE:
      return { ...state, authenticateStatus: action.type };
    case actions.AUTHENTICATE_SUCCESS:
      return { ...state, currentUser: action.payload.user, authenticateStatus: action.type };
    case actions.AUTHENTICATION_ERROR:
      return { ...state, errorMessage: action.payload, authenticateStatus: action.type };
    case actions.CLEAR_AUTHENTICATE_STATUS:
      return { ...state, authenticateStatus: null, errorMessage: null };

    case actions.UNAUTHENTICATE:
      return {};

    case actions.REGISTER:
      return { ...state, registerStatus: action.type };
    case actions.REGISTER_SUCCESS:
      return { ...state, registerStatus: action.type };
    case actions.REGISTER_ERROR:
      return { ...state, errorMessage: action.payload, registerStatus: action.type };
    case actions.CLEAR_REGISTER_STATUS:
      return { ...state, registerStatus: null, errorMessage: null };

    case actions.CREATE_ROLE:
      return { ...state, createRoleStatus: action.type };
    case actions.CREATE_ROLE_SUCCESS:
      return { ...state, createRoleStatus: action.type };
    case actions.CREATE_ROLE_ERROR:
      return { ...state, errorMessage: action.payload, createRoleStatus: action.type };
    case actions.CLEAR_CREATE_ROLE_STATUS:
      return { ...state, createRoleStatus: null, errorMessage: null };

    case actions.UPDATE_ROLE:
      return { ...state, updateRoleStatus: action.type };
    case actions.UPDATE_ROLE_SUCCESS:
      return { ...state, updateRoleStatus: action.type };
    case actions.UPDATE_ROLE_ERROR:
      return { ...state, errorMessage: action.payload, updateRoleStatus: action.type };
    case actions.CLEAR_UPDATE_ROLE_STATUS:
      return { ...state, updateRoleStatus: null, errorMessage: null };

    default:
      return state;
  }
};

export default authReducer;
