import userReducer from '../userReducer';
import { AUTHENTICATE, UNAUTHENTICATE, AUTHENTICATION_ERROR } from '../../actions/userActions';

describe('mathematicsReducer', () => {
    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual({
            currentUser: { username: undefined }
        });
    });

    it('should return the current user', () => {
        expect(userReducer({}, { type: AUTHENTICATE, payload: { username: 'username' } }))
            .toEqual({ currentUser: { username: 'username' } });
    });

    it('should return undefined current user', () => {
        expect(userReducer({}, { type: UNAUTHENTICATE }))
            .toEqual({ currentUser: undefined });
    });

    it('should return an error', () => {
        expect(userReducer({}, { type: AUTHENTICATION_ERROR, payload: 'error' }))
            .toEqual({ error: 'error' });
    });
});
