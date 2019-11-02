import * as actions from '../actions/authActions';

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTHENTICATE:
      return { ...state, authenticateStatus: action.type };
    case actions.AUTHENTICATE_SUCCESS:
      return { ...state, currentUser: action.payload, authenticateStatus: action.type };
    case actions.AUTHENTICATION_ERROR:
      return { ...state, errorMessage: action.payload, authenticateStatus: action.type };
    case actions.UNAUTHENTICATE:
      return { ...state, currentUser: undefined, unauthenticateStatus: action.type };

    case actions.REGISTER:
      return { ...state, registerStatus: action.type };
    case actions.REGISTER_SUCCESS:
      return { ...state, registerStatus: action.type };
    case actions.REGISTER_ERROR:
      return { ...state, errorMessage: action.payload, registerStatus: action.type };

    case actions.AUTH_CLEAR_ERROR:
      return { ...state, errorMessage: null, errorStatus: action.type };

    case actions.AUTH_CLEAR_STATUSES:
      return {
        ...state,
        authenticateStatus: null,
        unauthenticateStatus: null,
        registerStatus: null,
        errorStatus: null
      };
    default:
      return state;
  }
};

export default authReducer;
