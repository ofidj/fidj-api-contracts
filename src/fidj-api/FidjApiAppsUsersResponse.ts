// GET /apps/:app_id/users
export interface FidjApiAppsUsersResponse {
    users: {
        _id: string;
        owner: {
            _id: string;
            name: string;
            username: string;
            poc?: {email?: string};
            emailVerified?: boolean;
        };
        roles: {_id?: string; type: string; description?: string}[];
        endDate?: string;
        deletionPending?: boolean;
        consent?: {
            terms: boolean;
            analytics: boolean;
            communications: boolean;
            optionalData: boolean;
        } | null;
    }[];
}
