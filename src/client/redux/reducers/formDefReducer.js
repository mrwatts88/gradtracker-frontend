import * as actions from '../actions/formDefActions';

const initialState = {};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FORM_DEF_SUBMITTING:
      return { ...state, submitting: true };
    case actions.FORM_DEF_SUCCESS:
      return { ...state, submitting: false };
    case actions.FORM_DEF_FETCHING_ALL:
      return {
        ...state,
        submitting: true,
      };
    case actions.FORM_DEF_FETCH_ALL_SUCCESS:
      return {
        ...state,
        formDefinitions: action.payload,
        submitting: false
      };
    case actions.FORM_DEF_FETCH_SUCCESS:
      return { ...state, currentFormDefinition: action.payload };
    case action.FORM_DEF_FETCHING:
      return { ...state, submitting: true };
    default:
      return state;
  }
};

export default formDefReducer;
