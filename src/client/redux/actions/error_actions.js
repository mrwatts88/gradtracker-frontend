export const ITEM_HAS_ERRORED = 'ITEM_HAS_ERRORED';
export const REMOVE_ERROR = 'REMOVE_ERROR';

export const setError = (error) => {
    return {
        type: ITEM_HAS_ERRORED,
        error
    };
};

export const deleteError = () => {
    return {
        type: REMOVE_ERROR
    };
};
