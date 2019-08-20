export const ITEM_HAS_ERRORED = 'ITEM_HAS_ERRORED';
export const REMOVE_ERROR = 'REMOVE_ERROR';

export const setError = (error) => {
    return {
        type: ITEM_HAS_ERRORED,
        error: error
    };
};

export const deleteError = () => {
    return {
        type: REMOVE_ERROR
    };
};

// const parseErrors = (err) => {
//     const information = err.response ? err.response : err;
//     let { status, data, statusText, errorType, link } = information;
//     errorType = errorType || err.errorType;

//     return { status, message: statusText || err.message, detail: data, errorType, link };
// };
