import axios from 'axios';

export const FORM_DEF_URL = `${CONTEXT_ROOT}/api/formDef/`;

export const formDefService = {
  postFormDef: formDef => axios.post(FORM_DEF_URL, formDef),
  getAllFormDefs: () => axios.get(FORM_DEF_URL),
  getFormDef: id => axios.get(`${FORM_DEF_URL}${id}`),
  deleteFormDef: id => axios.get(`${FORM_DEF_URL}${id}`),
};
