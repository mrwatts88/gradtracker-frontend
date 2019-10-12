import * as actions from '../actions/formActions';
import { stat } from 'fs';

const initialState = {};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FORM_SUBMITTING:
      return { ...state, isFormSubmitting: true, error: '' };
    case actions.FORM_SUBMIT_SUCCESS:
      return { ...state, isFormSubmitting: false, error: '' };
    case actions.FORM_SUBMIT_ERROR:
      return { ...state, isFormSubmitting: false, error: action.payload };
    case actions.FORM_DEF_SUBMITTING:
      return { ...state, isFormDefSubmitting: true, error: '' };
    case actions.FORM_DEF_SUBMIT_SUCCESS:
      return { ...state, isFormDefSubmitting: false, error: '' };
    case actions.FORM_DEF_SUBMIT_ERROR:
      return { ...state, isFormDefSubmitting: false, error: action.payload };
    case actions.FETCHING_FORM_DEFINITIONS:
      return { ...state, isFormDefSubmitting: true };
    case actions.FETCH_FORM_DEFINITIONS_COMPLETE:
      return {
        ...state,
        formDefinitions: action.payload,
        isFormDefSubmitting: false,
      };
    case actions.CHANGE_FORM:
      return { ...state, currentFormDefinition: action.payload };
    case actions.FETCH_FORM_DEFINITIONS:
      return {
        ...state,
        currentFormDefinition: undefined,
        formDefinitions: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
