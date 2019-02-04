import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../palindrome_actions';

describe('Palindrome actions', () => {
    const mock = new MockAdapter(axios);
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    let store;
    beforeEach(() => {
        mock.reset();
        store = mockStore();
    });

    describe('checkPalindrome', () => {
        it('should handle success', async () => {
            const value = 'test';
            mock.onGet(`${actions.API_PALINDROME}/${value}`).reply(200, {result: true});
            const expectedActions = [
                {isPalindrome: true, type: actions.PALINDROME_RESULT}
            ];

            await store.dispatch(actions.checkPalindrome(value));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle false', async () => {
            const value = 'test';
            mock.onGet(`${actions.API_PALINDROME}/${value}`).reply(200, {result: false});
            const expectedActions = [
                {isPalindrome: false, type: actions.PALINDROME_RESULT}
            ];

            await store.dispatch(actions.checkPalindrome(value));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle errors', async () => {
            mock.onGet(`${actions.API_PALINDROME}/test`).reply(404, {result: false});
            const expectedActions = [
                {isPalindrome: false, type: actions.PALINDROME_RESULT}
            ];

            await store.dispatch(actions.checkPalindrome());
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
