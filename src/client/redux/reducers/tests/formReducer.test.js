import formReducer from '../formReducer';
import { FORM_SUBMITTING, FORM_SUBMIT_SUCCESS, FORM_SUBMIT_ERROR } from '../../actions/formActions';

describe('formReducer', () => {
    it('should return the initial state', () => {
        expect(formReducer(undefined, {})).toEqual({});
    });

    it('should set isFormSubmitting to true and clear error', () => {
        expect(formReducer({}, { type: FORM_SUBMITTING }))
            .toEqual({ isFormSubmitting: true, error: '' });
    });

    it('should set isFormSubmitting to false and clear error', () => {
        expect(formReducer({}, { type: FORM_SUBMIT_SUCCESS }))
            .toEqual({ isFormSubmitting: false, error: '' });
    });

    it('should return an error', () => {
        expect(formReducer({}, { type: FORM_SUBMIT_ERROR, payload: 'error' }))
            .toEqual({ isFormSubmitting: false, error: 'error' });
    });
});
