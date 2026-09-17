import { useLocation, useRouter } from "@tanstack/react-router"
import { type ReactNode, useRef } from "react"
import { Navbar } from "../navbar"
import { Sidebar } from "../sidebar"
import { NavigationLinks } from "../navigation-links"

import { NavigationBreadcrumb } from "../navigation-breadcrumb"
import { NavigationAnchors, useRouteAnchors } from "../navigation-anchors"
import { useLayout } from "./use-layout"
import { getLayoutClassNames } from "./layout-style"
import { isIndexRoute } from "@/lib/utils/routes"
import { cn } from "@/lib/utils/cn"

export function Layout({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const { pathname } = useLocation()

  const { state } = useLayout()
  const anchors = useRouteAnchors()
  const classNames = getLayoutClassNames(state)

  const withAnchors = anchors.length > 0

  return (
    <div className="bg-background">
      <Navbar className={classNames.navbar} />

      <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-dvh">
        <Sidebar className={classNames.leftSidebar}>
          <NavigationLinks />
        </Sidebar>

        <main
          ref={ref}
          className={cn(
            "w-full h-full space-y-4 overflow-y-auto p-4 lg:p-8 col-span-1 lg:col-span-4 lg:pb-20",
            (withAnchors || isIndexRoute(pathname, router)) && "lg:col-span-3",
            // The last heading has to be able to scroll up to the anchor line,
            // so leave (1 - ACTIVE_LINE) of the viewport below it.
            withAnchors && "lg:pb-[80dvh]",
          )}
        >
          {!isIndexRoute(pathname, router) && <NavigationBreadcrumb />}

          {children}
        </main>

        <Sidebar
          side="right"
          className={cn(
            "lg:hidden",
            withAnchors && `lg:block ${classNames.rightSidebar}`,
          )}
        >
          <NavigationAnchors ref={ref} />
        </Sidebar>
      </div>
    </div>
  )
}
