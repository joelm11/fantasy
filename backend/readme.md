# Backend

1. The backend populates data to be displayed by the view layer.
2. The backend does various niceties in addition to keeping the DB updated.

## Setup

Install dependencies:

```bash
cd src/backend
npm install
```

## Development

Run tests:

```bash
npm test              # Run tests once
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run with coverage report
```

Type checking:

```bash
npm run typecheck
```

Build:

```bash
npm run build
```

# Backend Architecture

## API

- Get rostered players.
- Get trade prospects.
- Make trades and validate success.
- Fetch past player data for rendering as a graph.

## Data Layer

- User gets a row with each of their x players.
- Should record for each user how many points their players scored that week and any changes so we can do accurate tracking.

## Tech Stack

- **TypeScript** for type safety
- **Vitest** for unit testing (fast, modern test framework)
- **tsx** for running TypeScript in development