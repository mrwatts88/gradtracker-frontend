import { authService } from '../../services/AuthService/authService';
import { push } from 'connected-react-router';
import * as JWT from 'jwt-decode';
export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';

export function logIn(email, password) {
    return async (dispatch) => {
        try {
            const { data } = await authService.logIn(email, password);
            const { token } = data;
            const decodedToken = JWT(token);
            dispatch({ type: AUTHENTICATE, payload: { username: decodedToken.sub } });
            localStorage.setItem('userToken', data.token);
            dispatch(push('/'));
        } catch (error) {
            dispatch(logOut());
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: 'Invalid email or password'
            });
        }
    };
}

export function logOut() {
    localStorage.clear();
    return {
        type: UNAUTHENTICATE
    };
};
