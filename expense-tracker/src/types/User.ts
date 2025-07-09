export type User = {
    id: string;
    email: string;
    password: string;
}

export const DEFAULT_USERS: User[] = [
    { id: "1", email: "john@email.com", password: "password123"},
    { id: "2", email: "jane@email.com", password: "password456"},
];