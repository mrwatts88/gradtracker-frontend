import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

/* Import reducers and combine them below */
import concatenationReducer from './concatenation_reducer';
import mathematicsReducer from './mathematics_reducer';
import errorReducer from './error_reducer';
import authReducer from './authReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    concatenationReducer,
    mathematicsReducer,
    errorReducer,
    authReducer
});

export default createRootReducer;
