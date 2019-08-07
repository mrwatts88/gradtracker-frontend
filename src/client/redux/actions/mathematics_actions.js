import axios from 'axios';
export const ADDITION_RESULT = 'ADDITION_RESULT';
export const SUBTRACTION_RESULT = 'SUBTRACTION_RESULT';
export const DIVISION_RESULT = 'DIVISION_RESULT';
export const MULTIPLICATION_RESULT = 'MULTIPLICATION_RESULT';
export const SQUARE_RESULT = 'SQUARE_RESULT';
export const API_MATHEMATICS = '/api/mathematics';

export const executeAddition = (val1, val2) =>
    async dispatch => {
        try {
            const result = await axios.get(`${API_MATHEMATICS}/add/${val1}/${val2}`);
            if (result.data) {
                dispatch({
                    type: ADDITION_RESULT,
                    addResult: result.data
                });
            }
        } catch (err) {
            // TODO: show the user what went wrong rather than logging it to the console.
        }
    };
export const executeSubtraction = (val1, val2) =>
    async dispatch => {
        try {
            const result = await axios.get(`${API_MATHEMATICS}/subtract/${val1}/${val2}`);
            if (result.data) {
                dispatch({
                    type: SUBTRACTION_RESULT,
                    subtractResult: result.data
                });
            }
        } catch (err) {
            // TODO: show the user what went wrong rather than logging it to the console.
        }
    };
export const executeMultiplication = (val1, val2) =>
    async dispatch => {
        try {
            const result = await axios.get(`${API_MATHEMATICS}/multiply/${val1}/${val2}`);
            if (result.data) {
                dispatch({
                    type: MULTIPLICATION_RESULT,
                    multiplyResult: result.data
                });
            }
        } catch (err) {
            // TODO: show the user what went wrong rather than logging it to the console.
        }
    };
export const executeDivision = (val1, val2) =>
    async dispatch => {
        try {
            const result = await axios.get(`${API_MATHEMATICS}/divide/${val1}/${val2}`);
            if (result.data) {
                dispatch({
                    type: DIVISION_RESULT,
                    divideResult: result.data
                });
            }
        } catch (err) {
            // TODO: show the user what went wrong rather than logging it to the console.
        }
    };
export const executeSquare = (val1) =>
    async dispatch => {
        try {
            const result = await axios.get(`${API_MATHEMATICS}/squareRoot/${val1}`);
            if (result.data) {
                dispatch({
                    type: SQUARE_RESULT,
                    squareResult: result.data
                });
            }
        } catch (err) {
            // TODO: show the user what went wrong rather than logging it to the console.
        }
    };