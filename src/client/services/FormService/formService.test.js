import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { formService, FORM_URL } from './formService';

describe('formService', () => {
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
});
