import { AUTH_CLEAR_ERROR } from '../actions/authActions';
import { FORM_CLEAR_ERROR } from '../actions/formActions';
import { FORM_DEF_CLEAR_ERROR } from '../actions/formDefActions';

export function clearErrors() {
  return async dispatch => {
    dispatch({ type: AUTH_CLEAR_ERROR });
    dispatch({ type: FORM_CLEAR_ERROR });
    dispatch({ type: FORM_DEF_CLEAR_ERROR });
  };
}
