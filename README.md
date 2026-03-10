# MetricFlow

An analytics dashboard with KPI cards, charts, data tables, and CRUD operations for customer management.

**This is a test/demo project for [FOUX](https://github.com/fouxproject).** It exists to provide a realistic web app for testing the FOUX Chrome DevTools extension, which enables visual design iteration on live sites. Generated in a single shot by Claude.

## Stack

- React + TypeScript
- Vite
- Material UI (MUI) v5
- Recharts
- dayjs

**Code style**: `React.FC<Props>` pattern, named exports, barrel files (`index.ts`), `interface` with `I` prefix for data models, separate `types.ts` files, `useReducer` for page-level state, verbose `handle` prefix event handlers, `&&` conditionals, JSDoc on exports.

## Running

```
npm install
npm run dev
```
