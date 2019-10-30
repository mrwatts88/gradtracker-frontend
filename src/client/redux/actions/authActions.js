import { authService } from '../../services/AuthService/authService';
import { push } from 'connected-react-router';
import * as JWT from 'jwt-decode';

export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';

export const REGISTER = 'REGISTER';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const AUTH_CLEAR_ERROR = 'AUTH_CLEAR_ERROR';

export function authenticate(email, password) {
  return async dispatch => {
    try {
      dispatch({ type: AUTH_CLEAR_ERROR });
      dispatch({ type: AUTHENTICATE });
      const { data } = await authService.authenticate(email, password);
      const { token } = data;
      const decodedToken = JWT(token);

      dispatch({
        type: AUTHENTICATE_SUCCESS,
        payload: { username: decodedToken.sub, firstName: decodedToken['first name'], lastName: decodedToken['last name'], id: decodedToken.id, email: decodedToken.email },
      });

      localStorage.setItem('userToken', token);
      dispatch(push('/'));
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password.',
      });
    }
  };
}

export function logOut() {
  localStorage.clear();
  return {
    type: UNAUTHENTICATE,
  };
}

export function register(newUser) {
  return async dispatch => {
    try {
      dispatch({ type: REGISTER });
      await authService.register(newUser);
      dispatch({ type: REGISTER_SUCCESS });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: REGISTER_ERROR, payload: 'Error registering user.' });
    }
  };
}
