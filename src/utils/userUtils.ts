import { Admin, AppUser, User } from '../model/user';

/**
 * isAdmin a function to check is the passing user obect is an Admin
 */
export function isAdmin(u: AppUser): u is Admin {
  if ('role' in u) {
    return u.role === 'admin';
  }

  return false;
}

/**
 * displayUser a function returns a string depending on the kind of user passed in
 */
export function displayUser(u: AppUser): string {
  if (isAdmin(u)) {
    return `Admin: ${u.name} (permissions: ${u.permissions.join(', ')})`;
  }

  if ('id' in u && 'createdAt' in u) {
    return `User: ${u.name} (id: ${u.id})`;
  }

  return `Guest: ${u.name} (no account)`;
}

/**
 * makeUser is a function that returns a user object
 */
export function makeUser(id: string, name: string, email: string): User {
  const newUser: User = {
    id,
    name,
    email,
    createdAt: new Date(),
  };

  return newUser;
}
