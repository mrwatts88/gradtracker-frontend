import authReducer from '../authReducer';
import { AUTHENTICATE, UNAUTHENTICATE, AUTHENTICATION_ERROR } from '../../actions/authActions';

describe('mathematicsReducer', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined, {})).toEqual({});
    });

    it('should return the current user', () => {
        expect(authReducer({}, { type: AUTHENTICATE, payload: { username: 'username' } }))
            .toEqual({ currentUser: { username: 'username' }, error: '' });
    });

    it('should return undefined current user', () => {
        expect(authReducer({}, { type: UNAUTHENTICATE }))
            .toEqual({ currentUser: undefined, error: '' });
    });

    it('should return an error', () => {
        expect(authReducer({}, { type: AUTHENTICATION_ERROR, payload: 'error' }))
            .toEqual({ error: 'error' });
    });
});
