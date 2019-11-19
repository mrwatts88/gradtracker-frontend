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

export function postMilestone(milestone) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_POST_MILESTONE_STATUS });
      dispatch({ type: POST_MILESTONE });
      const { data } = await milestoneService.postMilestone(milestone);
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
