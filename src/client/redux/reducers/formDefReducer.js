import * as actions from '../actions/formDefActions';
import { UNAUTHENTICATE } from '../actions/authActions';

const initialState = {};

const formDefReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.POST_FORM_DEF:
      return { ...state, postFormDefStatus: action.type };
    case actions.POST_FORM_DEF_SUCCESS:
      return { ...state, postFormDefStatus: action.type };
    case actions.POST_FORM_DEF_ERROR:
      return { ...state, errorMessage: action.payload, postFormDefStatus: action.type };
    case actions.CLEAR_POST_FORM_DEF_STATUS:
      return { ...state, postFormDefStatus: null, errorMessage: null };

    case actions.DELETE_FORM_DEF:
      return { ...state, deleteFormDefStatus: action.type };
    case actions.DELETE_FORM_DEF_SUCCESS:
      return { ...state, deleteFormDefStatus: action.type };
    case actions.DELETE_FORM_DEF_ERROR:
      return { ...state, errorMessage: action.payload, deleteFormDefStatus: action.type };
    case actions.CLEAR_DELETE_FORM_DEF_STATUS:
      return { ...state, deleteFormDefStatus: null, errorMessage: null };

    case actions.GET_ALL_FORM_DEFS:
      return { ...state, getAllFormDefsStatus: action.type };
    case actions.GET_ALL_FORM_DEFS_SUCCESS:
      return { ...state, formDefs: action.payload, getAllFormDefsStatus: action.type };
    case actions.GET_ALL_FORM_DEFS_ERROR:
      return { ...state, errorMessage: action.payload, getAllFormDefsStatus: action.type };
    case action.CLEAR_GET_ALL_FORM_DEFS_STATUS:
      return { ...state, getAllFormDefsStatus: null, errorMessage: null };

    case actions.GET_FORM_DEF:
      return { ...state, getFormDefStatus: action.type };
    case actions.GET_FORM_DEF_SUCCESS:
      return { ...state, currentFormDef: action.payload, getFormDefStatus: action.type };
    case actions.GET_FORM_DEF_ERROR:
      return { ...state, errorMessage: action.payload, getFormDefStatus: action.type };
    case actions.CLEAR_GET_FORM_DEF_STATUS:
      return { ...state, getFormDefStatus: null, errorMessage: null };

    case UNAUTHENTICATE:
      return {};

    default:
      return state;
  }
};

export default formDefReducer;
