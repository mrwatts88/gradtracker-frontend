import * as actions from '../../actions/formDefActions';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { formDefService } from '../../../services';

describe('formDefActions', () => {
  const mock = new MockAdapter(axios);
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  let store;
  beforeEach(() => {
    mock.reset();
    store = mockStore();
  });

  describe('postFormDef', () => {
    it('should dispatch correct actions', async () => {
      formDefService.postFormDef = jest.fn(() => Promise.resolve({}));

      await store.dispatch(actions.postFormDef({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_POST_FORM_DEF_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.POST_FORM_DEF });
      expect(store.getActions()[2]).toEqual({ type: actions.POST_FORM_DEF_SUCCESS });
      expect(formDefService.postFormDef).toBeCalled();
    });

    it('handle error from formDefService', async () => {
      formDefService.postFormDef = jest.fn(() => Promise.reject(new Error('error')));

      const expectedAction = {
        type: actions.POST_FORM_DEF_ERROR,
        payload: 'Error creating form.',
      };

      await store.dispatch(actions.postFormDef({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_POST_FORM_DEF_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.POST_FORM_DEF });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(formDefService.postFormDef).toBeCalled();
    });
  });

  describe('deleteFormDef', () => {
    it('should dispatch correct actions', async () => {
      formDefService.deleteFormDef = jest.fn(() => Promise.resolve({}));

      const id = 1;
      await store.dispatch(actions.deleteFormDef(id));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_DELETE_FORM_DEF_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.DELETE_FORM_DEF });
      expect(store.getActions()[2]).toEqual({ type: actions.DELETE_FORM_DEF_SUCCESS });
      expect(formDefService.deleteFormDef).toBeCalled();
    });

    it('should handle errors', async () => {
      formDefService.deleteFormDef = jest.fn(() => Promise.reject(new Error('error')));

      const id = 1;
      await store.dispatch(actions.deleteFormDef(id));

      const expectedAction = {
        type: actions.DELETE_FORM_DEF_ERROR,
        payload: 'Error deleting form.',
      };

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_DELETE_FORM_DEF_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.DELETE_FORM_DEF });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(formDefService.deleteFormDef).toBeCalled();
    });
  });

  describe('getFormDef', () => {
    it('should dispatch correct actions', async () => {
      formDefService.getFormDef = jest.fn(() => Promise.resolve({ data: 'formDef' }));

      const id = 1;
      await store.dispatch(actions.getFormDef(id));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_FORM_DEF_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_FORM_DEF });
      expect(store.getActions()[2]).toEqual({ type: actions.GET_FORM_DEF_SUCCESS, payload: 'formDef' });
      expect(formDefService.getFormDef).toBeCalled();
    });

    it('should handle errors', async () => {
      formDefService.getFormDef = jest.fn(() => Promise.reject(new Error('error')));

      const id = 1;
      await store.dispatch(actions.getFormDef(id));

      const expectedAction = {
        type: actions.GET_FORM_DEF_ERROR,
        payload: 'Error finding form.',
      };

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_FORM_DEF_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_FORM_DEF });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(formDefService.getFormDef).toBeCalled();
    });
  });

  describe('getAllFormDefs', () => {
    it('should dispatch correct actions', async () => {
      formDefService.getAllFormDefs = jest.fn(() => Promise.resolve({ data: 'formDefs' }));

      await store.dispatch(actions.getAllFormDefs());

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_ALL_FORM_DEFS_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_ALL_FORM_DEFS });
      expect(store.getActions()[2]).toEqual({ type: actions.GET_ALL_FORM_DEFS_SUCCESS, payload: 'formDefs' });
      expect(formDefService.getAllFormDefs).toBeCalled();
    });

    it('should handle errors', async () => {
      formDefService.getAllFormDefs = jest.fn(() => Promise.reject(new Error('error')));

      await store.dispatch(actions.getAllFormDefs());

      const expectedAction = {
        type: actions.GET_ALL_FORM_DEFS_ERROR,
        payload: 'Error finding forms.',
      };

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_ALL_FORM_DEFS_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_ALL_FORM_DEFS });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(formDefService.getAllFormDefs).toBeCalled();
    });
  });
});
