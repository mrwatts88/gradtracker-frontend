import authReducer from '../authReducer';
import * as actions from '../../actions/authActions';

describe('mathematicsReducer', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined, {})).toEqual({});
    });

    it('should return the current user', () => {
        expect(authReducer({}, { type: actions.AUTHENTICATE })).toEqual({
            status: actions.AUTHENTICATE
        });
    });

    it('should return undefined current user', () => {
        expect(authReducer({}, { type: actions.UNAUTHENTICATE })).toEqual({
            currentUser: undefined,
            status: actions.UNAUTHENTICATE
        });
    });

    it('should return an error', () => {
        expect(authReducer({}, { type: actions.AUTHENTICATION_ERROR, payload: 'error' })).toEqual({
            errorMessage: 'error',
            status: actions.AUTHENTICATION_ERROR
        });
    });
});
