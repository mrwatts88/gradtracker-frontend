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
            const expectedActions = [{ type: actions.ADDITION_RESULT, addResult: response }];

            await store.dispatch(actions.executeAddition(value1, value2));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle errors', async () => {
            mock.onGet(`${actions.API_MATHEMATICS}/add`).reply(404);

            await store.dispatch(actions.executeAddition());
            expect(store.getActions()[0].type).toEqual(ITEM_HAS_ERRORED);
        });
    });

    describe('executeSubtraction', () => {
        it('should handle success', async () => {
            const value1 = '5';
            const value2 = '2';
            const response = { value: '3' };
            mock.onGet(`${actions.API_MATHEMATICS}/subtract/${value1}/${value2}`).reply(200, JSON.stringify(response));
            const expectedActions = [{ type: actions.SUBTRACTION_RESULT, subtractResult: response }];

            await store.dispatch(actions.executeSubtraction(value1, value2));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle errors', async () => {
            mock.onGet(`${actions.API_MATHEMATICS}/subtract`).reply(404);

            await store.dispatch(actions.executeSubtraction());
            expect(store.getActions()[0].type).toEqual(ITEM_HAS_ERRORED);
        });
    });

    describe('executeMultiplication', () => {
        it('should handle success', async () => {
            const value1 = '5';
            const value2 = '2';
            const response = { value: '10' };
            mock.onGet(`${actions.API_MATHEMATICS}/multiply/${value1}/${value2}`).reply(200, JSON.stringify(response));
            const expectedActions = [{ type: actions.MULTIPLICATION_RESULT, multiplyResult: response }];

            await store.dispatch(actions.executeMultiplication(value1, value2));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle errors', async () => {
            mock.onGet(`${actions.API_MATHEMATICS}/multiply`).reply(404);

            await store.dispatch(actions.executeMultiplication());
            expect(store.getActions()[0].type).toEqual(ITEM_HAS_ERRORED);
        });
    });

    describe('executeDivision', () => {
        it('should handle success', async () => {
            const value1 = '6';
            const value2 = '2';
            const response = { value: '3' };
            mock.onGet(`${actions.API_MATHEMATICS}/divide/${value1}/${value2}`).reply(200, JSON.stringify(response));
            const expectedActions = [{ type: actions.DIVISION_RESULT, divideResult: response }];

            await store.dispatch(actions.executeDivision(value1, value2));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle errors', async () => {
            mock.onGet(`${actions.API_MATHEMATICS}/divide`).reply(404);

            await store.dispatch(actions.executeDivision());
            expect(store.getActions()[0].type).toEqual(ITEM_HAS_ERRORED);
        });
    });

    describe('executeSquare', () => {
        it('should handle success', async () => {
            const value1 = '6';
            const response = { value: '36' };
            mock.onGet(`${actions.API_MATHEMATICS}/squareRoot/${value1}`).reply(200, JSON.stringify(response));
            const expectedActions = [{ type: actions.SQUARE_RESULT, squareResult: response }];

            await store.dispatch(actions.executeSquare(value1));
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle errors', async () => {
            mock.onGet(`${actions.API_MATHEMATICS}/squareRoot`).reply(404);

            await store.dispatch(actions.executeSquare());
            expect(store.getActions()[0].type).toEqual(ITEM_HAS_ERRORED);
        });
    });
});
