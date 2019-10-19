import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './authReducer';
import formReducer from './formReducer';
import formDefReducer from './formDefReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    formReducer,
    formDefReducer,
  });

export default createRootReducer;
