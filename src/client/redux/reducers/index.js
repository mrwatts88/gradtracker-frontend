import { combineReducers } from 'redux';

/* Import reducers and combine them below */
import concatenationReducer from './concatenation_reducer';
import palindromeReducer from './palindrome_reducer';
import mathematicsReducer from './mathematics_reducer';
import errorReducer from './error_reducer';

export default combineReducers({
    concatenationReducer,
    palindromeReducer,
    mathematicsReducer,
    errorReducer
});
