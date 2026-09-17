import {FidjApiConsentsResponse} from './FidjApiConsentsResponse';
import {FidjApiConsentHistoryEntry} from './FidjApiConsentsHistoryResponse';

export interface FidjApiPrivacyAppsResponse {
    requests?: FidjApiPrivacyReceipt[];
    apps: {
        id: string;
        title: string;
        description?: string;
        roles: string[];
        owned: boolean;
        platform: boolean;
        deletionPending: boolean;
        appDataConnected?: boolean;
        agreementDocument?: {
            currentVersion: string;
            acceptedVersion?: string;
            href: string;
        };
        consent: FidjApiConsentsResponse;
    }[];
}

export interface FidjApiPrivacyErasureRequest {
    confirm: string;
}

export interface FidjApiPrivacyErasureResponse {
    requestId?: string;
    appData?: 'completed' | 'pending' | 'not_connected';
    status: 'completed' | 'pending';
    appId: string;
    coverage?: string;
    message?: string;
}

export interface FidjApiPrivacyExportResponse {
    applicationData?: Record<string, unknown>;
    exportedAt: string;
    coverage: string;
    app: {id: string; title: string};
    identity: {name: string; email?: string};
    membership: {roles: string[]; joinedAt?: string; groups?: {name: string; roles: string[]}[]};
    consent: FidjApiConsentsResponse;
    history: FidjApiConsentHistoryEntry[];
}

export interface FidjApiPrivacyReceipt {
    appTitle?: string;
    nextAttemptAt?: string;
    needsAttention?: boolean;
    requestId: string;
    appId: string;
    status: 'completed' | 'pending';
    appData: 'completed' | 'pending';
    fidjData: 'completed' | 'pending';
    completedAt?: string;
}

export interface FidjApiPrivacyReadinessResponse {
    appId: string;
    status: 'ready' | 'not_connected' | 'unavailable';
    checkedAt: string;
    capabilities: ('export' | 'erase')[];
    message?: string;
}
