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
    case actions.CLEAR_AUTHENTICATE_STATUS:
      return { ...state, authenticateStatus: null, errorMessage: null };

    case actions.UNAUTHENTICATE:
      return { ...state, currentUser: undefined, unauthenticateStatus: action.type };

    case actions.REGISTER:
      return { ...state, registerStatus: action.type };
    case actions.REGISTER_SUCCESS:
      return { ...state, registerStatus: action.type };
    case actions.REGISTER_ERROR:
      return { ...state, errorMessage: action.payload, registerStatus: action.type };
    case actions.CLEAR_REGISTER_STATUS:
      return { ...state, registerStatus: null, errorMessage: null };

    default:
      return state;
  }
};

export default authReducer;
