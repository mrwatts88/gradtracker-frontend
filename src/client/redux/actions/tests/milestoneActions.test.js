/* eslint-disable prefer-promise-reject-errors */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../actions/milestoneActions';
import { milestoneService } from '../../../services';
import { UNAUTHENTICATE } from '../authActions';

describe('Milestone actions', () => {
  const mock = new MockAdapter(axios);
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  let store;
  beforeEach(() => {
    mock.reset();
    store = mockStore();
  });

  describe('post milestone', () => {
    it('should handle success', async () => {
      milestoneService.postMilestone = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.postMilestone({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_POST_MILESTONE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.POST_MILESTONE });
      expect(store.getActions()[2]).toEqual({ type: actions.POST_MILESTONE_SUCCESS });
      expect(milestoneService.postMilestone).toBeCalled();
    });

    it('should call error', async () => {
      milestoneService.postMilestone = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.POST_MILESTONE_ERROR,
        payload: 'Error creating milestone'
      };

      await store.dispatch(actions.postMilestone({}));

      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_POST_MILESTONE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.POST_MILESTONE });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(milestoneService.postMilestone).toBeCalled();
    });

    it('should log user out on 403', async () => {
      milestoneService.postMilestone = jest.fn(() => {
        return Promise.reject({ response: { status: 403 } });
      });

      const expectedAction = {
        type: actions.POST_MILESTONE_ERROR,
        payload: 'Error creating milestone'
      };

      await store.dispatch(actions.postMilestone({}));

      expect(store.getActions().length).toEqual(4);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_POST_MILESTONE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.POST_MILESTONE });
      expect(store.getActions()[2]).toEqual({ type: UNAUTHENTICATE });
      expect(store.getActions()[3]).toEqual(expectedAction);
      expect(milestoneService.postMilestone).toBeCalled();
    });
  });

  describe('getMilestone', () => {
    it('should handle success', async () => {
      milestoneService.getMilestone = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.getMilestone({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_MILESTONE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_MILESTONE });
      expect(store.getActions()[2]).toEqual({ type: actions.GET_MILESTONE_SUCCESS });
      expect(milestoneService.getMilestone).toBeCalled();
    });

    it('should handle errors', async () => {
      milestoneService.getMilestone = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.GET_MILESTONE_ERROR,
        payload: 'Error finding form.',
      };

      await store.dispatch(actions.getMilestone({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_MILESTONE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_MILESTONE });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(milestoneService.getMilestone).toBeCalled();
    });
  });

  describe('getAllMilestones', () => {
    it('should handle success', async () => {
      milestoneService.getAllMilestones = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.getAllMilestones({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_ALL_MILESTONES_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_ALL_MILESTONES });
      expect(store.getActions()[2]).toEqual({ type: actions.GET_ALL_MILESTONES_SUCCESS });
      expect(milestoneService.getAllMilestones).toBeCalled();
    });

    it('should handle errors', async () => {
      milestoneService.getAllMilestones = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.GET_ALL_MILESTONES_ERROR,
        payload: 'Error finding milestones.',
      };

      await store.dispatch(actions.getAllMilestones({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_GET_ALL_MILESTONES_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.GET_ALL_MILESTONES });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(milestoneService.getAllMilestones).toBeCalled();
    });
  });

  describe('deleteMilestone', () => {
    it('should handle success', async () => {
      milestoneService.deleteMilestone = jest.fn(() => {
        return Promise.resolve({});
      });

      await store.dispatch(actions.deleteMilestone({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_DELETE_MILESTONE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.DELETE_MILESTONE });
      expect(store.getActions()[2]).toEqual({ type: actions.DELETE_MILESTONE_SUCCESS });
      expect(milestoneService.deleteMilestone).toBeCalled();
    });

    it('should handle errors', async () => {
      milestoneService.deleteMilestone = jest.fn(() => {
        return Promise.reject(new Error('error'));
      });

      const expectedAction = {
        type: actions.DELETE_MILESTONE_ERROR,
        payload: 'Error deleting milestone.',
      };

      await store.dispatch(actions.deleteMilestone({}));
      expect(store.getActions().length).toEqual(3);
      expect(store.getActions()[0]).toEqual({ type: actions.CLEAR_DELETE_MILESTONE_STATUS });
      expect(store.getActions()[1]).toEqual({ type: actions.DELETE_MILESTONE });
      expect(store.getActions()[2]).toEqual(expectedAction);
      expect(milestoneService.deleteMilestone).toBeCalled();
    });
  });
});
