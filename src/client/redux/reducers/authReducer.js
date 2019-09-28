import { AUTHENTICATE, UNAUTHENTICATE, AUTHENTICATION_ERROR } from '../actions/authActions';

const initialState = {
    currentUser: { username: 'username' }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return { ...state, currentUser: action.payload };
        case UNAUTHENTICATE:
            return { ...state, currentUser: undefined };
        case AUTHENTICATION_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default authReducer;
