import { formDefService } from '../../services/FormDefService/formDefService';
import { logOut } from '../actions/authActions';

export const POST_FORM_DEF = 'POST_FORM_DEF';
export const POST_FORM_DEF_SUCCESS = 'POST_FORM_DEF_SUCCESS';
export const POST_FORM_DEF_ERROR = 'POST_FORM_DEF_ERROR';
export const CLEAR_POST_FORM_DEF_STATUS = 'CLEAR_POST_FORM_DEF_STATUS';

export const GET_ALL_FORM_DEFS = 'GET_ALL_FORM_DEFS';
export const GET_ALL_FORM_DEFS_SUCCESS = 'GET_ALL_FORM_DEFS_SUCCESS';
export const GET_ALL_FORM_DEFS_ERROR = 'GET_ALL_FORM_DEFS_ERROR';
export const CLEAR_GET_ALL_FORM_DEFS_STATUS = 'CLEAR_GET_ALL_FORM_DEFS_STATUS';

export const GET_FORM_DEF = 'GET_FORM_DEF';
export const GET_FORM_DEF_SUCCESS = 'GET_FORM_DEF_SUCCESS';
export const GET_FORM_DEF_ERROR = 'GET_FORM_DEF_ERROR';
export const CLEAR_GET_FORM_DEF_STATUS = 'CLEAR_GET_FORM_DEF_STATUS';

export const DELETE_FORM_DEF = 'DELETE_FORM_DEF';
export const DELETE_FORM_DEF_SUCCESS = 'DELETE_FORM_DEF_SUCCESS';
export const DELETE_FORM_DEF_ERROR = 'DELETE_FORM_DEF_ERROR';
export const CLEAR_DELETE_FORM_DEF_STATUS = 'CLEAR_DELETE_FORM_DEF_STATUS';

export function postFormDef(formDef) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_POST_FORM_DEF_STATUS });
      dispatch({ type: POST_FORM_DEF });
      await formDefService.postFormDef(formDef);
      dispatch({ type: POST_FORM_DEF_SUCCESS });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: POST_FORM_DEF_ERROR, payload: 'Error creating form.' });
    }
  };
}

export function deleteFormDef(id) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_DELETE_FORM_DEF_STATUS });
      dispatch({ type: DELETE_FORM_DEF });
      await formDefService.deleteFormDef(id);
      dispatch({ type: DELETE_FORM_DEF_SUCCESS });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: DELETE_FORM_DEF_ERROR, payload: 'Error deleting form.' });
    }
  };
}

export function getFormDef(id) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_GET_FORM_DEF_STATUS });
      dispatch({ type: GET_FORM_DEF });
      const { data } = await formDefService.getFormDef(id);
      dispatch({ type: GET_FORM_DEF_SUCCESS, payload: data });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: GET_FORM_DEF_ERROR, payload: 'Error finding form.' });
    }
  };
}

export function getAllFormDefs() {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_GET_ALL_FORM_DEFS_STATUS });
      dispatch({ type: GET_ALL_FORM_DEFS });
      const { data } = await formDefService.getAllFormDefs();
      dispatch({ type: GET_ALL_FORM_DEFS_SUCCESS, payload: data });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: GET_ALL_FORM_DEFS_ERROR, payload: 'Error finding forms.' });
    }
  };
}
