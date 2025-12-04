export interface User {
    readonly id: string;
    name: string;
    email?: string;
    readonly createdAt: Date;
}

export interface Admin extends User {
    role: 'admin';
    permissions: string[];
}

export type Guest = {name: string};
export type AppUser = User | Admin | Guest;
