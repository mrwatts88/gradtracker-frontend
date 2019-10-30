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
      errorMessage: 'error'
    });
  });

  it('should handle GET_ALL_FORMS_BY_USER', () => {
    expect(formReducer({}, { type: actions.GET_ALL_FORMS_BY_USER })).toEqual({ status: actions.GET_ALL_FORMS_BY_USER });
  });

  it('should handle GET_ALL_FORMS_BY_USER_SUCCESS', () => {
    expect(formReducer({}, { type: actions.GET_ALL_FORMS_BY_USER_SUCCESS })).toEqual({
      status: actions.GET_ALL_FORMS_BY_USER_SUCCESS
    });
  });

  it('should handle GET_ALL_FORMS_BY_USER_ERROR', () => {
    expect(formReducer({}, { type: actions.GET_ALL_FORMS_BY_USER_ERROR, payload: 'error' })).toEqual({
      status: actions.GET_ALL_FORMS_BY_USER_ERROR,
      errorMessage: 'error'
    });
  });

  it('should handle PUT_FORM', () => {
    expect(formReducer({}, { type: actions.PUT_FORM })).toEqual({ status: actions.PUT_FORM });
  });

  it('should handle PUT_FORM_SUCCESS', () => {
    expect(formReducer({}, { type: actions.PUT_FORM_SUCCESS })).toEqual({
      status: actions.PUT_FORM_SUCCESS
    });
  });

  it('should handle PUT_FORM_SUCCESS - with existing submission', () => {
    const submissions = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(formReducer({ submissions }, { type: actions.PUT_FORM_SUCCESS, payload: { id: 2, test: true } })).toEqual({
      status: actions.PUT_FORM_SUCCESS,
      submissions: [{ id: 1 }, { id: 2, test: true }, { id: 3 }]
    });
  });

  it('should handle PUT_FORM_SUCCESS - no matching submission', () => {
    const submissions = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(formReducer({ submissions }, { type: actions.PUT_FORM_SUCCESS, payload: { id: 4, test: true } })).toEqual({
      status: actions.PUT_FORM_SUCCESS,
      submissions
    });
  });

  it('should handle PUT_FORM_ERROR', () => {
    expect(formReducer({}, { type: actions.PUT_FORM_ERROR, payload: 'error' })).toEqual({
      status: actions.PUT_FORM_ERROR,
      errorMessage: 'error'
    });
  });

  it('should handle FORM_CLEAR_ERROR', () => {
    expect(formReducer({}, { type: actions.FORM_CLEAR_ERROR })).toEqual({
      status: actions.FORM_CLEAR_ERROR,
      errorMessage: null
    });
  });
});
