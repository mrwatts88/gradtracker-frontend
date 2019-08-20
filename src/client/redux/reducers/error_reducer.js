import { ITEM_HAS_ERRORED, REMOVE_ERROR } from '../actions/error_actions';

const initialState = {};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_HAS_ERRORED:
            console.log('in reducer', action.error);
            return { ...state, error: action.error };
        case REMOVE_ERROR:
            return { initialState };
        default:
            return state;
    };
};

export default errorReducer;
