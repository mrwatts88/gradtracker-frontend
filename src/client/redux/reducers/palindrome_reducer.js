import { PALINDROME_RESULT } from '../actions/palindrome_actions';

const initialState = {};
const palindromeReducer = (state = initialState, action) => {
    switch (action.type) {
        case PALINDROME_RESULT:
            return {...state, isPalindrome: `${action.isPalindrome}`};
        default:
            return state;
    }
};

export default palindromeReducer;
