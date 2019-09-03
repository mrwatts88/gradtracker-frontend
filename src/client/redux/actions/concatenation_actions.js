import axios from 'axios';
import { setError } from './error_actions';
export const CONCATENATION_RESULT = 'CONCATENATION_RESULT';
export const API_CONCAT = `${CONTEXT_ROOT}/api/concatenate`;

export const createConcatenation = (val1, val2) =>
    async dispatch => {
        try {
            const value1 = encodeURI(val1);
            const value2 = encodeURI(val2);
            const { data } = await axios.get(`${API_CONCAT}/${value1}/${value2}`);
            if (data.result) {
                dispatch({
                    type: CONCATENATION_RESULT,
                    concatValue: data.result
                });
            }
        } catch (err) {
            dispatch(setError(err));
        }
    };
