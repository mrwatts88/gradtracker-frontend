import * as actions from '../actions/milestoneActions';
import { UNAUTHENTICATE } from '../actions/authActions';

const initialState = {};

const milestoneReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.POST_MILESTONE:
      return { ...state, postMilestoneStatus: action.type };
    case actions.POST_MILESTONE_SUCCESS:
      return { ...state, postMilestoneStatus: action.type };
    case actions.POST_MILESTONE_ERROR:
      return { ...state, errorMessage: action.payload, postMilestoneStatus: action.type };
    case actions.CLEAR_POST_MILESTONE_STATUS:
      return { ...state, postMilestoneStatus: null, errorMessage: null };

    case actions.GET_MILESTONE:
      return { ...state, getMilestoneStatus: action.type };
    case actions.GET_MILESTONE_SUCCESS:
      return { ...state, currentMilestone: action.payload, getMilestoneStatus: action.type };
    case actions.GET_MILESTONE_ERROR:
      return { ...state, errorMessage: action.payload, getMilestoneStatus: action.type };
    case actions.CLEAR_MILESTONE_STATUS:
      return { ...state, getMilestoneStatus: null, errorMessage: null };

    case actions.GET_ALL_MILESTONES:
      return { ...state, getAllMilestonesStatus: action.type };
    case actions.GET_ALL_MILESTONES_SUCCESS:
      return { ...state, getAllMilestonesStatus: action.type, milestones: action.payload };
    case actions.GET_ALL_MILSTONES_ERROR:
      return { ...state, getAllMilestonesStatus: action.type, errorMessage: action.payload };
    case actions.CLEAR_GET_ALL_MILESTONES_STATUS:
      return { ...state, getAllMilestonesStatus: action.type, errorMessage: null };

    case actions.DELETE_MILESTONE:
      return { ...state, deleteMilestoneStatus: action.type };
    case actions.DELETE_MILESTONE_SUCCESS:
      return { ...state, deleteMilestoneStatus: action.type };
    case actions.DELETE_MILESTONE_ERROR:
      return { ...state, errorMessage: action.payload, deleteMilestoneStatus: action.type };
    case actions.CLEAR_DELETE_MILESTONE_STATUS:
      return { ...state, deleteMilestoneStatus: null, errorMessage: null };

    case UNAUTHENTICATE:
      return {};

    default:
      return state;
  }
};

export default milestoneReducer;
