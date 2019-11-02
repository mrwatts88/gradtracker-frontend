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

    case actions.GET_ALL_FORMS_BY_USER:
      return { ...state, status: action.type };
    case actions.GET_ALL_FORMS_BY_USER_SUCCESS:
      return { ...state, status: action.type, submissions: action.payload };
    case actions.GET_ALL_FORMS_BY_USER_ERROR:
      return { ...state, errorMessage: action.payload, status: action.type };

    case actions.GET_ALL_FORMS_BY_FORM_DEF:
      return { ...state, status: action.type };
    case actions.GET_ALL_FORMS_BY_FORM_DEF_SUCCESS:
      return { ...state, status: action.type, submissions: action.payload };
    case actions.GET_ALL_FORMS_BY_FORM_DEF_ERROR:
      return { ...state, errorMessage: action.payload, status: action.type };

    case actions.PUT_FORM:
      return { ...state, status: action.type };
    case actions.PUT_FORM_SUCCESS:
      if (state.submissions) {
        const submissions = [...state.submissions];
        const idx = submissions.findIndex(s => s.id === action.payload.id);
        if (idx !== -1) {
          submissions[idx] = action.payload;
        }
        return { ...state, submissions, status: action.type };
      }
      return { ...state, status: action.type };
    case actions.PUT_FORM_ERROR:
      return { ...state, errorMessage: action.payload, status: action.type };

    case actions.FORM_CLEAR_ERROR:
      return { ...state, errorMessage: null, status: action.type };

    default:
      return state;
  }
};

export default formReducer;
