// Signed receipts (A-10). One platform key signs them (ES256); its public keys
// are at GET /receipts/jwks.json, and a receipt names the one that signed it
// in its `kid` header.

export type FidjApiReceiptEvent =
    | 'consent.given'
    | 'consent.withdrawn'
    | 'agreement.accepted'
    | 'erasure.completed';

// What a receipt's JWS carries. Field names follow ISO/IEC TS 27560 where it
// has one.
export interface FidjApiReceiptPayload {
    iss: string;
    iat: number;
    // The receipt's id.
    jti: string;
    schemaVersion: 'fidj-receipt/1';
    recordType: 'consent' | 'erasure';
    event: FidjApiReceiptEvent;
    eventTime: string;
    // The Fidj user id.
    piiPrincipalId: string;
    piiController: {appId: string; name: string};
    // Fidj records as the app's processor, or as controller of its own app.
    recordedBy: {name: 'FIDJ'; role: 'processor' | 'controller'};
    // consent.*
    purpose?: string;
    // agreement.accepted
    notice?: {version: string | null; previousVersion: string | null};
    // erasure.completed
    erasure?: {
        requestId: string;
        requestedAt: string;
        completedAt: string;
        // 1 on the day it was asked for.
        completedOnDay: number;
        // One calendar month after the request (GDPR Art. 12(3)).
        deadlineAt: string;
    };
}

export interface FidjApiReceipt {
    id: string;
    appId: string;
    recordType: 'consent' | 'erasure';
    event: FidjApiReceiptEvent;
    issuedAt: string;
    // Erasure receipts: thirty days after completion. Consent receipts last as
    // long as the membership.
    expiresAt: string | null;
    // The compact JWS: the evidence itself.
    jws: string;
}

// GET /me/receipts, GET /me/apps/:app_id/receipts, and for the owner
// GET /apps/:app_id/receipts (?subject=<Fidj user id>). Newest first.
export interface FidjApiReceiptsResponse {
    receipts: FidjApiReceipt[];
}

// GET /receipts/jwks.json
export interface FidjApiReceiptKeysResponse {
    keys: {kty: 'EC'; crv: 'P-256'; x: string; y: string; kid: string; alg: 'ES256'; use: 'sig'}[];
}

// POST /receipts/verify {receipt}
export interface FidjApiReceiptVerifyRequest {
    receipt: string;
}
export interface FidjApiReceiptVerifyResponse {
    valid: boolean;
    // Only for a genuine receipt.
    payload?: FidjApiReceiptPayload;
}
