import axios from 'axios';
export const API_FORM_DEF = `${CONTEXT_ROOT}/api/formDef/`;

export const formDefService = {
    submitFormDef: formDef => axios.post(`${API_FORM_DEF}`, formDef),
    fetchAllFormDefs: () => axios.get(API_FORM_DEF),
    fetchFormDef: id => axios.get(`${API_FORM_DEF}${id}`)
};
