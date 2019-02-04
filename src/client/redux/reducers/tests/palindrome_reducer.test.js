import palindromeReducer from '../palindrome_reducer';
import { PALINDROME_RESULT } from '../../actions/palindrome_actions';

describe('Palindrome Reducer', () => {
    it('should return the initial state', () => {
        expect(palindromeReducer(undefined, {})).toEqual({});
    });

    it('should set the isPalindrom value', () => {
        expect(palindromeReducer({}, {type: PALINDROME_RESULT, isPalindrome: true})).toEqual({isPalindrome: 'true'});
    });
});
