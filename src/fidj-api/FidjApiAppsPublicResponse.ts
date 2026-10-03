// The agreement as one reader is shown it. `language` names the language of
// `text` when the app provides more than one; `href` is its address relative to
// the API root, naming that language, so a link opens the text that was read.
export interface FidjApiServiceAgreement {
    version: string;
    text: string;
    language?: string;
    href?: string;
}

// GET /apps/:app_id (public)
export interface FidjApiAppsPublicResponse {
    app: {
        id: string;
        title: string;
        description?: string;
        home?: string;
        agreement?: FidjApiServiceAgreement;
        // No terms-of-use link: an app's terms of use are its agreement.
        legalLinks?: {
            privacyNotice?: string;
            legalNotice?: string;
            salesTerms?: string;
        };
    };
}
