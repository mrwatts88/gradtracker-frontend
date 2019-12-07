import { hasAllPermissions, hasAnyPermission } from './permissionHelper';


describe('Permission Helper', () => {

  describe('hasAllPermissions', () => {
    it('returns correct boolean', () => {
      const user = {
        authorities: ['test', 'test1', 'test2'],
      };

      const permissionsNeeded = ['test', 'test1'];

      let result = hasAllPermissions(user, permissionsNeeded);
      expect(result).toBeTruthy();

      user.authorities = ['test'];
      result = hasAllPermissions(user, permissionsNeeded);
      expect(result).toEqual(false);
    });


  });
  describe('hasAnyPermission', () => {
    it('returns correct boolean', () => {
      const user = {
        authorities: ['test'],
      };

      const permissionsNeeded = ['test'];

      let result = hasAnyPermission(user, permissionsNeeded);
      expect(result).toBeTruthy();

      user.authorities = [];
      result = hasAnyPermission(user, permissionsNeeded);
      expect(result).toEqual(false);
    });
  });
});
