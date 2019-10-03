import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../actions/formActions';
import { formService } from '../../../services';

describe('User actions', () => {
    const mock = new MockAdapter(axios);
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    let store;
    beforeEach(() => {
        mock.reset();
        store = mockStore();
    });

    describe('submitForm', () => {
        it('should handle success', async () => {
            formService.submitForm = jest.fn(() => {
                return Promise.resolve({});
            });

            await store.dispatch(actions.submitForm({}));
            expect(store.getActions().length).toEqual(2);
            expect(store.getActions()[0]).toEqual({ type: actions.FORM_SUBMITTING });
            expect(store.getActions()[1]).toEqual({ type: actions.FORM_SUBMIT_SUCCESS });
            expect(formService.submitForm).toBeCalled();
        });

        it('should handle errors', async () => {
            formService.submitForm = jest.fn(() => {
                return Promise.reject(new Error('error'));
            });

            const expectedAction = {
                type: actions.FORM_SUBMIT_ERROR,
                payload: 'Error Submitting Form!'
            };

            await store.dispatch(actions.submitForm({}));
            expect(store.getActions().length).toEqual(2);
            expect(store.getActions()[0]).toEqual({ type: actions.FORM_SUBMITTING });
            expect(store.getActions()[1]).toEqual(expectedAction);
            expect(formService.submitForm).toBeCalled();
        });
    });
});
