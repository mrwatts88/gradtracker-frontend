import {FORM_SUBMITTING, FORM_SUBMIT_SUCCESS, FORM_SUBMIT_ERROR} from '../actions/formActions';

const initialState = {};

const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case FORM_SUBMITTING:
			return {...state, error:''};
		case FORM_SUBMIT_SUCCESS:
			return {...state, error:''};
		case FORM_SUBMIT_ERROR:
			return {...state, error: action.payload};
		default:
			return state;
	}
};

export default formReducer;