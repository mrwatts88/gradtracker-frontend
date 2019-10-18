import formReducer from '../formReducer';
import * as actions from '../../actions/formActions';

describe('formReducer', () => {
    it('should return the initial state', () => {
        expect(formReducer(undefined, {})).toEqual({});
    });

    it('should set isFormSubmitting to true and clear error', () => {
        expect(formReducer({}, { type: actions.POST_FORM })).toEqual({ status: actions.POST_FORM });
    });

    it('should set isFormSubmitting to false and clear error', () => {
        expect(formReducer({}, { type: actions.POST_FORM_SUCCESS })).toEqual({ status: actions.POST_FORM_SUCCESS });
    });

    it('should return an error', () => {
        expect(formReducer({}, { type: actions.POST_FORM_ERROR, payload: 'error' })).toEqual({
            status: actions.POST_FORM_ERROR,
            errorMessage: 'error'
        });
    });
});
