import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import errorReducer from './error_reducer';
import authReducer from './authReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    errorReducer,
    authReducer
});

export default createRootReducer;
