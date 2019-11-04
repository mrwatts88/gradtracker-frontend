import * as actions from '../actions/formActions';
import { UNAUTHENTICATE } from '../actions/authActions';

const initialState = {};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.POST_FORM:
      return { ...state, postFormStatus: action.type };
    case actions.POST_FORM_SUCCESS:
      return { ...state, postFormStatus: action.type };
    case actions.POST_FORM_ERROR:
      return { ...state, errorMessage: action.payload, postFormStatus: action.type };
    case actions.CLEAR_POST_FORM_STATUS:
      return { ...state, postFormStatus: null, errorMessage: null };

    case actions.GET_ALL_FORMS_BY_USER:
      return { ...state, getAllFormsByUserStatus: action.type };
    case actions.GET_ALL_FORMS_BY_USER_SUCCESS:
      return { ...state, getAllFormsByUserStatus: action.type, submissions: action.payload };
    case actions.GET_ALL_FORMS_BY_USER_ERROR:
      return { ...state, errorMessage: action.payload, getAllFormsByUserStatus: action.type };
    case actions.CLEAR_GET_ALL_FORMS_BY_USER_STATUS:
      return { ...state, getAllFormsByUserStatus: null, errorMessage: null };

    case actions.GET_ALL_FORMS_BY_FORM_DEF:
      return { ...state, getAllFormsByFormDefStatus: action.type };
    case actions.GET_ALL_FORMS_BY_FORM_DEF_SUCCESS:
      return { ...state, getAllFormsByFormDefStatus: action.type, submissions: action.payload };
    case actions.GET_ALL_FORMS_BY_FORM_DEF_ERROR:
      return { ...state, errorMessage: action.payload, getAllFormsByFormDefStatus: action.type };
    case actions.CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS:
      return { ...state, getAllFormsByFormDefStatus: null, errorMessage: null };

    case actions.PUT_FORM:
      return { ...state, putFormStatus: action.type };
    case actions.PUT_FORM_SUCCESS:
      if (state.submissions) {
        const submissions = [...state.submissions];
        const idx = submissions.findIndex(s => s.id === action.payload.id);
        if (idx !== -1) submissions[idx] = action.payload;
        return { ...state, submissions, putFormStatus: action.type };
      }
      return { ...state, putFormStatus: action.type };
    case actions.PUT_FORM_ERROR:
      return { ...state, errorMessage: action.payload, putFormStatus: action.type };
    case actions.CLEAR_PUT_FORM_STATUS:
      return { ...state, putFormStatus: null, errorMessage: null };

    case UNAUTHENTICATE:
      return {};

    default:
      return state;
  }
};

export default formReducer;
