import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from './authReducer';
import formReducer from './formReducer';
import formDefReducer from './formDefReducer';
import milestoneReducer from './milestoneReducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    formReducer,
    formDefReducer,
    milestoneReducer,
  });

export default createRootReducer;
