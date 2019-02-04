import axios from 'axios';
export const CONCATENATION_RESULT = 'CONCATENATION_RESULT';
export const API_CONCAT = '/api/concatenate';

export const createConcatenation = (val1, val2) =>
    async dispatch => {
        try {
            const value1 = encodeURI(val1);
            const value2 = encodeURI(val2);
            const result = await axios.get(`${API_CONCAT}/${value1}/${value2}`);
            if (result.data) {
                dispatch({
                    type: CONCATENATION_RESULT,
                    concatValue: result.data
                });
            }
        } catch (err) {
            // TODO: show the user what went wrong rather than logging it to the console.
        }
    };
