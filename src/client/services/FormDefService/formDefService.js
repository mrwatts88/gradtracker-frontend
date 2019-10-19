import axios from 'axios';
import { authHeader } from '../../helpers/authHeader';

export const FORM_DEF_URL = `${CONTEXT_ROOT}/api/formDef/`;

export const formDefService = {
    postFormDef: formDef => axios.post(FORM_DEF_URL, formDef, { headers: authHeader() }),
    getAllFormDefs: () => axios.get(FORM_DEF_URL, { headers: authHeader() }),
    getFormDef: id => axios.get(`${FORM_DEF_URL}${id}`, { headers: authHeader() }),
    deleteFormDef: id => axios.get(`${FORM_DEF_URL}${id}`, { headers: authHeader() })
};
