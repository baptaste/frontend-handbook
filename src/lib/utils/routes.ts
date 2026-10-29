import type { useRouter } from "@tanstack/react-router"
import type { FileRoutesByTo } from "@/routeTree.gen"

type RoutePath = keyof FileRoutesByTo

type RouteDef = {
  path: RoutePath
  label: string
  routes?: RouteDef[]
}

export const routesConfig = [
  {
    path: "/",
    label: "Introduction",
  },
  {
    path: "/experience",
    label: "Experience",
  },
  {
    path: "/projects",
    label: "Projects",
    routes: [
      {
        path: "/projects/investment-platform",
        label: "Investment Platform",
      },
    ],
  },
  {
    path: "/engineering",
    label: "Engineering",
    routes: [
      {
        path: "/engineering/working-with-ai",
        label: "Working with AI",
      },
      {
        path: "/engineering/architecture",
        label: "Architecture",
      },
      {
        path: "/engineering/state-management",
        label: "State management",
      },
    ],
  },
  {
    path: "/now",
    label: "Now",
  },
  {
    path: "/contact",
    label: "Contact",
  },
] satisfies RouteDef[]

// In reading order: each page comes before its sub-pages
export function getFlatRoutes(): RouteDef[] {
  return routesConfig.flatMap(({ routes, ...route }) => [
    { ...route },
    ...(routes ?? []),
  ])
}

export function getCurrentRoute(pathname: string): RouteDef | undefined {
  return getFlatRoutes().find((r) => pathname === r.path)
}

// The pages before and after the current one in the handbook. The homepage is
// left out: it sits outside the handbook, and stepping back to it collapses the frame
export function getAdjacentRoutes(pathname: string): {
  previous?: RouteDef
  next?: RouteDef
} {
  const handbookRoutes = getFlatRoutes().filter((r) => r.path !== "/")
  const index = handbookRoutes.findIndex((r) => r.path === pathname)
  if (index === -1) return {}

  return {
    previous: handbookRoutes[index - 1],
    next: handbookRoutes[index + 1],
  }
}

export function getParentRoutes(pathname: string): RouteDef[] {
  return routesConfig.filter(
    (r) =>
      r.path !== "/" &&
      getCurrentRoute(pathname)?.path !== r.path &&
      pathname.includes(r.path),
  )
}

export function isRootRoute(
  pathname: string,
  router: ReturnType<typeof useRouter>,
): boolean {
  return pathname === router.routesById["/"].path
}
