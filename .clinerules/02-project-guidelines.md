---
description:
globs:
alwaysApply: true
---

# Next 15 Page Router Project Guidelines

## Documentation Resources

- Refer to the following documentation pages for guidance:
- https://reactrouter.com/start/data/routing
- [Project Structure](mdc:https://nextjs.org/docs/pages/getting-started/project-structure)
- [Routing](mdc:https://nextjs.org/docs/pages/building-your-application/routing)
- [Rendering](mdc:https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
- [Data Fetching](mdc:https://nextjs.org/docs/pages/building-your-application/data-fetching)

## Architecture & Routing

- Do **not** provide suggestions based on App Router Architecture, this project uses Next.js Page Router Architecture.

- Page Router Architecture: based on the pages directory, where each file represents a route. It primarily uses client-side routing, with server-side rendering (SSR) and static site generation (SSG) handled through `getServerSideProps`, `getStaticProps`, and `getInitialProps`.

## Package Installation

- Do **not** install new packages unless requested.

## Data Fetching

- Data fetching should always occur on page modules and never on the feature components.

## Feature Components

Should be placed under `./src/features` and their React function should **not** be exported by default.

Example:

```typescript
export function ComponentName() {}
```

## Import Statements

- Use `~` for imports instead of relative paths.
- Use `'react-router'` for React Router tools, not `'react-router-dom'`.

## UI Components

- Use Chakra UI v3 for building the UI. Exclusively.
- Use icons from React-icons. Exclusively.
