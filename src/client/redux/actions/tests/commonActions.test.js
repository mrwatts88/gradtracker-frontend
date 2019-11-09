import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { dispatchType } from '../../actions/commonActions';
import { POST_FORM } from '../../actions/formActions';

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
    await store.dispatch(dispatchType(POST_FORM));
    expect(store.getActions().length).toEqual(1);
    expect(store.getActions()[0]).toEqual({ type: POST_FORM });
  });
});
