import * as actions from '../actions/authActions';

const initialState = {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.AUTHENTICATE:
            return { ...state, currentUser: action.payload };
        case actions.UNAUTHENTICATE:
            return { ...state, currentUser: undefined };
        default:
            return state;
    }
};

export default authReducer;
