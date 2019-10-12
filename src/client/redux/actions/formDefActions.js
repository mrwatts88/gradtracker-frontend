import { formDefService } from '../../services/FormDefService/formDefService';
export const FORM_DEF_SUBMITTING = 'FORM_DEF_SUBMITTING';
export const FORM_DEF_SUCCESS = 'FORM_DEF_SUCCESS';
export const FORM_DEF_FETCHING_ALL = 'FORM_DEF_FETCHING_ALL';
export const FORM_DEF_FETCH_ALL_SUCCESS = 'FORM_DEF_FETCH_ALL_SUCCESS';
export const FORM_DEF_FETCH_SUCCESS = 'FORM_DEF_FETCH_SUCCESS';
export const FORM_DEF_FETCHING = 'FORM_DEF_FETCHING';

export function submitFormDef(formDef) {
    return async dispatch => {
        try {
            dispatch({ type: FORM_DEF_SUBMITTING });
            await formDefService.submitFormDef(formDef);
            dispatch({ type: FORM_DEF_SUCCESS });
        } catch (error) {
            console.log('error submitting form definition');
        }
    };
}

export function fetchFormDef(id) {
    return async dispatch => {
        try {
            dispatch({
                type: FORM_DEF_FETCHING,
            });
            const { data } = await formDefService.fetchFormDef(id);
            dispatch({ type: FORM_DEF_FETCH_SUCCESS, payload: data });
        } catch (error) {
            console.log('error changing form');
        }
    };
}

export function fetchAllFormDefs() {
    return async dispatch => {
        try {
            dispatch({ type: FORM_DEF_FETCHING_ALL });
            const { data } = await formDefService.fetchAllFormDefs();

            dispatch({
                type: FORM_DEF_FETCH_ALL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            console.log('error fetching form definitions');
        }
    };
}
