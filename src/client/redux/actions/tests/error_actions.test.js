import * as actions from '../error_actions';

describe('Error_actions', () => {
    const error = { Error: '500 - Internal Server Error' };
    const expectedError = {
        error,
        type: actions.ITEM_HAS_ERRORED
    };

    it('should parse and set the error for a nested response', () => {
        expect(actions.setError(error)).toEqual(expectedError);
    });

    it('should set the type for deletion ', () => {
        const newError = { type: actions.REMOVE_ERROR };
        expect(actions.deleteError()).toEqual(newError);
    });
});
