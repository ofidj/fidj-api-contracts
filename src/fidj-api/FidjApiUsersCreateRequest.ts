// POST /users
export interface FidjApiUsersCreateRequest {
    username: string;
    name: string;
    password: string;
    email?: string;
    mobile?: string;
    // Default true: unknown email auto-creates an account. Pass false for strict login → 401.
    autoSignup?: boolean;
}
