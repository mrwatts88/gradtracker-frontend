import axios from 'axios';
import { authHeader } from '../../helpers/authHeader';

export const AUTH_URL = `${CONTEXT_ROOT}/api/`;

export const authService = {
  authenticate: (email, password) => axios.post(`${AUTH_URL}auth`, { email, password }),
  register: newUser => axios.post(`${AUTH_URL}user`, newUser, { headers: authHeader() }),
  getAllRoles: () => axios.get(`${AUTH_URL}role`, { headers: authHeader() }),
  getAllPermissions: () => axios.get(`${AUTH_URL}role/authorities`, { headers: authHeader() }),
  createRole: role => axios.post(`${AUTH_URL}role`, role, { headers: authHeader() }),
  updateRole: role => axios.put(`${AUTH_URL}role/${role.id}`, role, { headers: authHeader() })
};
