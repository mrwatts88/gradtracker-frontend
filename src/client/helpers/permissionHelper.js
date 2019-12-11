export function hasPermission(user, permission) {
  if (!user) return false;
  return (user.authorities || []).includes(permission);
}

export function hasAllPermissions(user, userPermissions) {
  if (!user) return false;
  for (const p of userPermissions || []) {
    if (!hasPermission(user, p)) return false;
  }

  return true;
}

export function hasAnyPermission(user, userPermissions) {
  if (!user) return false;
  for (const p of userPermissions || []) {
    if (hasAllPermissions(user, [p])) return true;
  }
  return false;
}

export const permissions = {
  DELETE_ROLE: 'DELETE_ROLE',
  UPDATE_FORM_DEF: 'UPDATE_FORM_DEF',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_ROLE: 'UPDATE_ROLE',
  CREATE_ROLE: 'CREATE_ROLE',
  CREATE_FORM_DEF: 'CREATE_FORM_DEF',
  CREATE_USER: 'CREATE_USER',
  READ_ALL_FORMS: 'READ_ALL_FORMS',
  DELETE_FORM_DEF: 'DELETE_FORM_DEF',
  READ_ALL_USERS: 'READ_ALL_USERS',
  DELETE_USER: 'DELETE_USER',

  APPROVE_FORM: 'APPROVE_FORM',
};
