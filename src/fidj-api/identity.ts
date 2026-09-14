export interface FidjApiOidcConfiguration {
    clientId: string;
    redirectUris: string[];
    enabled: boolean;
    issuer: string | null;
    termsUri?: string;
    privacyUri?: string;
    termsVersion?: string;
}
export type FidjOrganizationRole = 'Owner' | 'Administrator' | 'Editor' | 'Viewer';
export interface FidjOrganizationMember {
    contractId: string;
    roles: FidjOrganizationRole[];
    status: 'active' | 'suspended';
}
export interface FidjOrganizationGroup {
    id?: string;
    name: string;
    roles: Array<'Editor' | 'Viewer'>;
    members: string[];
}
export interface FidjApiOrganization {
    id: string;
    name: string;
    version: number;
    members: FidjOrganizationMember[];
    groups: FidjOrganizationGroup[];
}
export interface FidjApiOrganizationAccess {
    organization: {id: string; name: string};
    access: {roles: FidjOrganizationRole[]; permissions: string[]};
}
export interface FidjApiExternalProvider {
    id: 'google' | 'meta';
    name: string;
    connectAvailable: boolean;
    status: 'connected' | 'disconnect_pending' | 'not_connected' | 'guidance_only';
    capabilities: {linkIdentity: boolean; disconnectGrant: boolean; deleteProviderAccount: false};
    deleteAccountUrl: string;
    scope: string;
}

export interface FidjApiOrganizationInvitationRequest {
    email: string;
    role: 'Editor' | 'Viewer';
}
export interface FidjApiOrganizationInvitationResponse {
    invitationUrl: string;
    expiresInDays: number;
}
export interface FidjApiDeleteAccountRequest {
    confirm: 'delete-account';
}
