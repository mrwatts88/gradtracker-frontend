import { AUTH_CLEAR_ERROR, AUTH_CLEAR_STATUSES } from '../actions/authActions';
import { FORM_CLEAR_ERROR, FORM_CLEAR_STATUSES } from '../actions/formActions';
import { FORM_DEF_CLEAR_ERROR, FORM_DEF_CLEAR_STATUSES } from '../actions/formDefActions';

export function clearStatuses() {
  return async dispatch => {
    dispatch({ type: AUTH_CLEAR_ERROR });
    dispatch({ type: AUTH_CLEAR_STATUSES });
    dispatch({ type: FORM_CLEAR_ERROR });
    dispatch({ type: FORM_CLEAR_STATUSES });
    dispatch({ type: FORM_DEF_CLEAR_ERROR });
    dispatch({ type: FORM_DEF_CLEAR_STATUSES });
  };
}

export function dispatchType(actionType) {
  return async dispatch => {
    dispatch({ type: actionType });
  };
}
