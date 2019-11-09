import { hasAnyPermissions } from './permissionHelper';

describe('hasPermissions', () => {
  it('returns correct boolean', () => {
    const user = {
      authorities: ['test'],
    };

    const permissionsNeeded = ['test'];

    let result = hasAnyPermissions(user, permissionsNeeded);
    expect(result).toBeTruthy();

    user.authorities = [];
    result = hasPermissions(user, permissionsNeeded);
    expect(result).toEqual(false);
  });
});
