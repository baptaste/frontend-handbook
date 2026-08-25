import { type ReactNode } from "react"
import { Navbar } from "../navbar"
import { Sidebar } from "../sidebar"
import { NavigationLinks } from "../navigation-links"

import { useLayout } from "./use-layout"
import { getLayoutClassNames } from "./layout-style"

export function Layout({ children }: { children?: ReactNode }) {
  const { state } = useLayout()
  const classNames = getLayoutClassNames(state)

  return (
    <div
      data-layout=""
      className="bg-background"
      // className="bg-background text-foreground dark:bg-foreground dark:text-background *:bg-background *:text-foreground *:dark:bg-foreground *:dark:text-background"
      // className="overflow-x-hidden antialiased bg-neutral-50 dark:bg-neutral-950 *:bg-neutral-50 *:dark:bg-neutral-950 text-neutral-500 dark:text-neutral-300 *:text-neutral-500 *:dark:text-neutral-300 *:selection:bg-neutral-200 *:dark:selection:bg-neutral-700"
    >
      <Navbar className={classNames.navbar} />

      <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-dvh">
        <Sidebar className={classNames.leftSidebar}>
          <NavigationLinks />
        </Sidebar>

        <main className="w-full h-full space-y-4 overflow-y-auto p-4 lg:p-8 col-span-1 lg:col-span-3 lg:pb-20">
          {children}
        </main>

        <Sidebar side="right" className={classNames.rightSidebar}>
          <p className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
            On This Page
          </p>
        </Sidebar>
      </div>
    </div>
  )
}
