<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Instructions

## Architecture

- Always use **Server Actions** to fetch or mutate data
- Never fetch data in `useEffect`
- Prefer **Server Components** by default
- Use **component architecture** to build the view (small, composable components)
- Split all non-trivial logic into **custom hooks**
- Components must stay declarative and minimal
- middleware.ts is now proxy.ts, use proxy.ts

## Hooks

- Hooks contain logic only
- No data fetching in `useEffect`
- Hooks may call Server Actions
- One responsibility per hook

## Code Style

- Respect **KISS**
- Prefer clarity over abstraction
- Match existing patterns
- Never add comments
- Do not explain code unless explicitly asked
- always use react-hook-form for forms

## Tests

### Unit Tests

- Use `screen.getByRole`, `getByLabelText`, `getByText` — never `querySelector` or class names
- Test behavior from the user's perspective, not implementation details
- One concept per test — split multi-assertion tests into focused cases
- Use `userEvent` over `fireEvent` for all interactions
- Place test files next to the file they cover: `component.test.tsx`, `use-hook.test.ts`
- Mock all Server Actions — never let them execute in unit tests
- Do not test className application or DOM structure
- Do not assert on translation keys — assert on rendered Polish text or use `t()` mock that returns the key

### Integration Tests

- Test a full feature slice: form render → user interaction → Server Action call → UI response
- Mock only the network boundary — Server Actions are mocked, everything else runs real
- Use `msw` for any API responses that Server Actions depend on
- Always test the Polish UI text that the user actually sees
- Cover the happy path and at least one error/validation state per feature
- Never test internal hook state — only what appears in the DOM
- Forms must be tested via `react-hook-form` behavior: submit triggers validation, errors appear, success state renders

### Mocking Rules

- Mock `framer-motion` at module level in all test files that use animated components
- Mock Server Actions with `jest.mock('../actions')` — assert they were called with correct args
- Use `jest.spyOn` for hooks only when testing side effects, not return values
- Never mock child components — render the real tree

### What Not To Test

- Do not test `cn()` utility output
- Do not test translation file contents
- Do not test types or constants directly
- Do not test that a Server Action exists — test

## Types

- Move all types out of components and hooks
- Organize by responsibility
- use shared types if posible and import shared types from "@e-personel/shared-types";
  Structure:
  types/
  index.ts

- Re-export from `types/index.ts`
- No inline or local types in components other then component props

## Constants

- Move constants out of components and hooks
- Organize by responsibility
  Structure:
  constants/
  index.ts
- Re-export from `constants/index.ts`

## Server Actions

- All data access must go through Server Actions
- Organize by domain
  actions/
- No direct fetching outside `actions/`
- Components and hooks must not access APIs directly

## Output Rules

- Output code only
- No comments
- No explanations
- Ask before making breaking changes

## Styles

- use cn to conditonal styles
- utils\cn.ts

## Ui

- Check if a component already exists before creating a new one
- Follow the existing style guide and UI patterns
- If logic is used more than once, move it to `lib`, `helpers`, or a custom hook
- Ui text should always be in polsish language (PL)

## COPY

- move all text used in ui to the PL and EN json and add matching pair to the translation.tsv and use t() for the translation text

### Performance

- Używaj CSS transitions zamiast JavaScript animations gdy to możliwe
- Ogranicz użycie `box-shadow` blur radius dla lepszej wydajności
- Używaj `will-change` dla elementów z ciągłymi animacjami

### Accessibility

- Zawsze dodawaj odpowiednie `aria-label` dla interaktywnych elementów
- Zapewnij keyboard navigation (focus states)
- Używaj semantic HTML (`nav`, `main`, `section`, etc.)

### Responsive

- Testuj na różnych rozmiarach ekranu
- Używaj `clamp()` dla fluid typography
- Grid powinien się adaptować (auto-fit, minmax)
