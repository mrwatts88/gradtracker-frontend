import concatenationReducer from '../concatenation_reducer';
import { CONCATENATION_RESULT } from '../../actions/concatenation_actions';

describe('Concatenation Reducer', () => {
    it('should return the initial state', () => {
        expect(concatenationReducer(undefined, {})).toEqual({});
    });

    it('should return the concatenated value', () => {
        const testVal = 'testConcat';
        expect(concatenationReducer({}, {type: CONCATENATION_RESULT, concatValue: testVal})).toEqual({concatValue: testVal});
    });
});
