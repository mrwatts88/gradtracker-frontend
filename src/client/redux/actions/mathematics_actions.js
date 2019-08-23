import axios from 'axios';
import { setError } from './error_actions';
export const ADDITION_RESULT = 'ADDITION_RESULT';
export const SUBTRACTION_RESULT = 'SUBTRACTION_RESULT';
export const DIVISION_RESULT = 'DIVISION_RESULT';
export const MULTIPLICATION_RESULT = 'MULTIPLICATION_RESULT';
export const SQUARE_RESULT = 'SQUARE_RESULT';
export const API_MATHEMATICS = '/api/mathematics';

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
        } catch (err) {
            dispatch(setError());
        }
    };
export const executeSubtraction = (val1, val2) =>
    async dispatch => {
        try {
            const { data } = await axios.get(`${API_MATHEMATICS}/subtract/${val1}/${val2}`);
            if (data.value) {
                dispatch({
                    type: SUBTRACTION_RESULT,
                    subtractResult: data
                });
            }
        } catch (err) {
            dispatch(setError());
        }
    };
export const executeMultiplication = (val1, val2) =>
    async dispatch => {
        try {
            const { data } = await axios.get(`${API_MATHEMATICS}/multiply/${val1}/${val2}`);
            if (data.value) {
                dispatch({
                    type: MULTIPLICATION_RESULT,
                    multiplyResult: data
                });
            }
        } catch (err) {
            dispatch(setError());
        }
    };
export const executeDivision = (val1, val2) =>
    async dispatch => {
        try {
            const { data } = await axios.get(`${API_MATHEMATICS}/divide/${val1}/${val2}`);
            if (data.value) {
                dispatch({
                    type: DIVISION_RESULT,
                    divideResult: data
                });
            }
        } catch (err) {
            dispatch(setError());
        }
    };

export const executeSquare = (val1) =>
    async dispatch => {
        try {
            const { data } = await axios.get(`${API_MATHEMATICS}/squareRoot/${val1}`);
            if (data.value) {
                dispatch({
                    type: SQUARE_RESULT,
                    squareResult: data
                });
            }
        } catch (err) {
            dispatch(setError());
        }
    };
