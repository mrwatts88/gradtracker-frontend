import * as actions from '../actions/error_actions';

const initialState = {};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ITEM_HAS_ERRORED:
            return { ...state, error: action.error };
        case actions.REMOVE_ERROR:
            return { initialState };
        default:
            return state;
    };
};

export default errorReducer;
