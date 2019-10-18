import * as actions from '../actions/formActions';

const initialState = {};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.POST_FORM:
            return { ...state, status: action.type };
        case actions.POST_FORM_SUCCESS:
            return { ...state, status: action.type };
        case actions.POST_FORM_ERROR:
            return { ...state, errorMessage: action.payload, status: action.type };
        case actions.POST_FORM_CLEAR_ERROR:
            return { ...state, errorMessage: null, status: action.type };

        default:
            return state;
    }
};

export default formReducer;
