import errorReducer from '../error_reducer';
import { ITEM_HAS_ERRORED, REMOVE_ERROR } from '../../actions/error_actions';

describe('Error Reducer', () => {
    it('should return the initial state', () => {
        expect(errorReducer(undefined, {})).toEqual({});
    });

    it('should set error value', () => {
        const error = { error: 'test' };
        expect(errorReducer({}, { type: ITEM_HAS_ERRORED, error })).toEqual({ error });
    });

    it('should remove error', () => {
        const initialState = {};
        expect(errorReducer({ error: 'test' }, { type: REMOVE_ERROR })).toEqual({ initialState });
    });
});
