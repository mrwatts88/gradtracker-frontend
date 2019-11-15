import { hasAllPermissions } from './permissionHelper';

describe('hasAllPermissions', () => {
  it('returns correct boolean', () => {
    const user = {
      authorities: ['test'],
    };

    const permissionsNeeded = ['test'];

    let result = hasAllPermissions(user, permissionsNeeded);
    expect(result).toBeTruthy();

    user.authorities = [];
    result = hasAllPermissions(user, permissionsNeeded);
    expect(result).toEqual(false);
  });
});
