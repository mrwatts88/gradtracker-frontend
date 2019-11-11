import * as actions from '../actions/milestoneActions';
import { UNAUTHENTICATE } from '../actions/authActions';

const initialState = {};

const milestoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.POST_MILESTONE:
      return { ...state, postMilestoneStatus: action.type };
    case actions.POST_MILESTONE_SUCCESS:
      return { ...state, postMilestoneStatus: action.type };
    case actions.POST_MILESTONE_ERROR:
      return { ...state, errorMessage: action.payload, postMilestoneStatus: action.type };
    case actions.CLEAR_POST_MILESTONE_STATUS:
      return { ...state, postMilestoneStatus: null, errorMessage: null };

    case UNAUTHENTICATE:
      return {};

    default:
      return state;
  }
};

export default milestoneReducer;
