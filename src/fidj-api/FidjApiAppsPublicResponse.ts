// GET /apps/:app_id (public)
export interface FidjApiAppsPublicResponse {
    app: {
        id: string;
        title: string;
        description?: string;
        home?: string;
        agreement?: {version: string; text: string};
        legalLinks?: {
            privacyNotice?: string;
            legalNotice?: string;
            termsOfUse?: string;
            salesTerms?: string;
        };
    };
}
