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
        case actions.AUTH_CLEAR_ERROR:
            return { ...state, errorMessage: null, status: actions.type };

        case actions.UNAUTHENTICATE:
            return { ...state, currentUser: undefined, status: action.type };

        default:
            return state;
    }
};

export default authReducer;
