import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { clearErrors } from '../../actions/commonActions';
import { AUTH_CLEAR_ERROR } from '../../actions/authActions';
import { FORM_CLEAR_ERROR } from '../../actions/formActions';
import { FORM_DEF_CLEAR_ERROR } from '../../actions/formDefActions';

describe('commonActions', () => {
  const mock = new MockAdapter(axios);
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  let store;
  beforeEach(() => {
    mock.reset();
    store = mockStore();
  });

  it('should dispatch correct actions', async () => {
    await store.dispatch(clearErrors());
    expect(store.getActions().length).toEqual(3);
    expect(store.getActions()[0]).toEqual({ type: AUTH_CLEAR_ERROR });
    expect(store.getActions()[1]).toEqual({ type: FORM_CLEAR_ERROR });
    expect(store.getActions()[2]).toEqual({ type: FORM_DEF_CLEAR_ERROR });
  });
});
