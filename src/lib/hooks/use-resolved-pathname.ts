import { useRouterState } from "@tanstack/react-router"

/**
 * The pathname of the page on screen. `useLocation` changes on click, before a
 * page whose code is not loaded yet has rendered; this waits for that render.
 */
export function useResolvedPathname() {
  return useRouterState({
    select: (s) => s.resolvedLocation?.pathname ?? s.location.pathname,
  })
}
