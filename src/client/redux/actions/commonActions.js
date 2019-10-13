import * as authActions from '../actions/authActions';
import * as formActions from '../actions/formActions';
import * as formDefActions from '../actions/formDefActions';

export function clearErrors() {
  return async dispatch => {
    dispatch({ type: authActions.AUTHENTICATE_CLEAR_ERROR });
    dispatch({ type: formActions.POST_FORM_CLEAR_ERROR });
    dispatch({ type: formDefActions.POST_FORM_DEF_CLEAR_ERROR });
    dispatch({ type: formDefActions.GET_ALL_FORM_DEFS_CLEAR_ERROR });
    dispatch({ type: formDefActions.GET_FORM_DEF_CLEAR_ERROR });
    dispatch({ type: formDefActions.DELETE_FORM_DEF_CLEAR_ERROR });
  };
}
