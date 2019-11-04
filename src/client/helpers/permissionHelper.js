export function hasPermission(user, permission) {
  return (user.authorities || []).includes(permission);
}

export function hasPermissions(user, permissions) {
  for (const p of permissions) {
    if (!hasPermission(user, p)) return false;
  }

  return true;
}

export const permissions = {
  VIEW_ALL_SUBMISSIONS: 'VIEW_ALL_SUBMISSIONS',
  VIEW_SUBMISSION: 'VIEW_SUBMISSION',
  SUBMIT_FORM: 'SUBMIT_FORM',
  SUBMIT_FORM_DEF: 'SUBMIT_FORM_DEF',
  REGISTER_USER: 'REGISTER_USER',
  APPROVE_FORM_REQUEST: 'APPROVE_FORM_REQUEST',
  CREATE_FORM: 'CREATE_FORM',
};
