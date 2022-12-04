# @mugglim/zod-with-react-error-boundary

This project is boilerplate for using zod and ErrorBoundary of react.

**[Zod](https://github.com/colinhacks/zod)**

**Zod** is a TypeScript-first schema declaration and validation library.

**[ErrorBoundary](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries)**

**Error boundaries** are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

## Goal

- How to check Type safety in runtime with zod.
- How to separate error logic and success logic in data fetching handler. (for SoC)

## Setup

### 1. Setup packages

```bash
npm install

# or
yarn
```

### 2. Run dev server

```bash
npn run dev

# or
yarn dev
```

### (Optional) Throw type schema error

```bash
# .env.development
VITE_ENABLE_FETCH_ERROR=true
```
