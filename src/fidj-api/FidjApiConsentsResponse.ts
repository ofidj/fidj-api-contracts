// GET /me/consents — GDPR Art. 7/15
export interface FidjApiConsentsResponse {
    appId?: string;
    terms: boolean;
    termsVersion?: string;
    // The language the accepted version was read in, and the address of that text.
    termsLanguage?: string;
    termsHref?: string;
    termsAcceptedAt?: string;
    analytics: boolean;
    communications: boolean;
    optionalData: boolean;
    updatedAt?: string;
}
