// GET /me
export interface FidjApiUsersMeResponse {
    user: {
        id: string;
        username: string;
        verified?: boolean;
        // An address claimed through PUT /me/email and not yet verified. The
        // account keeps `username` until the new address is proven.
        pendingEmail?: string | null;
    };
}
