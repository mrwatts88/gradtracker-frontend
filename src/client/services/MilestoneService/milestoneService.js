import axios from 'axios';
import { authHeader } from '../../helpers/authHeader';

export const MILESTONE_DEF_URL = `${CONTEXT_ROOT}/api/milestones/`;

export const milestoneService = {
  // this post request not update request
  postMilestone: (id, milestone) => axios.put(`${MILESTONE_DEF_URL}${id}`, milestone, { headers: authHeader() }),
  getAllMilestones: () => axios.get(MILESTONE_DEF_URL, { headers: authHeader() }),
  getMilestone: id => axios.get(`${MILESTONE_DEF_URL}${id}`, { headers: authHeader() }),
  deleteMilestone: id => axios.delete(`${MILESTONE_DEF_URL}${id}`, { headers: authHeader() }),
};
