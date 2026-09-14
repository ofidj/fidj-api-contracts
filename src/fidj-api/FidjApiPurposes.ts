export type FidjApiLawfulBasis =
    | 'consent'
    | 'contract'
    | 'legal_obligation'
    | 'vital_interests'
    | 'public_task'
    | 'legitimate_interests';

export type FidjApiPurposeControl =
    | 'none'
    | 'consent_switch'
    | 'objection'
    | 'revoke'
    | 'leave_app'
    | 'link_unlink'
    | 'export_only';

export interface FidjApiPurpose {
    purposeId: string;
    version: number;
    status: 'published' | 'withheld';
    controllership: 'controller' | 'processor' | 'joint_controller';
    name: string;
    description: string;
    controller: {name: string; contact: string; privacyContact?: string; dpo?: string | null};
    dataCategories: string[];
    lawfulBasis: FidjApiLawfulBasis;
    basisEvidence: {
        necessityStatement?: string | null;
        legalReference?: string | null;
        balancingTestRef?: string | null;
        article9Condition?: string | null;
    };
    required: boolean;
    defaultState: 'off' | null;
    control: FidjApiPurposeControl;
    retention: {trigger: string; days: number; label: string};
    withdrawalEffect: string;
    objectionRight: boolean;
    recipients: string[];
    transfers: {outsideEEA: boolean; safeguard: string | null};
    automatedDecision: boolean;
    implementation: {
        implemented: boolean;
        verified?: boolean;
        enforced: boolean;
        code?: string;
        gap?: string;
    };
    publishedAt?: string;
}

export interface FidjApiPurposesResponse {
    schemaVersion: string;
    purposes: FidjApiPurpose[];
}

export type FidjApiPurposeWriteRequest = FidjApiPurpose;
