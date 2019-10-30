import { formService } from '../../services/FormService/formService';
import { logOut } from '../actions/authActions';

export const POST_FORM = 'POST_FORM';
export const POST_FORM_SUCCESS = 'POST_FORM_SUCCESS';
export const POST_FORM_ERROR = 'POST_FORM_ERROR';

export const GET_ALL_FORMS_BY_USER = 'GET_ALL_FORMS_BY_USER';
export const GET_ALL_FORMS_BY_USER_SUCCESS = 'GET_ALL_FORMS_BY_USER_SUCCESS';
export const GET_ALL_FORMS_BY_USER_ERROR = 'GET_ALL_FORMS_BY_USER_ERROR';

export const PUT_FORM = 'PUT_FORM';
export const PUT_FORM_SUCCESS = 'PUT_FORM_SUCCESS';
export const PUT_FORM_ERROR = 'PUT_FORM_ERROR';

export const FORM_CLEAR_ERROR = 'FORM_CLEAR_ERROR';

export function postForm(form) {
  return async dispatch => {
    try {
      dispatch({ type: FORM_CLEAR_ERROR });
      dispatch({ type: POST_FORM });
      await formService.postForm(form);
      dispatch({ type: POST_FORM_SUCCESS });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: POST_FORM_ERROR, payload: 'Error submitting form.' });
    }
  };
}

export function getAllFormSubsByUser(userId) {
  return async dispatch => {
    try {
      dispatch({ type: FORM_CLEAR_ERROR });
      dispatch({ type: GET_ALL_FORMS_BY_USER });
      const { data } = await formService.getAllFormSubsByUser(userId);
      dispatch({ type: GET_ALL_FORMS_BY_USER_SUCCESS, payload: data });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: GET_ALL_FORMS_BY_USER_ERROR, payload: 'Error retrieving forms.' });
    }
  };
}

export function putForm(form) {
  return async dispatch => {
    try {
      dispatch({ type: FORM_CLEAR_ERROR });
      dispatch({ type: PUT_FORM });
      const { data } = await formService.putForm(form);
      dispatch({ type: PUT_FORM_SUCCESS, payload: data });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: PUT_FORM_ERROR, payload: 'Error updating form submission.' });
    }
  };
}
