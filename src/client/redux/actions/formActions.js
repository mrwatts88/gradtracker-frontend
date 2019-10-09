import { formService } from '../../services/FormService/formService';
export const FORM_SUBMITTING = 'FORM_SUBMITTING';
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS';
export const FORM_SUBMIT_ERROR = 'FORM_SUBMIT_ERROR';

export function submitForm(form) {
    return async (dispatch) => {
        try {
            dispatch({ type: FORM_SUBMITTING });
            await formService.submitForm(form);
            dispatch({ type: FORM_SUBMIT_SUCCESS });
        } catch (error) {
            dispatch({
                type: FORM_SUBMIT_ERROR,
                payload: 'Error Submitting Form!'
            });
        }
    };
}
