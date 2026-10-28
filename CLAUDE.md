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
- `layout-class-names.ts` — maps the frame state to the per-region classes (which regions show)

**Frame** — `src/components/frame/`: the frame wraps the layout. On the homepage it is clipped
inset over a shader; inside the handbook it covers the window. It expands by transitioning
`clip-path`, so its content never reflows. The layout reads the frame state; the frame knows
nothing about the layout.

- `frame.tsx` — `Frame` holds the `FrameState`, renders the shader and the clipped container,
  and provides the state
- `use-frame.tsx` — `FrameState`: `collapsed` (homepage), `expanded` (covers the window) or
  `collapsing` (shrinking back, for `getFrameTransitionMs()`, shorter below `lg`), and `useFrame`. The homepage button
  calls `expand`, waits for the transition, then navigates; every other crossing of the
  homepage boundary (links, back / forward) is picked up from the route change. A direct load
  starts in the matching state, without animating.

**Navigation** — `src/components/navigation/`: `navbar.tsx` (fixed; holds the theme toggle and
the mobile menu), `navigation-links.tsx`, `navigation-breadcrumb.tsx`, and
`navigation-anchors/`. A page opts into "On This Page" by setting `staticData.anchors` on its
route; `useRouteAnchors` reads them, `useAnchorsObserver` tracks the heading in view and keeps the
URL hash in sync. They render as a list in the right sidebar on `lg` and as a popover above the
content below it.

**`src/components/article.tsx`** — the layout primitives content pages compose rather than
styling headings ad hoc. Exported as a single namespace object: `Article.Root`, `Article.Header`,
`Article.Title`, `Article.Info`, `Article.Description`, `Article.Section`,
`Article.SectionHeader`, `Article.SectionTitle`, `Article.Heading`, `Article.Tags`,
`Article.Code`, `Article.Card`. Use these when building a new page.

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

Built out: `/`, `/experience`, `/projects`, `/projects/investment-platform`, `/engineering`,
`/engineering/architecture`, `/engineering/state-management`, `/now`, `/contact`.

`/engineering` lists six notes. Two are written and linked; the other four — Separation of
concerns, Code style, User experience, Developer experience — render through `PlannedNote`
with a "Soon" badge and have no route yet, so the cards are deliberately not links. Write the
note, add the route, then swap `PlannedNote` for `Note`.

The engineering notes are written from the author's own material and voice. Do not invent
experiences, opinions, dates or technical details for them — ask instead, and mark unknowns
`[TODO: ...]` in the copy.

<!-- rtk-instructions v2 -->

# RTK (Rust Token Killer) - Token-Optimized Commands

## Golden Rule

**Always prefix commands with `rtk`**. If RTK has a dedicated filter, it uses it. If not, it passes through unchanged. This means RTK is always safe to use.

**Important**: Even in command chains with `&&`, use `rtk`:

```bash
# ❌ Wrong
git add . && git commit -m "msg" && git push

# ✅ Correct
rtk git add . && rtk git commit -m "msg" && rtk git push
```

## RTK Commands by Workflow

### Build & Compile (80-90% savings)

```bash
rtk cargo build         # Cargo build output
rtk cargo check         # Cargo check output
rtk cargo clippy        # Clippy warnings grouped by file (80%)
rtk tsc                 # TypeScript errors grouped by file/code (83%)
rtk lint                # ESLint/Biome violations grouped (84%)
rtk prettier --check    # Files needing format only (70%)
rtk next build          # Next.js build with route metrics (87%)
```

### Test (60-99% savings)

```bash
rtk cargo test          # Cargo test failures only (90%)
rtk go test             # Go test failures only (90%)
rtk jest                # Jest failures only (99.5%)
rtk vitest              # Vitest failures only (99.5%)
rtk playwright test     # Playwright failures only (94%)
rtk pytest              # Python test failures only (90%)
rtk rake test           # Ruby test failures only (90%)
rtk rspec               # RSpec test failures only (60%)
rtk test <cmd>          # Generic test wrapper - failures only
```

### Git (59-80% savings)

```bash
rtk git status          # Compact status
rtk git log             # Compact log (works with all git flags)
rtk git diff            # Compact diff (80%)
rtk git show            # Compact show (80%)
rtk git add             # Ultra-compact confirmations (59%)
rtk git commit          # Ultra-compact confirmations (59%)
rtk git push            # Ultra-compact confirmations
rtk git pull            # Ultra-compact confirmations
rtk git branch          # Compact branch list
rtk git fetch           # Compact fetch
rtk git stash           # Compact stash
rtk git worktree        # Compact worktree
```

Note: Git passthrough works for ALL subcommands, even those not explicitly listed.

### GitHub (26-87% savings)

```bash
rtk gh pr view <num>    # Compact PR view (87%)
rtk gh pr checks        # Compact PR checks (79%)
rtk gh run list         # Compact workflow runs (82%)
rtk gh issue list       # Compact issue list (80%)
rtk gh api              # Compact API responses (26%)
```

### JavaScript/TypeScript Tooling (70-90% savings)

```bash
rtk pnpm list           # Compact dependency tree (70%)
rtk pnpm outdated       # Compact outdated packages (80%)
rtk pnpm install        # Compact install output (90%)
rtk npm run <script>    # Compact npm script output
rtk npx <cmd>           # Compact npx command output
rtk prisma              # Prisma without ASCII art (88%)
```

### Files & Search (60-75% savings)

```bash
rtk ls <path>           # Tree format, compact (65%)
rtk read <file>         # Code reading with filtering (60%)
rtk grep <pattern>      # Search grouped by file (75%). Format flags (-c, -l, -L, -o, -Z) run raw.
rtk find <pattern>      # Find grouped by directory (70%)
```

### Analysis & Debug (70-90% savings)

```bash
rtk err <cmd>           # Filter errors only from any command
rtk log <file>          # Deduplicated logs with counts
rtk json <file>         # JSON structure without values
rtk deps                # Dependency overview
rtk env                 # Environment variables compact
rtk summary <cmd>       # Smart summary of command output
rtk diff                # Ultra-compact diffs
```

### Infrastructure (85% savings)

```bash
rtk docker ps           # Compact container list
rtk docker images       # Compact image list
rtk docker logs <c>     # Deduplicated logs
rtk kubectl get         # Compact resource list
rtk kubectl logs        # Deduplicated pod logs
```

### Network (65-70% savings)

```bash
rtk curl <url>          # Compact HTTP responses (70%)
rtk wget <url>          # Compact download output (65%)
```

### Meta Commands

```bash
rtk gain                # View token savings statistics
rtk gain --history      # View command history with savings
rtk discover            # Analyze Claude Code sessions for missed RTK usage
rtk proxy <cmd>         # Run command without filtering (for debugging)
rtk init                # Add RTK instructions to CLAUDE.md
rtk init --global       # Add RTK to ~/.claude/CLAUDE.md
```

## Token Savings Overview

| Category         | Commands                       | Typical Savings |
| ---------------- | ------------------------------ | --------------- |
| Tests            | vitest, playwright, cargo test | 90-99%          |
| Build            | next, tsc, lint, prettier      | 70-87%          |
| Git              | status, log, diff, add, commit | 59-80%          |
| GitHub           | gh pr, gh run, gh issue        | 26-87%          |
| Package Managers | pnpm, npm, npx                 | 70-90%          |
| Files            | ls, read, grep, find           | 60-75%          |
| Infrastructure   | docker, kubectl                | 85%             |
| Network          | curl, wget                     | 65-70%          |

Overall average: **60-90% token reduction** on common development operations.

<!-- /rtk-instructions -->
