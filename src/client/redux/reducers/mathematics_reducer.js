import { ADDITION_RESULT, SUBTRACTION_RESULT, MULTIPLICATION_RESULT, DIVISION_RESULT, SQUARE_RESULT } from '../actions/mathematics_actions';

const initialState = {};
const mathematicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDITION_RESULT:
            return { ...state, addResult: action.addResult };
        case SUBTRACTION_RESULT:
            return { ...state, subtractResult: action.subtractResult };
        case MULTIPLICATION_RESULT:
            return { ...state, multiplyResult: action.multiplyResult };
        case DIVISION_RESULT:
            return { ...state, divideResult: action.divideResult };
        case SQUARE_RESULT:
            return { ...state, squareResult: action.squareResult };
        default:
            return state;
    }
};
export default mathematicsReducer;