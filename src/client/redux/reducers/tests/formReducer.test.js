import formReducer from '../formReducer';
import { AUTHENTICATE, UNAUTHENTICATE, AUTHENTICATION_ERROR, FORM_SUBMIT_SUCCESS, FORM_SUBMIT_ERROR } from '../../actions/formActions';

describe('formReducer', () => {
    it('should return the initial state', () => {
        expect(formReducer(undefined, {})).toEqual({});
    });

    it('should return the current user', () => {
        expect(formReducer({}, { type: FORM_SUBMITTING }))
            .toEqual({ currentForm: undefined , error: '' });
    });

    it('should return undefined current user', () => {
        expect(formReducer({}, { type: FORM_SUBMIT_SUCCESS }))
            .toEqual({ currentForm: undefined, error: '' });
    });

    it('should return an error', () => {
        expect(formReducer({}, { type: FORM_SUBMIT_ERROR, payload: 'error' }))
            .toEqual({ error: 'error' });
    });
});
