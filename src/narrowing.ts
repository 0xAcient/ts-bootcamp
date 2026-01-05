type AdminUser = {role: "admin"; permissions: string[]};
type RegularUser = {role: "user"; id: string};
type GuestUser = {role: "guest"};

type User = AdminUser | RegularUser | GuestUser;

export function describeUser(user: User): string {
  switch (user.role) {
    case "admin": 
      return `Admin permissions: ${user.permissions.join(", ")}`;
    case "user":
      return `User ID: ${user.id}`;

    case "guest":
      return "Guest user"
  }
    }


