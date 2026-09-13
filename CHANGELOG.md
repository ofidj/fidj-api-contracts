# Changelog

## [3.7.2] - 2026-09-13

- Describe `signin` on the status response: which screen collects a credential,
  `fidj-ui` or `provider-page`. The switch behind it fails closed and silently,
  so without this an operator cannot tell whether their configuration took.

- Describe login acceptance fields and public versioned app-agreement metadata.

Dated entries are historical; current workflow is in the package README.

## [3.7.0] - 2026-09-11

Minor, not patch: `FidjApiAppsOAuthStatusResponse` is removed. It described the
legacy per-app OAuth connector, whose routes answer 410 since 3.6.26, but the
export going away is a break for anyone importing the type.

- Add `pendingEmail`, the email-change and session contracts, and search/paging fields on the owner user list.
- Remove `FidjApiAppsOAuthStatusResponse` with the legacy OAuth connector it described.
- Compile contracts without ambient consumer test globals so nested workspace builds remain consistent.

- Add the optional public app home URL to the public response contract.
- Add typed OIDC, organization/member/group/access and external-provider capability contracts.
- Correct owner user-list payloads and expose closing-app status.
- Add app groups, handler readiness and automatic erasure retry receipt contracts.
- Connect generated app data export/erasure, durable retry state and scoped completion receipts.
- Add shared-account password recovery and email verification integration.
- Local scenario: include Fidj in privacy, distinguish platform membership, and connect Alex’s personal and Studio Notes owner journeys.

### Local validation milestone (3.6.24)

- Add app identity to consent responses and typed personal-app, export and erasure payloads.

## [3.6.22] - 2026-05-28

### Changed

- **Semver realigned with fidj-api.** Jumped 1.0.1 → 3.6.22 so the contracts package version mirrors the HTTP protocol + feature/patch number of the server it describes (fidj-api 3.6.22). Same convention fidj-api adopted in its own 3.x reset: `3.x.y` = `/v3` protocol, feature `x`, patch `y`. Strictly cosmetic — the interface surface is unchanged from 1.0.1.
- Inherited widenings from the previous v1.0.1 work: `FidjApiStatusResponse` gained `version` / `env` / `built` / `isOk`; `FidjApiUsersCreateRequest` gained `autoSignup`; `FidjApiUsersCreateResponse` and `FidjApiUsersMeDetailsResponse` gained `emailVerified`; `FidjApiUsersMeResponse` gained `verified`.

## [1.0.1] - 2026-05-28

### Added

- Widened a handful of interfaces to match what fidj-api actually accepts/returns at runtime — see the 3.6.22 entry above for the field list. Optional fields only; strictly additive.

## [1.0.0] - 2026-05-28

### Changed

- **Renamed package from `fidj-api-contracts` (private) to `@ofidj/contracts` (public).** First publish to the npm registry.
- Reset semver to `1.0.0`. Drives the typed interface surface against fidj-api `/v3` HTTP contract.

### Added

- `publishConfig.access: public` and `repository`/`bugs`/`homepage` metadata for npm publication.
