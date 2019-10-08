import formReducer from '../formReducer';
import { AUTHENTICATE, UNAUTHENTICATE, AUTHENTICATION_ERROR } from '../../actions/formActions';

describe('formReducer', () => {
    it('should return the initial state', () => {
        expect(formReducer(undefined, {})).toEqual({});
    });

    it('should return the current user', () => {
        expect(formReducer({}, { type: FORM_SUBMITTING, payload: { username: 'username' } }))
            .toEqual({ currentForm: { username: 'username' }, error: '' });
    });

    it('should return undefined current user', () => {
        expect(formReducer({}, { type: UNAUTHENTICATE }))
            .toEqual({ currentUser: undefined, error: '' });
    });

    it('should return an error', () => {
        expect(formReducer({}, { type: AUTHENTICATION_ERROR, payload: 'error' }))
            .toEqual({ error: 'error' });
    });
});
