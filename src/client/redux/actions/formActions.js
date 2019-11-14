import { formService } from '../../services/FormService/formService';
import { logOut } from '../actions/authActions';

export const POST_FORM = 'POST_FORM';
export const POST_FORM_SUCCESS = 'POST_FORM_SUCCESS';
export const POST_FORM_ERROR = 'POST_FORM_ERROR';
export const CLEAR_POST_FORM_STATUS = 'CLEAR_POST_FORM_STATUS';

export const GET_ALL_FORMS_BY_USER = 'GET_ALL_FORMS_BY_USER';
export const GET_ALL_FORMS_BY_USER_SUCCESS = 'GET_ALL_FORMS_BY_USER_SUCCESS';
export const GET_ALL_FORMS_BY_USER_ERROR = 'GET_ALL_FORMS_BY_USER_ERROR';
export const CLEAR_GET_ALL_FORMS_BY_USER_STATUS = 'CLEAR_GET_ALL_FORMS_BY_USER_STATUS';

export const GET_ALL_FORMS_BY_FORM_DEF = 'GET_ALL_FORMS_BY_FORM_DEF';
export const GET_ALL_FORMS_BY_FORM_DEF_SUCCESS = 'GET_ALL_FORMS_BY_FORM_DEF_SUCCESS';
export const GET_ALL_FORMS_BY_FORM_DEF_ERROR = 'GET_ALL_FORMS_BY_FORM_DEF_ERROR';
export const CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS = 'CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS';

export const PUT_FORM = 'PUT_FORM';
export const PUT_FORM_SUCCESS = 'PUT_FORM_SUCCESS';
export const PUT_FORM_ERROR = 'PUT_FORM_ERROR';
export const CLEAR_PUT_FORM_STATUS = 'CLEAR_PUT_FORM_STATUS';

export const APPROVE_FORM = 'APPROVE_FORM';
export const APPROVE_FORM_SUCCESS = 'APPROVE_FORM_SUCCESS';
export const APPROVE_FORM_ERROR = 'APPROVE_FORM_ERROR';
export const CLEAR_APPROVE_FORM_STATUS = 'CLEAR_APPROVE_FORM_STATUS';

export function postForm(form) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_POST_FORM_STATUS });
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
      dispatch({ type: CLEAR_GET_ALL_FORMS_BY_USER_STATUS });
      dispatch({ type: GET_ALL_FORMS_BY_USER });
      const { data } = await formService.getAllFormSubsByUser(userId);
      dispatch({ type: GET_ALL_FORMS_BY_USER_SUCCESS, payload: data });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: GET_ALL_FORMS_BY_USER_ERROR, payload: 'Error retrieving forms.' });
    }
  };
}

export function getAllFormSubsByFormDef(formDefId) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS });
      dispatch({ type: GET_ALL_FORMS_BY_FORM_DEF });
      const { data } = await formService.getAllFormSubsByFormDef(formDefId);
      dispatch({ type: GET_ALL_FORMS_BY_FORM_DEF_SUCCESS, payload: data });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: GET_ALL_FORMS_BY_FORM_DEF_ERROR, payload: 'Error retrieving forms.' });
    }
  };
}

export function putForm(form) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_PUT_FORM_STATUS });
      dispatch({ type: PUT_FORM });
      const { data } = await formService.putForm(form);
      dispatch({ type: PUT_FORM_SUCCESS, payload: data });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: PUT_FORM_ERROR, payload: 'Error updating form submission.' });
    }
  };
}

export function approveForm(form, approve) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_APPROVE_FORM_STATUS });
      dispatch({ type: APPROVE_FORM });
      const { data } = await formService.approveForm(form, approve);
      dispatch({ type: APPROVE_FORM_SUCCESS, payload: data });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: APPROVE_FORM_ERROR, payload: 'Error approving/rejecting form submission.' });
    }
  };
}