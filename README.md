# @ofidj/contracts

TypeScript API contracts for Fidj services — request/response interfaces for REST endpoints (API v3).

> _Renamed from `fidj-api-contracts` at 1.0.0. The HTTP contract version (`/v3`) is unchanged and independent from this package's semver._

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
npm run bp:bump        # Version bump + git tag
```

## Account lifecycle

`FidjApiResetPasswordRequest` and `FidjApiVerifyEmailRequest` describe the one-use password reset and explicit email confirmation payloads. Recovery operates on the shared account; consent and erasure remain scoped to each app.

App-data rights responses include optional `applicationData`, connection status and user-scoped `FidjApiPrivacyReceipt` records. App data and Fidj data have independent pending/completed outcomes.


The development contracts include `FidjApiGroup`, owner group writes with an optimistic `version`, per-user group relationships, handler readiness, and erasure receipt retry/needs-attention states. Group member IDs identify app contracts, not global users.

Authenticated `PUT /me` password changes require `{currentPassword, password}`. They apply the same password limits as reset, revoke existing sessions, and invalidate outstanding reset links. Sign in again after success. Name-only updates do not change credentials.


Owner details include `deletionPending`. Owner user-list contracts now describe the actual limited profile/role objects and per-app consent summary, replacing the old string-only declarations. This is a coordinated development-contract correction.
