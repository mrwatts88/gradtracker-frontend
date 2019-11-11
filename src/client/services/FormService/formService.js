import axios from 'axios';
import { transformForm, transformUpdatedForm } from '../../helpers/transformForm';
import { authHeader } from '../../helpers/authHeader';

export const FORM_URL = `${CONTEXT_ROOT}/api/form/`;

export const formService = {
  postForm: form => axios.post(FORM_URL, transformForm(form), { headers: authHeader() }),
  putForm: form => axios.put(`${FORM_URL}${form.id}`, transformUpdatedForm(form), { headers: authHeader() }),
  approveForm: (form, approve) => axios.put(`${FORM_URL}approve/${form.id}?approve=${approve}`, null, { headers: authHeader() }),
  getAllFormSubsByUser: userId => axios.get(`${FORM_URL}panther_id/${userId}`, { headers: authHeader() }),
  getAllFormSubsByFormDef: formDefId => axios.get(`${FORM_URL}formDef/${formDefId}`, { headers: authHeader() }),
};
