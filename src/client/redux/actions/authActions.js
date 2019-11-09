import { authService } from '../../services/AuthService/authService';
import { push } from 'connected-react-router';
import * as JWT from 'jwt-decode';

export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const CLEAR_AUTHENTICATE_STATUS = 'CLEAR_AUTHENTICATE_STATUS';

export const UNAUTHENTICATE = 'UNAUTHENTICATE';

export const REGISTER = 'REGISTER';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const CLEAR_REGISTER_STATUS = 'CLEAR_REGISTER_STATUS';

export function authenticate(email, password) {
  return async dispatch => {
    try {
      dispatch({ type: CLEAR_AUTHENTICATE_STATUS });
      dispatch({ type: AUTHENTICATE });
      const { data } = await authService.authenticate(email, password);
      const { token } = data;
      const decodedToken = JWT(token);

      dispatch({
        type: AUTHENTICATE_SUCCESS,
        payload: { user: JSON.parse(decodedToken.sub) },
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
      dispatch({ type: CLEAR_REGISTER_STATUS });
      dispatch({ type: REGISTER });
      await authService.register(newUser);
      dispatch({ type: REGISTER_SUCCESS });
    } catch (error) {
      if (error && error.response && error.response.status === 403) dispatch(logOut());
      dispatch({ type: REGISTER_ERROR, payload: 'Error registering user.' });
    }
  };
}
