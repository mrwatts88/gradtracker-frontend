import axios from 'axios';
import { setError } from './error_actions';
export const PALINDROME_RESULT = 'PALINDROME_RESULT';
export const API_PALINDROME = `${CONTEXT_ROOT}/api/palindrome`;

export const checkPalindrome = (val) =>
    async dispatch => {
        try {
            const value = encodeURI(val);
            const result = await axios.get(`${API_PALINDROME}/${value}`);
            if (result.data) {
                dispatch({
                    type: PALINDROME_RESULT,
                    isPalindrome: result.data.result
                });
            }
        } catch (err) {
            dispatch(setError(err));
            // for testing purposes:
            dispatch({
                type: PALINDROME_RESULT,
                isPalindrome: false
            });
        }
    };
