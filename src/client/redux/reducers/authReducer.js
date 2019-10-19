import * as actions from '../actions/authActions';

const initialState = {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.AUTHENTICATE:
            return { ...state, status: action.type };
        case actions.AUTHENTICATE_SUCCESS:
            return { ...state, currentUser: action.payload, status: action.type };
        case actions.AUTHENTICATION_ERROR:
            return { ...state, errorMessage: action.payload, status: action.type };
        case actions.UNAUTHENTICATE:
            return { ...state, currentUser: undefined, status: action.type };

        case actions.REGISTER:
            return { ...state, status: action.type };
        case actions.REGISTER_SUCCESS:
            return { ...state, status: action.type };
        case actions.REGISTER_ERROR:
            return { ...state, errorMessage: action.payload, status: action.type };

        case actions.AUTH_CLEAR_ERROR:
            return { ...state, errorMessage: null, status: actions.type };

        default:
            return state;
    }
};

export default authReducer;
