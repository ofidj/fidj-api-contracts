import {FidjApiConsentsResponse} from './FidjApiConsentsResponse';
import {FidjApiConsentHistoryEntry} from './FidjApiConsentsHistoryResponse';

export interface FidjApiPrivacyAppsResponse {
    apps: {
        id: string;
        title: string;
        description?: string;
        roles: string[];
        owned: boolean;
        platform: boolean;
        deletionPending: boolean;
        consent: FidjApiConsentsResponse;
    }[];
}

export interface FidjApiPrivacyErasureRequest {
    confirm: string;
}

export interface FidjApiPrivacyErasureResponse {
    status: 'completed' | 'pending';
    appId: string;
    coverage?: string;
    message?: string;
}

export interface FidjApiPrivacyExportResponse {
    exportedAt: string;
    coverage: string;
    app: {id: string; title: string};
    identity: {name: string; email?: string};
    membership: {roles: string[]; joinedAt?: string};
    consent: FidjApiConsentsResponse;
    history: FidjApiConsentHistoryEntry[];
}
