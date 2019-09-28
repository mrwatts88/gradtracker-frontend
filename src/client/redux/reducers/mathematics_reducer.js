import { ADDITION_RESULT } from '../actions/mathematics_actions';

const initialState = {};

const mathematicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDITION_RESULT:
            return { ...state, addResult: action.addResult };
        default:
            return state;
    }
};

export default mathematicsReducer;
