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
        // When the person joined the app.
        memberSince?: string;
        // When a session was last issued for this membership (a sign-in, a
        // renewal, an OIDC authorization); absent until the first one after
        // 3.22. Requests in between are not counted.
        lastSeenAt?: string;
        consent?: {
            terms: boolean;
            // The agreement version accepted, which may be older than the one
            // in force; null when the record predates versions.
            termsVersion?: string | null;
            termsAcceptedAt?: string | null;
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

// GET /apps/:app_id/summary — the owner's Summary over the whole membership,
// not the page a console has loaded.
export interface FidjApiAppSummaryResponse {
    // Members, leaving out those whose departure is under way.
    members: number;
    agreement: {
        // The version in force.
        version: string;
        // True while the app runs on the starter agreement.
        starter: boolean;
        // Members who accepted the version in force.
        current: number;
        // Members who accepted another version: to be asked again.
        previous: number;
        // Members with no acceptance on record.
        none: number;
    };
    erasures: {
        open: number;
        needsAttention: number;
        // Whole days since the oldest open erasure was asked for (Art. 12(3)
        // gives one month); null when none is open.
        oldestDays: number | null;
    };
}
