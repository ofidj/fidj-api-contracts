// A service card is separate from a Fidj membership. Simulated evidence never
// establishes a verified capability at an actual provider.
export interface FidjApiExitChannel {
    kind:
        | 'api-delete'
        | 'api-export'
        | 'account-deletion'
        | 'request-form'
        | 'dpo-email'
        | 'privacy-policy';
    target: string;
    source: string;
    verifiedAt: string;
}
// A Fidj provider is named by its issuer; another server by its address.
export interface FidjApiServiceProvider {
    issuer?: string;
    url?: string;
    clientId: string;
}
export interface FidjApiExternalService {
    id: string;
    title: string;
    description: string;
    listed: boolean;
    publisherStatus: 'unclaimed' | 'claimed';
    publisher?: string;
    // A: Fidj can execute the documented API deletion with the holder's token.
    // candidate: an API is documented that Fidj cannot execute yet.
    capability: 'candidate' | 'A' | 'B' | 'C' | 'D';
    connector: string;
    // Where Fidj reaches this card's provider, shown to whoever manages the
    // card. A client secret is never returned.
    provider?: FidjApiServiceProvider;
    channels: FidjApiExitChannel[];
    simulated: boolean;
    canManage?: boolean;
}
// A server without any provider connector answers available: false and lists nothing.
export interface FidjApiExternalServiceList {
    available: boolean;
    services: FidjApiExternalService[];
}
export interface FidjApiExternalAuthorizationResult {
    state: string;
    code: string;
    iss?: string;
}
export interface FidjApiExternalConnection {
    connected: boolean;
    subject?: string;
    handle?: string;
    profileUrl?: string;
    scope?: string;
}
export type FidjApiExitCaseStatus =
    | 'draft'
    | 'awaiting_authorization'
    | 'authorized'
    | 'sent'
    | 'user_action_required'
    | 'awaiting_response'
    | 'partial_response'
    | 'refused'
    | 'deadline_exceeded'
    | 'resolved';
export interface FidjApiExitObjectives {
    publicRemoval: boolean;
    accountClosure: boolean;
    erasure: boolean;
}
export interface FidjApiExitCase {
    id: string;
    serviceId: string;
    revision: number;
    targetUrl?: string;
    objectives: FidjApiExitObjectives;
    status: FidjApiExitCaseStatus;
    outcomes: Record<
        keyof FidjApiExitObjectives,
        {status: string; source?: string; at?: string; scope?: string}
    >;
    events: Array<{at: string; type: string; message: string}>;
    authorization?: {at: string; revision: number; scope: FidjApiExitObjectives};
    nextAction?: {label: string; url?: string};
    requestedAt?: string;
    deadline?: string;
    deadlineEstimated?: boolean;
    simulated: boolean;
}
export interface FidjApiServiceClaim {
    id: string;
    serviceId: string;
    status: 'requested' | 'scheduled' | 'confirmed' | 'cancelled' | 'rejected' | 'transferred';
    contact: string;
    justification: string;
    requestAppointment: boolean;
    slot?: string;
    timezone?: string;
    events: Array<{at: string; type: string; message: string}>;
}
