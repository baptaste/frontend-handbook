import { useLocation, useRouter } from "@tanstack/react-router"
import { type ReactNode, useRef } from "react"
import { useLayout } from "./use-layout"
import { getLayoutClassNames } from "./layout-style"
import { Navbar } from "@/components/navigation/navbar"
import { NavigationBreadcrumb } from "@/components/navigation/navigation-breadcrumb"
import { NavigationLinks } from "@/components/navigation/navigation-links"
import { PopoverNavigationAnchors } from "@/components/navigation/navigation-anchors/popover-navigation-anchors"
import { SidebarNavigationAnchors } from "@/components/navigation/navigation-anchors/sidebar-navigation-anchors"
import { useRouteAnchors } from "@/components/navigation/navigation-anchors/use-route-anchors"
import { Sidebar } from "@/components/sidebar"
import { isIndexRoute } from "@/lib/utils/routes"
import { cn } from "@/lib/utils/cn"

export function Layout({ children }: { children?: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const { pathname } = useLocation()

  const { animation } = useLayout()
  const anchors = useRouteAnchors()
  const classNames = getLayoutClassNames(animation)

  const withAnchors = anchors.length > 0

  return (
    <div className="bg-background">
      <Navbar className={classNames.navbar} />

      <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-dvh pt-14">
        <Sidebar className={cn("hidden lg:block", classNames.leftSidebar)}>
          <NavigationLinks />
        </Sidebar>

        <main
          ref={ref}
          className={cn(
            "w-full h-full space-y-4 overflow-y-auto px-6 py-4 lg:p-8 col-span-1 lg:col-span-4 lg:pb-20",
            (withAnchors || isIndexRoute(pathname, router)) && "lg:col-span-3",
            withAnchors && "lg:pb-[80dvh]",
          )}
        >
          {!isIndexRoute(pathname, router) && <NavigationBreadcrumb />}
          {withAnchors && <PopoverNavigationAnchors ref={ref} />}
          {children}
        </main>

        <Sidebar
          side="right"
          className={cn(
            "hidden",
            withAnchors && `pt-2 lg:block ${classNames.rightSidebar}`,
          )}
        >
          <div className="space-y-4">
            <p className="text-sm font-medium">On This Page</p>
            <SidebarNavigationAnchors ref={ref} />
          </div>
        </Sidebar>
      </div>
    </div>
  )
}
