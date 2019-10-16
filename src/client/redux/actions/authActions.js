import { authService } from '../../services/AuthService/authService';
import { push } from 'connected-react-router';
import * as JWT from 'jwt-decode';

export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_CLEAR_ERROR = 'AUTHENTICATE_CLEAR_ERROR';

export const UNAUTHENTICATE = 'UNAUTHENTICATE';

export function authenticate(email, password) {
  return async dispatch => {
    try {
      dispatch({ type: AUTHENTICATE_CLEAR_ERROR });
      dispatch({ type: AUTHENTICATE });
      const { data } = await authService.authenticate(email, password);
      const { token } = data;
      const decodedToken = JWT(token);

      dispatch({
        type: AUTHENTICATE_SUCCESS,
        payload: { username: decodedToken.sub },
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
<<<<<<< Updated upstream
  localStorage.clear();
  return {
    type: UNAUTHENTICATE,
  };
=======
    localStorage.clear();
    return {
        type: UNAUTHENTICATE
    };
};

export function register(email, password) {
    return async (dispatch) => {
        try {
        } catch (error) {
        }
    };
>>>>>>> Stashed changes
}
