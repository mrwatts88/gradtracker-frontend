import axios from 'axios';
export const API_LOGIN = `${CONTEXT_ROOT}/api/login`;

export const authService = {
    logIn: ({ email, password }) => axios.post(API_LOGIN, { email, password })
};
