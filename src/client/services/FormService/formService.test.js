import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { formService, FORM_URL } from './formService';
import { authHeader } from '../../helpers/authHeader';
jest.mock('../../helpers/authHeader');

describe('formService', () => {
  const testHeaders = {
    Authorization: 'testToken',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=utf-8',
  };

  authHeader.mockImplementation(() => testHeaders);

  const mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset();
  });

  describe('postForm', () => {
    it('makes a post to the API_FORM url', async () => {
      mock.onPost(FORM_URL).reply(200, { test: 'response' });

      await formService.postForm({ test: 'form' });

      expect(mock.history.post.length).toEqual(1);
      expect(mock.history.post[0].data).toEqual(JSON.stringify({ test: 'form' }));
      expect(mock.history.post[0].url).toEqual(FORM_URL);
    });
  });

  it('should throw error on axios bad response', async () => {
    const testForm = { test: 'form' };
    mock.onPost(FORM_URL).reply(500);

    await expect(formService.postForm(testForm)).rejects.toThrow();

    expect(mock.history.post.length).toEqual(1);
    expect(mock.history.post[0].data).toEqual(JSON.stringify(testForm));
    expect(mock.history.post[0].url).toEqual(FORM_URL);
    expect(mock.history.post[0].headers).toEqual(testHeaders);
  });
});
