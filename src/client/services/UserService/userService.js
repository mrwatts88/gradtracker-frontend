import axios from 'axios';
export const API_SIGNIN = `${CONTEXT_ROOT}/api/signin`;

export const userService = {
    signIn: ({ email, password }) => axios.post(API_SIGNIN, { email, password })
};
