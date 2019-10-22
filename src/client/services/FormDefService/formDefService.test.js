import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { formDefService, FORM_DEF_URL } from './formDefService';
import { authHeader } from '../../helpers/authHeader';
jest.mock('../../helpers/authHeader');

describe('formDefService', () => {
  const testHeaders = {
    Authorization: 'testToken',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=utf-8',
  };

  authHeader.mockImplementation(() => testHeaders);
  const mock = new MockAdapter(axios);

  beforeEach(() => mock.reset());

  describe('postFormDef', () => {
    it('should post to correct url with correct body and headers', async () => {
      const testFormDef = { test: 'formDef' };
      mock.onPost(FORM_DEF_URL).reply(200);
      await formDefService.postFormDef(testFormDef);
    });

    it('should throw error on axios bad response', async () => {
      const testFormDef = { test: 'formDef' };
      mock.onPost(FORM_DEF_URL).reply(500);

      await expect(formDefService.postFormDef(testFormDef)).rejects.toThrow();

      expect(mock.history.post.length).toEqual(1);
      expect(mock.history.post[0].data).toEqual(JSON.stringify(testFormDef));
      expect(mock.history.post[0].url).toEqual(FORM_DEF_URL);
      expect(mock.history.post[0].headers).toEqual(testHeaders);
    });
  });

  describe('getAllFormDefs', () => {
    it('should send get to correct url with and headers', async () => {
      const response = { formDefs: [{ formDef: 'data' }] };
      mock.onGet(FORM_DEF_URL).reply(200, JSON.stringify(response));

      const actualResponse = await formDefService.getAllFormDefs();

      expect(mock.history.get.length).toEqual(1);
      expect(mock.history.get[0].url).toEqual(FORM_DEF_URL);
      expect(mock.history.get[0].headers).toEqual(testHeaders);
      expect(actualResponse.data).toEqual(response);
    });

    it('should throw error on axios bad response', async () => {
      mock.onGet(FORM_DEF_URL).reply(500);

      await expect(formDefService.getAllFormDefs()).rejects.toThrow();

      expect(mock.history.get.length).toEqual(1);
      expect(mock.history.get[0].url).toEqual(FORM_DEF_URL);
      expect(mock.history.get[0].headers).toEqual(testHeaders);
    });
  });

  describe('getFormDef', () => {
    it('should send get to correct url with and headers', async () => {
      const response = { formDef: 'data' };
      const id = 7;
      mock.onGet(`${FORM_DEF_URL}${id}`).reply(200, JSON.stringify(response));

      const actualResponse = await formDefService.getFormDef(id);

      expect(mock.history.get.length).toEqual(1);
      expect(mock.history.get[0].url).toEqual(`${FORM_DEF_URL}${id}`);
      expect(mock.history.get[0].headers).toEqual(testHeaders);
      expect(actualResponse.data).toEqual(response);
    });

    it('should throw error on axios bad response', async () => {
      const id = 1;

      mock.onGet(`${FORM_DEF_URL}${id}`).reply(500);

      await expect(formDefService.getFormDef(1)).rejects.toThrow();

      expect(mock.history.get.length).toEqual(1);
      expect(mock.history.get[0].url).toEqual(`${FORM_DEF_URL}${id}`);
      expect(mock.history.get[0].headers).toEqual(testHeaders);
    });
  });

  describe('deleteFormDef', () => {
    it('should send get to correct url with and headers', async () => {
      const id = 7;
      mock.onDelete(`${FORM_DEF_URL}${id}`).reply(200);

      await formDefService.deleteFormDef(id);

      expect(mock.history.delete.length).toEqual(1);
      expect(mock.history.delete[0].url).toEqual(`${FORM_DEF_URL}${id}`);
      expect(mock.history.delete[0].headers).toEqual(testHeaders);
    });

    it('should throw error on axios bad response', async () => {
      const id = 1;
      mock.onDelete(FORM_DEF_URL).reply(500);

      await expect(formDefService.deleteFormDef(id)).rejects.toThrow();

      expect(mock.history.delete.length).toEqual(1);
      expect(mock.history.delete[0].url).toEqual(`${FORM_DEF_URL}${id}`);
      expect(mock.history.delete[0].headers).toEqual(testHeaders);
    });
  });
});
