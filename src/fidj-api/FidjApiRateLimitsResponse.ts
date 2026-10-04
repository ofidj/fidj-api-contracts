// GET /internal/rate-limits (admin) and GET /apps/:app_id/rate-limits (owner)
//
// The same shape for both: the owner's is the admin's narrowed to one app, so a
// screen that renders one renders the other.
export interface FidjApiRateLimitRow {
    // Absent on the unattributed row: signing in and recovering a password
    // belong to no app.
    appId?: string;
    title?: string;
    count: number;
    lastAt?: string;
    // How many distinct callers were refused, never which. The limiter keys are
    // opaque digests so that addresses stay out of the stores and out of
    // operational output; this keeps the one question an address would answer.
    sources: number;
    // Refusals per budget: being guessed at and minting too many tokens are
    // different stories, and the bucket is what tells them apart.
    limiters: Record<string, number>;
}

export interface FidjApiRateLimitsResponse {
    since: string;
    apps: FidjApiRateLimitRow[];
    unattributed: FidjApiRateLimitRow;
}

// GET /internal/rate-limits/details (admin, ?appId= or 'none') and
// GET /apps/:app_id/rate-limits/details (owner, their app only).
export interface FidjApiRateLimitDetailsResponse {
    since: string;
    // The width of one timeline bar.
    bucketMinutes: number;
    timeline: {at: string; count: number}[];
    routes: {
        appId?: string;
        // The route pattern, never the URL.
        route: string;
        limiter: string;
        count: number;
        sources: number;
        firstAt: string;
        lastAt: string;
    }[];
    recent: {at: string; limiter: string; route: string; appId?: string}[];
    limits: {limiter: string; max: number; windowSeconds: number}[];
}
