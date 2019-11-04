import formDefReducer from '../formDefReducer';
import * as actions from '../../actions/formDefActions';

describe('formDefReducer', () => {
  it('should return correct state', () => {
    expect(formDefReducer({}, {})).toEqual({
      getAllFormDefsStatus: null, errorMessage: null
    });

    expect(formDefReducer({}, { type: actions.POST_FORM_DEF })).toEqual({ postFormDefStatus: actions.POST_FORM_DEF });
    expect(formDefReducer({}, { type: actions.POST_FORM_DEF_SUCCESS }))
      .toEqual({ postFormDefStatus: actions.POST_FORM_DEF_SUCCESS });
    expect(formDefReducer({}, { type: actions.POST_FORM_DEF_ERROR, payload: 'error' }))
      .toEqual({ postFormDefStatus: actions.POST_FORM_DEF_ERROR, errorMessage: 'error' });
    expect(formDefReducer({}, { type: actions.CLEAR_POST_FORM_DEF_STATUS }))
      .toEqual({ postFormDefStatus: null, errorMessage: null });

    expect(formDefReducer({}, { type: actions.DELETE_FORM_DEF }))
      .toEqual({ deleteFormDefStatus: actions.DELETE_FORM_DEF });
    expect(formDefReducer({}, { type: actions.DELETE_FORM_DEF_SUCCESS }))
      .toEqual({ deleteFormDefStatus: actions.DELETE_FORM_DEF_SUCCESS });
    expect(formDefReducer({}, { type: actions.DELETE_FORM_DEF_ERROR, payload: 'error' }))
      .toEqual({ deleteFormDefStatus: actions.DELETE_FORM_DEF_ERROR, errorMessage: 'error' });
    expect(formDefReducer({}, { type: actions.CLEAR_DELETE_FORM_DEF_STATUS }))
      .toEqual({ deleteFormDefStatus: null, errorMessage: null });

    expect(formDefReducer({}, { type: actions.GET_FORM_DEF })).toEqual({ getFormDefStatus: actions.GET_FORM_DEF });
    expect(formDefReducer({}, { type: actions.GET_FORM_DEF_SUCCESS }))
      .toEqual({ getFormDefStatus: actions.GET_FORM_DEF_SUCCESS });
    expect(formDefReducer({}, { type: actions.GET_FORM_DEF_ERROR, payload: 'error' }))
      .toEqual({ getFormDefStatus: actions.GET_FORM_DEF_ERROR, errorMessage: 'error' });
    expect(formDefReducer({}, { type: actions.CLEAR_GET_FORM_DEF_STATUS }))
      .toEqual({ getFormDefStatus: null, errorMessage: null });

    expect(formDefReducer({}, { type: actions.GET_ALL_FORM_DEFS }))
      .toEqual({ getAllFormDefsStatus: actions.GET_ALL_FORM_DEFS });
    expect(formDefReducer({}, { type: actions.GET_ALL_FORM_DEFS_SUCCESS }))
      .toEqual({ getAllFormDefsStatus: actions.GET_ALL_FORM_DEFS_SUCCESS });
    expect(formDefReducer({}, { type: actions.GET_ALL_FORM_DEFS_ERROR, payload: 'error' }))
      .toEqual({ getAllFormDefsStatus: actions.GET_ALL_FORM_DEFS_ERROR, errorMessage: 'error' });
    expect(formDefReducer({}, { type: actions.CLEAR_GET_ALL_FORM_DEFS_STATUS }))
      .toEqual({});
  });
});
