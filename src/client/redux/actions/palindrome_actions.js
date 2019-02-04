import axios from 'axios';
export const PALINDROME_RESULT = 'PALINDROME_RESULT';
export const API_PALINDROME = '/api/palindrome';

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
            // TODO: show the user what went wrong rather than logging it to the console.
            // for testing purposes:
            dispatch({
                type: PALINDROME_RESULT,
                isPalindrome: false
            });
        }
    };
