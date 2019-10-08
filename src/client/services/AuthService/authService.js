import axios from 'axios';
export const API_AUTH = `${CONTEXT_ROOT}/api`;

export const authService = {
  logIn: (email, password) =>
    axios.post(`${API_AUTH}/auth`, { email, password }),
};
