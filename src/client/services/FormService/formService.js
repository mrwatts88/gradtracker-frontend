import axios from 'axios';
import { transformForm } from '../../helpers/transformForm';
import { authHeader } from '../../helpers/authHeader';

export const FORM_URL = `${CONTEXT_ROOT}/api/form/`;

export const formService = {
  postForm: form => axios.post(FORM_URL, transformForm(form), { headers: authHeader() }),
  getAllFormSubsByUser: userId => axios.get(`${FORM_URL}user/${userId}`, { headers: authHeader() }),
};
