// An app's webhook (owner only): where Fidj tells the app what its members
// chose. Each delivery is a POST of FidjApiWebhookEvent, signed with
// `x-fidj-signature` = hex HMAC-SHA256(secret, `${x-fidj-timestamp}.${body}`),
// and retried for 72 hours until the app answers 2xx.
export type FidjApiWebhookEventType =
    | 'consent.given'
    | 'consent.withdrawn'
    | 'agreement.accepted'
    | 'erasure.requested';

export interface FidjApiWebhookEvent {
    // Also sent as `x-fidj-delivery`; the same event may arrive twice, so an
    // app keeps the ids it has handled.
    id: string;
    type: FidjApiWebhookEventType | 'webhook.test';
    appId: string;
    // The Fidj user id, as the privacy adapter receives it. Never a name or an
    // address.
    subject?: string;
    occurredAt: string;
    // consent.*: {purpose}; agreement.accepted: {version, previousVersion};
    // erasure.requested: {requestId}.
    data: any;
}

export interface FidjApiAppWebhook {
    url: string;
    events: FidjApiWebhookEventType[];
    enabled: boolean;
    createdAt?: string;
    updatedAt?: string;
}

// PUT /apps/:app_id/webhook — https only, not inside a private network.
// Without `events`, every event.
export interface FidjApiAppWebhookUpdateRequest {
    url: string;
    events?: FidjApiWebhookEventType[];
    enabled?: boolean;
}

// PUT returns `secret` only when the webhook is created;
// POST /apps/:app_id/webhook/secret returns a new one. It is never read back.
export interface FidjApiAppWebhookUpdateResponse {
    webhook: FidjApiAppWebhook;
    secret?: string;
}

// GET /apps/:app_id/webhook
export interface FidjApiAppWebhookResponse {
    webhook: FidjApiAppWebhook | null;
    health: {
        delivered: number;
        pending: number;
        failed: number;
        lastDeliveredAt: string | null;
        lastFailureAt: string | null;
        // 0 when nothing answered.
        lastFailureStatus: number | null;
    };
}

// POST /apps/:app_id/webhook/test — sent at once, not kept.
export interface FidjApiAppWebhookTestResponse {
    status: 'delivered' | 'failed';
    statusCode: number;
}
