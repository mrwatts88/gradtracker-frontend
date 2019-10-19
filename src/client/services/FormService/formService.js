import axios from 'axios';
import { authHeader } from '../../helpers/authHeader';

export const FORM_URL = `${CONTEXT_ROOT}/api/form/`;

export const formService = {
    postForm: form => axios.post(FORM_URL, form, { headers: authHeader() })
};
