import { authHeader } from './authHeader';

describe('authHeader', () => {
  it('returns auth in header when JWT is in local storage', () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    const header = authHeader();
    expect(header).toEqual({ Authorization: 'token' });
    Storage.prototype.getItem = jest.fn();
  });

  it('returns an empty object when there is no JWT in local storage', () => {
    const header = authHeader();
    expect(header).toEqual({});
  });
});
