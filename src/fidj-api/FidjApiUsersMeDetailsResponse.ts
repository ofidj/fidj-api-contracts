// GET /me/details
export interface FidjApiUsersMeDetailsResponse {
    user: {
        id: string;
        poc: {email?: string; mobile?: string};
        username: string;
        name: string;
        emailVerified?: boolean;
        pendingEmail?: string | null;
        appsOwned: string[];
        appsSubscribed: string[];
        // Whether this person administers Fidj itself, so the console knows
        // whether to offer the platform view at all.
        isAdmin?: boolean;
    };
}
