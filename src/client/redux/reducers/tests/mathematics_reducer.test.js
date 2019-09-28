import mathematicsReducer from '../mathematics_reducer';
import { ADDITION_RESULT } from '../../actions/mathematics_actions';

describe('mathematicsReducer', () => {
    const value = '5';

    it('should return the initial state', () => {
        expect(mathematicsReducer(undefined, {})).toEqual({});
    });

    it('should return the addResult value', () => {
        expect(mathematicsReducer({}, { type: ADDITION_RESULT, addResult: value }))
            .toEqual({ addResult: value });
    });
});
