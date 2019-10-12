import axios from 'axios';
export const API_FORM = `${CONTEXT_ROOT}/api/form`;
export const API_FORM_DEF = `${CONTEXT_ROOT}/api/formDef`;

export const formService = {
  submitForm: form => axios.post(`${API_FORM}`, form),
};
