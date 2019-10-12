import * as actions from '../actions/formActions';

const initialState = {};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FORM_SUBMITTING:
      return { ...state, isFormSubmitting: true };
    case actions.FORM_SUBMIT_SUCCESS:
      return { ...state, isFormSubmitting: false };
    default:
      return state;
  }
};

export default formReducer;
