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
        path: "/engineering/architecture",
        label: "Architecture",
      },
      {
        path: "/engineering/state-management",
        label: "State management",
      },
      {
        path: "/engineering/working-with-ai",
        label: "Working with AI",
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

export function getFlatRoutes(): RouteDef[] {
  return routesConfig.flatMap(({ routes, ...route }) =>
    [...(routes ?? []), { ...route }].flat(),
  )
}

export function getCurrentRoute(pathname: string): RouteDef | undefined {
  return getFlatRoutes().find((r) => pathname === r.path)
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
