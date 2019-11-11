import { milestoneService } from '../../services/MilestoneService/milestoneService';
import { logOut } from './authActions';
import { POST_FORM_ERROR } from './formActions';

export const POST_MILESTONE = 'POST_MILESTONE';
export const POST_MILESTONE_SUCCESS = 'POST_MILESTONE_SUCCESS';
export const POST_MILESTONE_ERROR = 'POST_MILESTONE_ERROR';
export const CLEAR_POST_MILESTONE_STATUS = 'CLEAR_POST_MILESTONE_STATUS';

export function postMilestone(milestone) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_POST_MILESTONE_STATUS });
      dispatch({ type: POST_MILESTONE });
      await milestoneService.postMilestone(milestone);
      dispatch({ type: POST_MILESTONE_SUCCESS });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: POST_FORM_ERROR, payload: 'Error creating milestone.' });
    }
  };
}
