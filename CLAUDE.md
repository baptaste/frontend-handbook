# CLAUDE.md

## Language

Always respond in English in this repository, including commit messages and code comments.

## What this project is

A personal site — a portfolio / CV presented as technical documentation. The homepage is a
bare intro; clicking "Explore the handbook" animates the documentation shell (navbar +
sidebars) into view. Note that `README.md` is still the untouched TanStack Start boilerplate
and describes nothing about this project.

## Stack

- TanStack Router with file-based routing, `autoCodeSplitting` enabled
- React 19, Vite 8, TypeScript 6 (`strict`, `noUnusedLocals`, `verbatimModuleSyntax`)
- Tailwind CSS 4 via `@tailwindcss/vite` — no `tailwind.config.js`, theme lives in `src/styles.css`
- shadcn (`base-rhea` style, `neutral` base) over Base UI primitives, `lucide-react` for icons
- pnpm

## Commands

```bash
pnpm dev              # vite dev on port 3000
pnpm build
pnpm generate-routes  # tsr generate — regenerates routeTree.gen.ts
pnpm lint             # eslint
pnpm format           # prettier --write . && eslint --fix
pnpm check            # prettier --check .
```

## Architecture

**`src/lib/utils/routes.ts` is the single source of truth for navigation.** `routesConfig` is
typed against `FileRoutesByTo` from the generated route tree, so a nav entry cannot point at a
route that does not exist. Sidebar links, breadcrumbs, and parent-route lookups all derive from
it. When adding a page, create the route file, run `pnpm generate-routes`, then add the entry
to `routesConfig` — a route file alone will not appear in the navigation.

**Layout shell** — `src/components/layout/`:

- `layout.tsx` — navbar, left sidebar (navigation), `main`, right sidebar ("On This Page"), in a
  5-column grid on `lg`
- `use-layout.tsx` — `LayoutProvider` holds an animation state of `off | in | out`. `off` is the
  bare homepage; `in` slides the shell in; `out` slides it back out and auto-returns to `off`
  after 200ms. Links that cross the homepage boundary call `setState` themselves.
- `layout-style.ts` — maps that state to the per-region animation classes

**`src/components/article.tsx`** — the layout primitives content pages compose rather than
styling headings ad hoc. Exported as a single namespace object: `Article.Root`, `Article.Header`,
`Article.Title`, `Article.Info`, `Article.Description`, `Article.Section`,
`Article.SectionHeader`, `Article.SectionTitle`, `Article.Heading`, `Article.Tags`,
`Article.Card`. Use these when building a new page.

**Theming** — `src/lib/hooks/use-theme.tsx` toggles a `light` / `dark` class on the root element
and persists to `localStorage`. Prefer the shadcn semantic tokens defined in `src/styles.css`
(`bg-card`, `border-border`, …), which already carry both themes; older markup writes colors as
explicit `dark:` pairs instead.

`src/lib/utils/external-paths.ts` centralizes outbound links.

## Conventions

- Prettier: no semicolons, double quotes, trailing commas
- Kebab-case file names; named exports for components. A family of related primitives is
  assembled into one namespace object at the bottom of its file and exported under a single name
  (`article.tsx` → `Article.Root`, `Article.Section`, …)
- Import via the `@/` alias rather than deep relative paths
- Components take `ComponentProps<"tag">` and merge incoming `className` through `cn`
  (`src/lib/utils/cn.ts`)
- `routeTree.gen.ts` is generated — never edit it by hand

## State of the codebase

Built out: `/`, `/experience`, `/projects`.

Stubs: `/engineering`, `/now`, `/contact` (`Hello "/route"!`) and
`/projects/investment-platform` (`TODO`) — the case study is being rewritten from scratch.

The right sidebar renders only its "On This Page" heading — there is no table of contents yet.
