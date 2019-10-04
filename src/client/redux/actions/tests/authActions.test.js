import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../actions/authActions';
import { authService } from '../../../services';

describe('User actions', () => {
    const mock = new MockAdapter(axios);
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    let store;
    beforeEach(() => {
        mock.reset();
        store = mockStore();
    });

    describe('logIn', () => {
        it('should handle success', async () => { });

        it('should handle errors', async () => {
            authService.logIn = jest.fn(() => {
                return Promise.reject(new Error('error'));
            });

            const expectedAction = {
                type: actions.AUTHENTICATION_ERROR,
                payload: 'Invalid email or password'
            };

            await store.dispatch(actions.logIn('email', 'password'));
            expect(store.getActions()[0]).toEqual(expectedAction);
        });
    });

    describe('logOut', () => {
        it('returns action with currentUser undefined', () => {
            const expectedAction = { type: actions.UNAUTHENTICATE };
            store.dispatch(actions.logOut());
            expect(store.getActions()[0]).toEqual(expectedAction);
        });
    });
});
