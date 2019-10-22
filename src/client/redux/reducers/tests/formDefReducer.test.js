import formDefReducer from '../formDefReducer';
import * as actions from '../../actions/formDefActions';

describe('formDefReducer', () => {
  describe('POST', () => {
    it('should return initial state', () => {
      expect(formDefReducer(undefined, {})).toEqual({});
    });

    it('should handle POST_FORM_DEF', () => {
      expect(formDefReducer({}, { type: actions.POST_FORM_DEF })).toEqual({ status: actions.POST_FORM_DEF });
    });

    it('should handle POST_FORM_DEF_SUCCESS', () => {
      expect(formDefReducer({}, { type: actions.POST_FORM_DEF_SUCCESS })).toEqual({
        status: actions.POST_FORM_DEF_SUCCESS,
      });
    });

    it('should handle POST_FORM_DEF_ERROR', () => {
      expect(formDefReducer({}, { type: actions.POST_FORM_DEF_ERROR, payload: 'error' })).toEqual({
        status: actions.POST_FORM_DEF_ERROR,
        errorMessage: 'error',
      });
    });
  });

  describe('DELETE', () => {
    it('should return initial state', () => {
      expect(formDefReducer(undefined, {})).toEqual({});
    });

    it('should handle DELETE_FORM_DEF', () => {
      expect(formDefReducer({}, { type: actions.DELETE_FORM_DEF })).toEqual({ status: actions.DELETE_FORM_DEF });
    });

    it('should handle DELETE_FORM_DEF_SUCCESS', () => {
      expect(formDefReducer({}, { type: actions.DELETE_FORM_DEF_SUCCESS })).toEqual({
        status: actions.DELETE_FORM_DEF_SUCCESS,
      });
    });

    it('should handle DELETE_FORM_DEF_ERROR', () => {
      expect(formDefReducer({}, { type: actions.DELETE_FORM_DEF_ERROR, payload: 'error' })).toEqual({
        status: actions.DELETE_FORM_DEF_ERROR,
        errorMessage: 'error',
      });
    });
  });

  describe('GET', () => {
    it('should return initial state', () => {
      expect(formDefReducer(undefined, {})).toEqual({});
    });

    it('should handle GET_FORM_DEF', () => {
      expect(formDefReducer({}, { type: actions.GET_FORM_DEF })).toEqual({ status: actions.GET_FORM_DEF });
    });

    it('should handle GET_FORM_DEF_SUCCESS', () => {
      expect(formDefReducer({}, { type: actions.GET_FORM_DEF_SUCCESS })).toEqual({
        status: actions.GET_FORM_DEF_SUCCESS,
      });
    });

    it('should handle GET_FORM_DEF_ERROR', () => {
      expect(formDefReducer({}, { type: actions.GET_FORM_DEF_ERROR, payload: 'error' })).toEqual({
        status: actions.GET_FORM_DEF_ERROR,
        errorMessage: 'error',
      });
    });
  });

  describe('GET_ALL', () => {
    it('should return initial state', () => {
      expect(formDefReducer(undefined, {})).toEqual({});
    });

    it('should handle GET_ALL_FORM_DEFS', () => {
      expect(formDefReducer({}, { type: actions.GET_ALL_FORM_DEFS })).toEqual({ status: actions.GET_ALL_FORM_DEFS });
    });

    it('should handle GET_ALL_FORM_DEFS_SUCCESS', () => {
      expect(formDefReducer({}, { type: actions.GET_ALL_FORM_DEFS_SUCCESS })).toEqual({
        status: actions.GET_ALL_FORM_DEFS_SUCCESS,
      });
    });

    it('should handle GET_ALL_FORM_DEFS_ERROR', () => {
      expect(formDefReducer({}, { type: actions.GET_ALL_FORM_DEFS_ERROR, payload: 'error' })).toEqual({
        status: actions.GET_ALL_FORM_DEFS_ERROR,
        errorMessage: 'error',
      });
    });
  });

  describe('CLEAR_ERROR', () => {
    it('should clear error', () => {
      expect(formDefReducer({}, { type: actions.FORM_DEF_CLEAR_ERROR })).toEqual({
        status: actions.FORM_DEF_CLEAR_ERROR,
        errorMessage: null,
      });
    });
  });
});
