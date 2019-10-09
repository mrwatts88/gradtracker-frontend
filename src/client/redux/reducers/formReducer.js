import { FORM_SUBMITTING, FORM_SUBMIT_SUCCESS, FORM_SUBMIT_ERROR } from '../actions/formActions';

const initialState = {};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM_SUBMITTING:
            return { ...state, isFormSubmitting: true, error: '' };
        case FORM_SUBMIT_SUCCESS:
            return { ...state, isFormSubmitting: false, error: '' };
        case FORM_SUBMIT_ERROR:
            return { ...state, isFormSubmitting: false, error: action.payload };
        default:
            return state;
    }
};

export default formReducer;
