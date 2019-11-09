export function hasPermission(user, permission) {
  if (!user) return false;
  return (user.authorities || []).includes(permission);
}

export function hasAllPermissions(user, permissions) {
  if (!user) return false;
  for (const p of permissions || []) {
    if (!hasPermission(user, p)) return false;
  }

  return true;
}

export function hasAnyPermission(user, permissions) {
  if (!user) return false;
  for (const p of permissions || []) {
    if (hasAllPermissions(user, p)) return true;
  }
  return false;
}

export const permissions = {
  CREATE_FORM: 'CREATE_FORM',
  CREATE_FORM_DEF: 'CREATE_FORM_DEF',
  CREATE_USER: 'CREATE_USER',
  CREATE_ROLE: 'CREATE_ROLE',
  READ_FORM_DEFS: 'READ_FORM_DEFS',
  READ_USER_FORMS: 'READ_USER_FORMS',
  READ_USERS: 'READ_USERS',
  READ_DEFS: 'READ_DEFS',
  REVISE_FORM_DEF: 'REVISE_FORM_DEF',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_ROLE: 'UPDATE_ROLE',
  DELETE_ROLE: 'DELETE_ROLE',
  APPROVE_FORM: 'APPROVE_FORM',
};
