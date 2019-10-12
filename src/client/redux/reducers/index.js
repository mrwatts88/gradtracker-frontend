import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import errorReducer from './error_reducer';
import authReducer from './authReducer';
import formReducer from './formReducer';
import formDefReducer from './formDefReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    errorReducer,
    authReducer,
    formReducer
});

export default createRootReducer;
