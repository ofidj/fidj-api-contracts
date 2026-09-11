// GET /apps/:app_id/users?search=&role=&page=&pageSize=
//
// Paging is opt-in: without page/pageSize the whole membership comes back and
// pageSize is 0. `total` always counts what the filters matched, not the page.
export interface FidjApiAppsUsersResponse {
    total?: number;
    page?: number;
    pageSize?: number;
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

// GET /apps/:app_id/users/:contract_id/consent
export interface FidjApiAppsUserConsentResponse {
    user: {id: string; name?: string; email: string; emailVerified: boolean};
    consent: {
        terms: boolean;
        termsVersion: string | null;
        termsAcceptedAt: string | null;
        analytics: boolean;
        communications: boolean;
        optionalData: boolean;
    };
    history: {
        type: string;
        granted: boolean;
        changedAt: string;
        source?: string;
        cguVersion?: string;
    }[];
}
