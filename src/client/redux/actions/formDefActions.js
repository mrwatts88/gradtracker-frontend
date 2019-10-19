import { formDefService } from '../../services/FormDefService/formDefService';

export const POST_FORM_DEF = 'POST_FORM_DEF';
export const POST_FORM_DEF_SUCCESS = 'POST_FORM_DEF_SUCCESS';
export const POST_FORM_DEF_ERROR = 'POST_FORM_DEF_ERROR';

export const GET_ALL_FORM_DEFS = 'GET_ALL_FORM_DEFS';
export const GET_ALL_FORM_DEFS_SUCCESS = 'GET_ALL_FORM_DEFS_SUCCESS';
export const GET_ALL_FORM_DEFS_ERROR = 'GET_ALL_FORM_DEFS_ERROR';

export const GET_FORM_DEF = 'GET_FORM_DEF';
export const GET_FORM_DEF_SUCCESS = 'GET_FORM_DEF_SUCCESS';
export const GET_FORM_DEF_ERROR = 'GET_FORM_DEF_ERROR';

export const DELETE_FORM_DEF = 'DELETE_FORM_DEF';
export const DELETE_FORM_DEF_SUCCESS = 'DELETE_FORM_DEF_SUCCESS';
export const DELETE_FORM_DEF_ERROR = 'DELETE_FORM_DEF_ERROR';

export const FORM_DEF_CLEAR_ERROR = 'FORM_DEF_CLEAR_ERROR';

export function postFormDef(formDef) {
    return async dispatch => {
        try {
            dispatch({ type: FORM_DEF_CLEAR_ERROR });
            dispatch({ type: POST_FORM_DEF });
            await formDefService.postFormDef(formDef);
            dispatch({ type: POST_FORM_DEF_SUCCESS });
        } catch (error) {
            dispatch({ type: POST_FORM_DEF_ERROR, payload: 'Error creating form.' });
        }
    };
}

export function clearFormDefError() {
    return { type: FORM_DEF_CLEAR_ERROR };
}

export function deleteFormDef(id) {
    return async dispatch => {
        try {
            dispatch({ type: FORM_DEF_CLEAR_ERROR });
            dispatch({ type: DELETE_FORM_DEF });
            await formDefService.deleteFormDef(id);
            dispatch({ type: DELETE_FORM_DEF_SUCCESS });
        } catch (error) {
            dispatch({ type: DELETE_FORM_DEF_ERROR, payload: 'Error deleting form' });
        }
    };
}

export function getFormDef(id) {
    return async dispatch => {
        try {
            dispatch({ type: FORM_DEF_CLEAR_ERROR });
            dispatch({ type: GET_FORM_DEF });
            const { data } = await formDefService.getFormDef(id);
            dispatch({ type: GET_FORM_DEF_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: GET_FORM_DEF_ERROR, payload: 'Error finding form.' });
        }
    };
}

export function getAllFormDefs() {
    return async dispatch => {
        try {
            dispatch({ type: FORM_DEF_CLEAR_ERROR });
            dispatch({ type: GET_ALL_FORM_DEFS });
            const { data } = await formDefService.getAllFormDefs();
            dispatch({ type: GET_ALL_FORM_DEFS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: GET_ALL_FORM_DEFS_ERROR, payload: 'Error finding forms.' });
        }
    };
}
