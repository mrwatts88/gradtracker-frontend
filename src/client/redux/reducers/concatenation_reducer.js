
import { CONCATENATION_RESULT } from '../actions/concatenation_actions';

const initialState = {};
const concatenationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONCATENATION_RESULT:
            return {...state, concatValue: action.concatValue};
        default:
            return state;
    }
};

export default concatenationReducer;
