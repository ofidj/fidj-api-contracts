// PUT /me/email — claim a new address; it becomes the account's only after the
// verification link sent to it is followed. DELETE /me/email calls it off.
export interface FidjApiMeEmailChangeRequest {
    email: string;
    currentPassword: string;
}

export interface FidjApiMeEmailChangeResponse {
    pendingEmail: string;
    message: string;
}

// GET /me/sessions — the live sessions of this account, never their tokens.
export interface FidjApiMeSessionsResponse {
    sessions: {
        id: string;
        app: string;
        appId: string;
        client_udid: string;
        client_info: string;
        createdAt: string;
        endDate: string;
        current: boolean;
    }[];
}
