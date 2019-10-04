import { AUTHENTICATE, UNAUTHENTICATE, AUTHENTICATION_ERROR } from '../actions/authActions';

const initialState = {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return { ...state, currentUser: action.payload, error: '' };
        case UNAUTHENTICATE:
            return { ...state, currentUser: undefined, error: '' };
        case AUTHENTICATION_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default authReducer;
