import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { milestoneService, MILESTONE_DEF_URL } from './milestoneService';
import { authHeader } from '../../helpers/authHeader';
jest.mock('../../helpers/authHeader');

describe('milestoneService', () => {
  const testHeaders = {
    Authorization: 'testToken',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=utf-8',
  };

  authHeader.mockImplementation(() => testHeaders);
  const mock = new MockAdapter(axios);

  beforeEach(() => mock.reset());

  describe('postMilestone', () => {
    //   Shouldn't this be a post request?
    it('should post to correct url with correct body and headers', async () => {
      const testMilestone = { test: 'milestone' };
      mock.onPut(`${MILESTONE_DEF_URL}1`).reply(200);
      await milestoneService.postMilestone(1, testMilestone);
    });

    it('should throw error on axios bad response', async () => {
      const testMilestone = { test: 'milestone' };
      mock.onPost(`${MILESTONE_DEF_URL}1`).reply(500);

      await expect(milestoneService.postMilestone(1, testMilestone)).rejects.toThrow();

      expect(mock.history.put.length).toEqual(1);
      expect(mock.history.put[0].data).toEqual(JSON.stringify(testMilestone));
      expect(mock.history.put[0].url).toEqual(`${MILESTONE_DEF_URL}1`);
      expect(mock.history.put[0].headers).toEqual(testHeaders);
    });
  });

  describe('getAllMilestones', () => {
    it('should send get to correct url with and headers', async () => {
      const response = { milestones: [{ milestone: 'data' }] };
      mock.onGet(MILESTONE_DEF_URL).reply(200, JSON.stringify(response));

      const actualResponse = await milestoneService.getAllMilestones();

      expect(mock.history.get.length).toEqual(1);
      expect(mock.history.get[0].url).toEqual(MILESTONE_DEF_URL);
      expect(mock.history.get[0].headers).toEqual(testHeaders);
      expect(actualResponse.data).toEqual(response);
    });

    it('should throw error on axios bad response', async () => {
      mock.onGet(MILESTONE_DEF_URL).reply(500);

      await expect(milestoneService.getAllMilestones()).rejects.toThrow();

      expect(mock.history.get.length).toEqual(1);
      expect(mock.history.get[0].url).toEqual(MILESTONE_DEF_URL);
      expect(mock.history.get[0].headers).toEqual(testHeaders);
    });
  });

  describe('getMilestone', () => {
    it('should send get to correct url with and headers', async () => {
      const response = { milestone: 'data' };
      const id = 4;
      mock.onGet(`${MILESTONE_DEF_URL}${id}`).reply(200, JSON.stringify(response));

      const actualResponse = await milestoneService.getMilestone(id);

      expect(mock.history.get.length).toEqual(1);
      expect(mock.history.get[0].url).toEqual(`${MILESTONE_DEF_URL}${id}`);
      expect(mock.history.get[0].headers).toEqual(testHeaders);
      expect(actualResponse.data).toEqual(response);
    });

    it('should throw error on axios bad response', async () => {
      const id = 1;

      mock.onGet(`${MILESTONE_DEF_URL}${id}`).reply(500);

      await expect(milestoneService.getMilestone(id)).rejects.toThrow();

      expect(mock.history.get.length).toEqual(1);
      expect(mock.history.get[0].url).toEqual(`${MILESTONE_DEF_URL}${id}`);
      expect(mock.history.get[0].headers).toEqual(testHeaders);
    });
  });

  describe('deleteMilestone', () => {
    it('should send get to correct url with and headers', async () => {
      const id = 7;
      mock.onDelete(`${MILESTONE_DEF_URL}${id}`).reply(200);

      await milestoneService.deleteMilestone(id);

      expect(mock.history.delete.length).toEqual(1);
      expect(mock.history.delete[0].url).toEqual(`${MILESTONE_DEF_URL}${id}`);
      expect(mock.history.delete[0].headers).toEqual(testHeaders);
    });

    it('should throw error on axios bad response', async () => {
      const id = 1;
      mock.onDelete(MILESTONE_DEF_URL).reply(500);

      await expect(milestoneService.deleteMilestone(id)).rejects.toThrow();

      expect(mock.history.delete.length).toEqual(1);
      expect(mock.history.delete[0].url).toEqual(`${MILESTONE_DEF_URL}${id}`);
      expect(mock.history.delete[0].headers).toEqual(testHeaders);
    });
  });
});
