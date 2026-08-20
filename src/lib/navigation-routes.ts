import type { RegisteredRouter } from "@tanstack/react-router"

type RoutePath = keyof RegisteredRouter["routesByPath"]

type NavigationRoute = {
  path: RoutePath
  label: string
}

export const navigationRoutes = [
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
  },
  {
    path: "/engineering",
    label: "Engineering",
  },
  {
    path: "/contact",
    label: "Contact",
  },
  {
    path: "/now",
    label: "Now",
  },
] satisfies NavigationRoute[]
