import formReducer from '../formReducer';
import * as actions from '../../actions/formActions';

describe('formReducer', () => {
  it('should return initial state', () => {
    expect(formReducer(undefined, {})).toEqual({});
  });

  it('should handle POST_FORM', () => {
    expect(formReducer({}, { type: actions.POST_FORM })).toEqual({ status: actions.POST_FORM });
  });

  it('should handle POST_FORM_SUCCESS', () => {
    expect(formReducer({}, { type: actions.POST_FORM_SUCCESS })).toEqual({ status: actions.POST_FORM_SUCCESS });
  });

  it('should handle POST_FORM_ERROR', () => {
    expect(formReducer({}, { type: actions.POST_FORM_ERROR, payload: 'error' })).toEqual({
      status: actions.POST_FORM_ERROR,
      errorMessage: 'error',
    });
  });

  it('should handle FORM_CLEAR_ERROR', () => {
    expect(formReducer({}, { type: actions.FORM_CLEAR_ERROR })).toEqual({
      status: actions.FORM_CLEAR_ERROR,
      errorMessage: null,
    });
  });
});
