import mathematicsReducer from '../mathematics_reducer';
import { ADDITION_RESULT, SUBTRACTION_RESULT, MULTIPLICATION_RESULT, DIVISION_RESULT, SQUARE_RESULT } from '../../actions/mathematics_actions';

describe('mathematicsReducer', () => {
    const value = '5';

    it('should return the initial state', () => {
        expect(mathematicsReducer(undefined, {})).toEqual({});
    });

    it('should return the addResult value', () => {
        expect(mathematicsReducer({}, { type: ADDITION_RESULT, addResult: value }))
            .toEqual({ addResult: value });
    });

    it('should return the subtractResult value', () => {
        expect(mathematicsReducer({}, { type: SUBTRACTION_RESULT, subtractResult: value }))
            .toEqual({ subtractResult: value });
    });

    it('should return the multiplyResult value', () => {
        expect(mathematicsReducer({}, { type: MULTIPLICATION_RESULT, multiplyResult: value }))
            .toEqual({ multiplyResult: value });
    });

    it('should return the divideResult value', () => {
        expect(mathematicsReducer({}, { type: DIVISION_RESULT, divideResult: value }))
            .toEqual({ divideResult: value });
    });

    it('should return the squareResult value', () => {
        expect(mathematicsReducer({}, { type: SQUARE_RESULT, squareResult: value }))
            .toEqual({ squareResult: value });
    });
});
