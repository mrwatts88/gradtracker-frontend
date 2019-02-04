import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../concatenation_actions';

describe('Concatenation actions', () => {
    const mock = new MockAdapter(axios);
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    let store;
    beforeEach(() => {
        mock.reset();
        store = mockStore();
    });

    describe('createConcatenation', () => {
        it('should handle success', async () => {
            const value = 'test';
            mock.onGet(`${actions.API_CONCAT}/${value}/${value}`).reply(200, `${value}${value}`);
            const expectedActions = [
                {concatValue: `${value}${value}`, type: actions.CONCATENATION_RESULT}
            ];

            await store.dispatch(actions.createConcatenation(value, value));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle errors', async () => {
            mock.onGet(`${actions.API_CONCAT}/test`).reply(404);

            await store.dispatch(actions.createConcatenation());
            expect(store.getActions()).toEqual([]);
        });
    });
});
