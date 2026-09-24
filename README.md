# @ofidj/contracts

TypeScript API contracts for Fidj services — request/response interfaces for REST endpoints (API v3).

> _Renamed from `fidj-api-contracts` at 1.0.0. The API remains `/v3`; the current 3.6.x package versions align with the coordinated API work._

## Structure

```
src/fidj-api/     # Fidj API endpoint contracts (auth, users, consents, apps, contracts, tokens)
```

## Naming Convention

`Fidj{Service}{Resource}{Action}{Type}`

- **Service**: Api
- **Resource**: Users, Apps, Consents, Contracts, Tokens, OAuth
- **Action**: Create, Update, FindOne, etc.
- **Type**: Request, Response

## Usage

```typescript
import {FidjApiUsersCreateRequest, FidjApiConsentsResponse} from '@ofidj/contracts';
```

## Commands

```bash
npm run build          # Compile TypeScript
npm run bp:style:fix   # Lint + format
npm test               # Placeholder only; does not validate behavior
```

## Validation

Follow [workspace TDD](../fidj-brain/AGENTS.md): write a failing consumer/type fixture before changing a contract, implement until green, then refactor. Build this package and run affected API/SDK checks. The release-check script currently references a missing dependency-switch command; see the [release rules](../fidj-brain/README.md#branches-and-releases).

## Account lifecycle

`FidjApiResetPasswordRequest` and `FidjApiVerifyEmailRequest` describe the one-use password reset and explicit email confirmation payloads. Recovery operates on the shared account; consent and erasure remain scoped to each app.

App-data rights responses include optional `applicationData`, connection status and user-scoped `FidjApiPrivacyReceipt` records. App data and Fidj data have independent pending/completed outcomes.


The development contracts include `FidjApiGroup`, owner group writes with an optimistic `version`, per-user group relationships, handler readiness, and erasure receipt retry/needs-attention states. Group member IDs identify app contracts, not global users.

Authenticated `PUT /me` password changes require `{currentPassword, password}`. They apply the same password limits as reset, revoke existing sessions, and invalidate outstanding reset links. Sign in again after success. Name-only updates do not change credentials.


Owner details include `deletionPending`. Owner user-list contracts now describe the actual limited profile/role objects and per-app consent summary, replacing the old string-only declarations. This is a coordinated development-contract correction.

## Experimental types

OIDC, organization and external-provider interfaces are development contracts, not evidence of implemented API routes. The workspace API has no OIDC provider or organization tenancy. Verify server behavior before using these types in an integration.
