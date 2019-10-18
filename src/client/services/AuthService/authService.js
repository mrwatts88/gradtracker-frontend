import axios from 'axios';

export const AUTH_URL = `${CONTEXT_ROOT}/api/`;

export const authService = {
    authenticate: (email, password) => axios.post(`${AUTH_URL}auth`, { email, password })
};
