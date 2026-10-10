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
        // How a person can leave the app through Fidj, and why: see
        // FidjApiExitLevel.
        exitLevel?: FidjApiExitLevel;
        // How the service answered requests sent through Fidj, once five are
        // settled; absent before.
        exitConduct?: FidjApiExitConduct;
    };
}

// A: deletion by API, B: revocation by API, C: a documented web procedure,
// D: contact only, E: no channel found; candidate: a documented API Fidj cannot
// call yet. The basis says which rule gave the level, so a page can explain it.
export interface FidjApiExitLevel {
    level: 'candidate' | 'A' | 'B' | 'C' | 'D' | 'E';
    basis:
        | 'fidj'
        | 'handler'
        | 'membership'
        | 'api-delete'
        | 'api-candidate'
        | 'account-deletion'
        | 'contact'
        | 'no-channel';
    // For a service card: when and where the deciding finding was made — the
    // channel that set the class, or the search that found none.
    observedAt?: string;
    source?: string;
}

export interface FidjApiExitConduct {
    settled: number;
    answered: number;
    refused: number;
    unanswered: number;
}
