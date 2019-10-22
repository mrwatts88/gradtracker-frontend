import * as actions from '../actions/formDefActions';

const initialState = {};

const formDefReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.POST_FORM_DEF:
      return { ...state, status: action.type };
    case actions.POST_FORM_DEF_SUCCESS:
      return { ...state, status: action.type };
    case actions.POST_FORM_DEF_ERROR:
      return { ...state, errorMessage: action.payload, status: action.type };

    case actions.DELETE_FORM_DEF:
      return { ...state, status: action.type };
    case actions.DELETE_FORM_DEF_SUCCESS:
      return { ...state, status: action.type };
    case actions.DELETE_FORM_DEF_ERROR:
      return { ...state, errorMessage: action.payload, status: action.type };

    case actions.GET_ALL_FORM_DEFS:
      return { ...state, status: action.type };
    case actions.GET_ALL_FORM_DEFS_SUCCESS:
      return { ...state, formDefs: action.payload, status: action.type };
    case actions.GET_ALL_FORM_DEFS_ERROR:
      return { ...state, errorMessage: action.payload, status: action.type };

    case actions.GET_FORM_DEF:
      return { ...state, status: action.type };
    case actions.GET_FORM_DEF_SUCCESS:
      return { ...state, currentFormDef: action.payload, status: action.type };
    case actions.GET_FORM_DEF_ERROR:
      return { ...state, errorMessage: action.payload, status: action.type };

    case actions.FORM_DEF_CLEAR_ERROR:
      return { ...state, errorMessage: null, status: action.type };

    default:
      return state;
  }
};

export default formDefReducer;
