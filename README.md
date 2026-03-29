# fidj-api-contracts

TypeScript API contracts for Fidj services — request/response interfaces for REST endpoints (API v3).

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
import {FidjApiUsersCreateRequest, FidjApiConsentsResponse} from 'fidj-api-contracts';
```

## Commands

```bash
npm run build          # Compile TypeScript
npm run bp:style:fix   # Lint + format
npm run bp:bump        # Version bump + git tag
```
