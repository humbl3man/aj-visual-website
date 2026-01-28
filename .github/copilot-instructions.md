# GitHub Copilot Instructions

## General Principles

- Prioritize **clarity over cleverness**
- Prefer **simple, readable solutions**
- Avoid unnecessary abstractions
- Do not over-engineer
- Write code that a mid-level developer can understand immediately
- Optimize for maintainability first, performance second

---

## Code Style

- Use consistent formatting
- Prefer explicit names over short or clever ones
- Avoid deeply nested logic
- Keep functions small and focused
- Prefer early returns instead of large `if` blocks

---

## JavaScript / TypeScript

- Use modern ES syntax
- Prefer `const` over `let`, avoid `var`
- Avoid unnecessary generics
- Do not introduce complex patterns (Factories, Builders, etc.) unless required
- Keep types simple and readable
- Avoid over-typing

Example:

```ts
// Good
function getUserName(user) {
  return user?.name ?? "Guest";
}

// Avoid
function resolveUserIdentity<T extends IUserIdentityResolver>(
  resolver: T
): Nullable<string> {
  return resolver?.resolve()?.getName()?.value ?? null;
}
```
