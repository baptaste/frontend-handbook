import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"
import { Navigation } from "./navigation"
import { getLayoutClassNames, type LayoutState } from "@/lib/layout"
import { useLocation, useRouter } from "@tanstack/react-router"
import { navigationRoutes } from "@/lib/navigation-routes"

const LayoutContext = createContext<{
  state: LayoutState
  setState: (value: LayoutState) => void
} | null>(null)

export function LayoutProvider({ children }: { children?: ReactNode }) {
  const [state, setState] = useState<LayoutState>("off")
  const { pathname } = useLocation()
  const router = useRouter()

  const updater = useCallback((next: LayoutState) => {
    setState(next)
    if (next === "out") {
      setTimeout(() => {
        setState("off")
      }, 200)
    }
  }, [])

  useEffect(() => {
    if (
      state === "off" &&
      pathname !== router.routesById["/"].path &&
      navigationRoutes.map((r) => r.path).some((p) => p === pathname)
    ) {
      setState("in")
    }
  }, [state, pathname])

  return (
    <LayoutContext.Provider value={{ state, setState: updater }}>
      {children}
    </LayoutContext.Provider>
  )
}

export function useLayout() {
  const ctx = useContext(LayoutContext)
  if (!ctx) {
    throw new Error("useLayout must be wrapped within LayoutProvider")
  }
  return ctx
}

export function Layout({ children }: { children?: ReactNode }) {
  const { state } = useLayout()
  const classNames = getLayoutClassNames(state)

  return (
    <div
      data-layout=""
      className="overflow-x-hidden antialiased bg-neutral-50 dark:bg-neutral-950 *:bg-neutral-50 *:dark:bg-neutral-950 text-neutral-500 dark:text-neutral-300 *:text-neutral-500 *:dark:text-neutral-300 *:selection:bg-neutral-200 *:dark:selection:bg-neutral-700"
    >
      <Navbar className={classNames.navbar} />

      <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-dvh">
        <Sidebar className={classNames.leftSidebar}>
          <Navigation />
        </Sidebar>

        <main className="w-full h-full overflow-y-auto p-4 lg:p-8 col-span-1 lg:col-span-3 lg:pb-20">
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
