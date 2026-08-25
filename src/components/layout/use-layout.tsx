import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import type { LayoutState } from "./layout-style"
import { useLocation, useRouter } from "@tanstack/react-router"
import { isIndexRoute, routesConfig } from "@/lib/utils/routes"

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
      !isIndexRoute(pathname, router) &&
      routesConfig.map((r) => r.path).some((p) => pathname.includes(p))
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
