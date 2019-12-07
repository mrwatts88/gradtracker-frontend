import { milestoneService } from '../../services/MilestoneService/milestoneService';
import { logOut } from './authActions';

export const POST_MILESTONE = 'POST_MILESTONE';
export const POST_MILESTONE_SUCCESS = 'POST_MILESTONE_SUCCESS';
export const POST_MILESTONE_ERROR = 'POST_MILESTONE_ERROR';
export const CLEAR_POST_MILESTONE_STATUS = 'CLEAR_POST_MILESTONE_STATUS';

export const GET_MILESTONE = 'GET_MILESTONE';
export const GET_MILESTONE_SUCCESS = 'GET_MILESTONE_SUCCESS';
export const GET_MILESTONE_ERROR = 'GET_MILESTONE_ERROR';
export const CLEAR_GET_MILESTONE_STATUS = 'CLEAR_GET_MILESTONE_STATUS';

export const GET_ALL_MILESTONES = 'GET_ALL_MILESTONES';
export const GET_ALL_MILESTONES_SUCCESS = 'GET_ALL_MILESTONES_SUCCESS';
export const GET_ALL_MILESTONES_ERROR = 'GET_ALL_MILESTONES_ERROR';
export const CLEAR_GET_ALL_MILESTONES_STATUS = 'CLEAR_GET_ALL_MILESTONES_STATUS';

export const DELETE_MILESTONE = 'DELETE_MILESTONE';
export const DELETE_MILESTONE_SUCCESS = 'DELETE_MILESTONE_SUCCESS';
export const DELETE_MILESTONE_ERROR = 'DELETE_MILESTONE_ERROR';
export const CLEAR_DELETE_MILESTONE_STATUS = 'CLEAR_DELETE_MILESTONE_STATUS';

export function postMilestone(id, milestone) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_POST_MILESTONE_STATUS });
      dispatch({ type: POST_MILESTONE });
      const { data } = await milestoneService.postMilestone(id, milestone);
      dispatch({ type: POST_MILESTONE_SUCCESS, payload: data });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: POST_MILESTONE_ERROR, payload: 'Error creating milestone' });
    }
  };
}

export function getMilestone(id) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_GET_MILESTONE_STATUS });
      dispatch({ type: GET_MILESTONE });
      const { data } = await milestoneService.getMilestone(id);
      dispatch({ type: GET_MILESTONE_SUCCESS, payload: data });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: GET_MILESTONE_ERROR, payload: 'Error finding form.' });
    }
  };
}

export function getAllMilestones() {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_GET_ALL_MILESTONES_STATUS });
      dispatch({ type: GET_ALL_MILESTONES });
      const { data } = await milestoneService.getAllMilestones();
      dispatch({ type: GET_ALL_MILESTONES_SUCCESS, payload: data });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: GET_ALL_MILESTONES_ERROR, payload: 'Error finding milestones.' });
    }
  };
}

export function deleteMilestone(id) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_DELETE_MILESTONE_STATUS });
      dispatch({ type: DELETE_MILESTONE });
      await milestoneService.deleteMilestone(id);
      dispatch({ type: DELETE_MILESTONE_SUCCESS });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: DELETE_MILESTONE_ERROR, payload: 'Error deleting milestone.' });
    }
  };
}
