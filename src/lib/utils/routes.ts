import type { useRouter } from "@tanstack/react-router"
import type { FileRoutesByTo } from "@/routeTree.gen"

type RoutePath = keyof FileRoutesByTo

type BaseRouteDef = {
  path: RoutePath
  label: string
}

interface RouteDef extends BaseRouteDef {
  routes: BaseRouteDef[]
}

export const routesConfig = [
  {
    path: "/",
    label: "Introduction",
    routes: [],
  },
  {
    path: "/experience",
    label: "Experience",
    routes: [],
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
    ],
  },
  {
    path: "/now",
    label: "Now",
    routes: [],
  },
  {
    path: "/contact",
    label: "Contact",
    routes: [],
  },
] satisfies RouteDef[]

export function getFlatRoutes(): BaseRouteDef[] {
  return routesConfig.flatMap((r) =>
    [{ path: r.path, label: r.label }, ...r.routes].flat(),
  )
}

export function getCurrentRoute(pathname: string): BaseRouteDef | undefined {
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

export function isIndexRoute(
  pathname: string,
  router: ReturnType<typeof useRouter>,
): boolean {
  return pathname === router.routesById["/"].path
}
