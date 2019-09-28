import { AUTHENTICATE, UNAUTHENTICATE, AUTHENTICATION_ERROR } from '../actions/userActions';

const initialState = {
    currentUser: { username: undefined }
};

const userReducer = (state = initialState, action) => {
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

export default userReducer;
