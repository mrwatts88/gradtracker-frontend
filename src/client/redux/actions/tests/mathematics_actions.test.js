import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ITEM_HAS_ERRORED } from '../error_actions';
import * as actions from '../mathematics_actions';

describe('Mathematics actions', () => {
    const mock = new MockAdapter(axios);
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    let store;
    beforeEach(() => {
        mock.reset();
        store = mockStore();
    });

    describe('executeAddition', () => {
        it('should handle success', async () => {
            const value1 = '1';
            const value2 = '3';
            const response = { value: '4' };
            mock.onGet(`${actions.API_MATHEMATICS}/add/${value1}/${value2}`).reply(200, JSON.stringify(response));
            const expectedAction = { type: actions.ADDITION_RESULT, addResult: response };

            await store.dispatch(actions.executeAddition(value1, value2));
            expect(store.getActions()[0]).toEqual(expectedAction);
            expect(store.getActions()[1].type).toEqual('@@router/CALL_HISTORY_METHOD');
        });

        it('should handle missing value', async () => {
            const value1 = '1';
            const value2 = '3';
            const response = { result: '4' };
            mock.onGet(`${actions.API_MATHEMATICS}/add/${value1}/${value2}`).reply(200, JSON.stringify(response));

            await store.dispatch(actions.executeAddition(value1, value2));
            expect(store.getActions()[0].type).toEqual('@@router/CALL_HISTORY_METHOD');
        });

        it('should handle errors', async () => {
            mock.onGet(`${actions.API_MATHEMATICS}/add`).reply(404);

            await store.dispatch(actions.executeAddition());
            expect(store.getActions()[0].type).toEqual(ITEM_HAS_ERRORED);
        });
    });
});
