import axios from 'axios';
import { setError } from './error_actions';
import { push } from 'connected-react-router';
export const ADDITION_RESULT = 'ADDITION_RESULT';
export const API_MATHEMATICS = `${CONTEXT_ROOT}/api/mathematics`;

export const executeAddition = (val1, val2) =>
    async dispatch => {
        try {
            const { data } = await axios.get(`${API_MATHEMATICS}/add/${val1}/${val2}`);
            if (data.value) {
                dispatch({
                    type: ADDITION_RESULT,
                    addResult: data
                });
            }
            dispatch(push('/'));
        } catch (err) {
            dispatch(setError());
        }
    };
