import { authService } from '../../services/AuthService/authService';
import { push } from 'connected-react-router';
export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const API_LOGIN = `${CONTEXT_ROOT}/api/login`;

export function logIn({ email, password }) {
    return async (dispatch) => {
        try {
            const { data } = await authService.logIn({ email, password });
            dispatch({ type: AUTHENTICATE, payload: data.user });
            localStorage.setItem('userToken', data.token);
            dispatch(push('/'));
        } catch (error) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: 'Invalid email or password'
            });
        }
    };
}

export function signOut() {
    localStorage.clear();
    return {
        type: UNAUTHENTICATE
    };
};
