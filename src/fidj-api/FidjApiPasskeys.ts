// Passkeys on the Fidj identity (v3 P1-4). One relying party, Fidj's own
// domain; apps on other domains reach it through the Fidj window.

// POST /me/passkeys/options — WebAuthn creation options for this identity.
export interface FidjApiMePasskeyOptionsResponse {
    options: any;
}

// POST /me/passkeys — the authenticator's answer to those options.
export interface FidjApiMePasskeyCreateRequest {
    response: any;
    name?: string;
}

export interface FidjApiMePasskey {
    id: string;
    name: string;
    createdAt: string;
    lastUsedAt?: string;
}

// POST /me/passkeys → 201; DELETE /me/passkeys/:passkeyId → 204.
export interface FidjApiMePasskeyCreateResponse {
    passkey: FidjApiMePasskey;
}

// GET /me/passkeys — never the public key.
export interface FidjApiMePasskeysResponse {
    passkeys: FidjApiMePasskey[];
}

// POST /passkeys/options — options for a discoverable sign-in, and the ticket
// that carries its challenge back.
export interface FidjApiPasskeyLoginOptionsResponse {
    options: any;
    ticket: string;
}

// POST /passkeys/login — a short grant the token endpoint takes as
// `Authorization: Passkey <grant>`, the way it takes a password.
export interface FidjApiPasskeyLoginRequest {
    ticket: string;
    response: any;
}

export interface FidjApiPasskeyLoginResponse {
    grant: string;
    username: string;
}
