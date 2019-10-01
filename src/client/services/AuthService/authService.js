import axios from 'axios';
export const API_AUTH = `${CONTEXT_ROOT}/api/auth`;

export const authService = {
    logIn: (email, password) => axios.post(`${API_AUTH}/login/`, { email, password })
};
