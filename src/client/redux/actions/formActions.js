import { formService } from '../../services/FormService/formService';

export const POST_FORM = 'POST_FORM';
export const POST_FORM_SUCCESS = 'POST_FORM_SUCCESS';
export const POST_FORM_ERROR = 'POST_FORM_ERROR';
export const FORM_CLEAR_ERROR = 'FORM_CLEAR_ERROR';

export function postForm(form) {
  return async dispatch => {
    try {
      dispatch({ type: FORM_CLEAR_ERROR });
      dispatch({ type: POST_FORM });
      await formService.postForm(form);
      dispatch({ type: POST_FORM_SUCCESS });
    } catch (error) {
      dispatch({ type: POST_FORM_ERROR, payload: 'Error submitting form.' });
    }
  };
}
