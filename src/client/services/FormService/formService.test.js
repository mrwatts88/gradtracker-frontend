import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { formService, FORM_URL } from './formService';
import { authHeader } from '../../helpers/authHeader';
import { transformForm } from '../../helpers/transformForm';
jest.mock('../../helpers/authHeader');
jest.mock('../../helpers/transformForm');

describe('formService', () => {
  const testHeaders = {
    Authorization: 'testToken',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=utf-8'
  };

  authHeader.mockImplementation(() => testHeaders);
  transformForm.mockImplementation(() => ({
    test: 'form'
  }));

  const mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.reset();
  });

  describe('postForm', () => {
    it('makes a post to the API_FORM url', async () => {
      mock.onPost(FORM_URL).reply(200, { test: 'response' });

      const response = await formService.postForm({ test: 'form' });

      expect(mock.history.post.length).toEqual(1);
      expect(mock.history.post[0].data).toEqual(JSON.stringify({ test: 'form' }));
      expect(mock.history.post[0].url).toEqual(FORM_URL);
      expect(response.data).toEqual({ test: 'response' });
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

  describe('putForm', () => {
    it('makes a put to the API_FORM url', async () => {
      mock.onPut(`${FORM_URL}1`).reply(200, { test: 'response' });

      const response = await formService.putForm({ test: 'form', id: 1 });

      expect(mock.history.put.length).toEqual(1);
      expect(mock.history.put[0].data).toEqual(JSON.stringify({ test: 'form' }));
      expect(mock.history.put[0].url).toEqual(`${FORM_URL}1`);
      expect(response.data).toEqual({ test: 'response' });
    });
  });

  it('should throw error on axios bad response', async () => {
    const testForm = { test: 'form', id: 1 };
    mock.onPut(`${FORM_URL}1`).reply(500);

    await expect(formService.putForm(testForm)).rejects.toThrow();

    expect(mock.history.put.length).toEqual(1);
    expect(mock.history.put[0].data).toEqual(JSON.stringify({ test: 'form' }));
    expect(mock.history.put[0].url).toEqual(`${FORM_URL}1`);
    expect(mock.history.put[0].headers).toEqual(testHeaders);
  });

  describe('getAllFormSubsByUser', () => {
    it('makes a get to the API_FORM url', async () => {
      mock.onGet(`${FORM_URL}user/1`).reply(200, { test: 'response' });

      const response = await formService.getAllFormSubsByUser(1);

      expect(mock.history.get.length).toEqual(1);
      expect(mock.history.get[0].url).toEqual(`${FORM_URL}user/1`);
      expect(response.data).toEqual({ test: 'response' });
    });
  });

  it('should throw error on axios bad response', async () => {
    mock.onGet(`${FORM_URL}1`).reply(500);

    await expect(formService.getAllFormSubsByUser(1)).rejects.toThrow();

    expect(mock.history.get.length).toEqual(1);
    expect(mock.history.get[0].url).toEqual(`${FORM_URL}user/1`);
    expect(mock.history.get[0].headers).toEqual(testHeaders);
  });
});
