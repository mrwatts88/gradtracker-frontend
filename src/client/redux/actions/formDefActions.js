import { formDefService } from '../../services/FormDefService/formDefService';
export const FORM_DEF_SUBMITTING = 'FORM_DEF_SUBMITTING';
export const FORM_DEF_SUCCESS = 'FORM_DEF_SUCCESS';
export const FORM_DEF_FETCHING_ALL = 'FORM_DEF_FETCHING_ALL';
export const FORM_DEF_FETCH_ALL_SUCCESS = 'FORM_DEF_FETCH_ALL_SUCCESS';
export const FORM_DEF_FETCH_SUCCESS = 'FORM_DEF_FETCH_SUCCESS';
export const FORM_DEF_FETCHING = 'FORM_DEF_FETCHING';

export function submitForm(form) {
    return async dispatch => {
        try {
            dispatch({ type: FORM_SUBMITTING });
            await formService.submitForm(form);
            dispatch({ type: FORM_SUBMIT_SUCCESS });
        } catch (error) {
            dispatch({
                type: FORM_SUBMIT_ERROR,
                payload: 'Error Submitting Form!',
            });
        }
    };
}

export function submitFormDefinition(formDefinition) {
    return async dispatch => {
        try {
            dispatch({ type: FORM_DEF_SUBMITTING });
            await formService.submitForm(formDefinition);
            dispatch({ type: FORM_DEF_SUBMIT_SUCCESS });
        } catch (error) {
            dispatch({
                type: FORM_DEF_SUBMIT_ERROR,
                payload: 'Error Submitting Form Definition!',
            });
        }
    };
}

export function changeForm(formId) {
    return async dispatch => {
        try {
            dispatch({
                type: CHANGE_FORM,
                payload: {
                    name: 'test form 2',
                    id: 2,
                    fields: [
                        {
                            label: 'Major',
                            propertyName: 'major',
                        },
                        {
                            label: 'Class Standing',
                            propertyName: 'classStanding',
                        },
                    ],
                },
            });
        } catch (error) {
            console.log('error changing form');
        }
    };
}

export function fetchFormDefinitions() {
    return async dispatch => {
        try {
            dispatch({ type: FETCHING_FORM_DEFINITIONS });
            const { data } = formService.fetchFormDefinitions();
            dispatch({
                type: FETCH_FORM_DEFINITIONS_COMPLETE,
                payload: data,
            });
        } catch (error) {
            console.log('error fetching form definitions');
        }
    };
}
