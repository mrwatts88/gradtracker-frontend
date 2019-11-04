export function dispatchType(actionType) {
  return async dispatch => {
    dispatch({ type: actionType });
  };
}
