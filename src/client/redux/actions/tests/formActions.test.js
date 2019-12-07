/* eslint-disable prefer-promise-reject-errors */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../actions/formActions';
import { formService } from '../../../services';
import { UNAUTHENTICATE } from '../authActions';

describe('Form actions', () => {
  const mock = new MockAdapter(axios);
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  let store;
  beforeEach(() => {
    mock.reset();
    store = mockStore();
  });

  describe('postForm', () => {
    it('should handle success', async () => {
      formService.postForm = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.postForm({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_POST_FORM_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.POST_FORM });
      expect(store.getActions()[2]).toEqual({ type: actions.POST_FORM_SUCCESS });
      expect(formService.postForm).toBeCalled();
    });

    it('should handle errors', async () => {
      formService.postForm = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.POST_FORM_ERROR,
        payload: 'Error submitting form.'
      };

      await store.dispatch(actions.postForm({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_POST_FORM_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.POST_FORM });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(formService.postForm).toBeCalled();
    });

    it('should log user out on 403', async () => {
      formService.postForm = jest.fn(() => {
        return Promise.reject({ response: { status: 403 } });
      });

      const expectedAction = {
        type: actions.POST_FORM_ERROR,
        payload: 'Error submitting form.'
      };

      await store.dispatch(actions.postForm({}));

      expect(store.getActions().length).toEqual(4);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_POST_FORM_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.POST_FORM });
      expect(store.getActions()[2]).toEqual({ type: UNAUTHENTICATE });
      expect(store.getActions()[3]).toEqual(expectedAction);
      expect(formService.postForm).toBeCalled();
    });
  });

  describe('putForm', () => {
    it('should handle success', async () => {
      formService.putForm = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.putForm({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_PUT_FORM_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.PUT_FORM });
      expect(store.getActions()[2]).toEqual({ type: actions.PUT_FORM_SUCCESS });
      expect(formService.putForm).toBeCalled();
    });

    it('should handle errors', async () => {
      formService.putForm = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.PUT_FORM_ERROR,
        payload: 'Error updating form submission.'
      };

      await store.dispatch(actions.putForm({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_PUT_FORM_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.PUT_FORM });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(formService.putForm).toBeCalled();
    });

    it('should log user out on 403', async () => {
      formService.putForm = jest.fn(() => {
        return Promise.reject({ response: { status: 403 } });
      });

      const expectedAction = {
        type: actions.PUT_FORM_ERROR,
        payload: 'Error updating form submission.'
      };

      await store.dispatch(actions.putForm({}));

      expect(store.getActions().length).toEqual(4);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_PUT_FORM_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.PUT_FORM });
      expect(store.getActions()[2]).toEqual({ type: UNAUTHENTICATE });
      expect(store.getActions()[3]).toEqual(expectedAction);
      expect(formService.putForm).toBeCalled();
    });
  });

  describe('getAllFormSubsByUser', () => {
    it('should handle success', async () => {
      formService.getAllFormSubsByUser = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.getAllFormSubsByUser({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_ALL_FORMS_BY_USER_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_ALL_FORMS_BY_USER });
      expect(store.getActions()[2]).toEqual({ type: actions.GET_ALL_FORMS_BY_USER_SUCCESS });
      expect(formService.getAllFormSubsByUser).toBeCalled();
    });

    it('should handle errors', async () => {
      formService.getAllFormSubsByUser = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.GET_ALL_FORMS_BY_USER_ERROR,
        payload: 'Error retrieving forms.'
      };

      await store.dispatch(actions.getAllFormSubsByUser({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_ALL_FORMS_BY_USER_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_ALL_FORMS_BY_USER });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(formService.putForm).toBeCalled();
    });

    it('should log user out on 403', async () => {
      formService.getAllFormSubsByUser = jest.fn(() => {
        return Promise.reject({ response: { status: 403 } });
      });

      const expectedAction = {
        type: actions.GET_ALL_FORMS_BY_USER_ERROR,
        payload: 'Error retrieving forms.'
      };

      await store.dispatch(actions.getAllFormSubsByUser({}));

      expect(store.getActions().length).toEqual(4);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_ALL_FORMS_BY_USER_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_ALL_FORMS_BY_USER });
      expect(store.getActions()[2]).toEqual({ type: UNAUTHENTICATE });
      expect(store.getActions()[3]).toEqual(expectedAction);
      expect(formService.putForm).toBeCalled();
    });
  });

  describe('getAllFormSubsByFormDef', () => {
    it('should handle success', async () => {
      formService.getAllFormSubsByFormDef = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.getAllFormSubsByFormDef({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_ALL_FORMS_BY_FORM_DEF });
      expect(store.getActions()[2]).toEqual({ type: actions.GET_ALL_FORMS_BY_FORM_DEF_SUCCESS });
      expect(formService.getAllFormSubsByFormDef).toBeCalled();
    });

    it('should handle errors', async () => {
      formService.getAllFormSubsByFormDef = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.GET_ALL_FORMS_BY_FORM_DEF_ERROR,
        payload: 'Error retrieving forms.'
      };

      await store.dispatch(actions.getAllFormSubsByFormDef({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_ALL_FORMS_BY_FORM_DEF });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(formService.getAllFormSubsByFormDef).toBeCalled();
    });

    it('should log user out on 403', async () => {
      formService.getAllFormSubsByFormDef = jest.fn(() => {
        return Promise.reject({ response: { status: 403 } });
      });

      const expectedAction = {
        type: actions.GET_ALL_FORMS_BY_FORM_DEF_ERROR,
        payload: 'Error retrieving forms.'
      };

      await store.dispatch(actions.getAllFormSubsByFormDef({}));

      expect(store.getActions().length).toEqual(4);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_ALL_FORMS_BY_FORM_DEF });
      expect(store.getActions()[2]).toEqual({ type: UNAUTHENTICATE });
      expect(store.getActions()[3]).toEqual(expectedAction);
      expect(formService.getAllFormSubsByFormDef).toBeCalled();
    });
  });

  describe('approveForm', () => {
    it('should handle success', async () => {
      formService.approveForm = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.approveForm({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_APPROVE_FORM_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.APPROVE_FORM });
      expect(store.getActions()[2]).toEqual({ type: actions.APPROVE_FORM_SUCCESS });
      expect(formService.approveForm).toBeCalled();
    });

    it('should handle errors', async () => {
      formService.approveForm = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.APPROVE_FORM_ERROR,
        payload: 'Error approving/rejecting form submission.'
      };

      await store.dispatch(actions.approveForm({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_APPROVE_FORM_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.APPROVE_FORM });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(formService.approveForm).toBeCalled();
    });

    it('should log user out on 403', async () => {
      formService.approveForm = jest.fn(() => {
        return Promise.reject({ response: { status: 403 } });
      });

      const expectedAction = {
        type: actions.APPROVE_FORM_ERROR,
        payload: 'Error approving/rejecting form submission.'
      };

      await store.dispatch(actions.approveForm({}));

      expect(store.getActions().length).toEqual(4);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_APPROVE_FORM_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.APPROVE_FORM });
      expect(store.getActions()[2]).toEqual({ type: UNAUTHENTICATE });
      expect(store.getActions()[3]).toEqual(expectedAction);
      expect(formService.approveForm).toBeCalled();
    });
  });
});
