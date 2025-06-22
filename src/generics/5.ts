export function generics5() {
  enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }

  const RoleDescription: Record<UserRole, string> = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
  };

  return { UserRole, RoleDescription };
}
