import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import { useLocation, useRouter } from "@tanstack/react-router"
import type { LayoutAnimation } from "./layout-style"
import { isIndexRoute, routesConfig } from "@/lib/utils/routes"

const LayoutContext = createContext<{
  animation: LayoutAnimation
  animate: (value: LayoutAnimation) => void
} | null>(null)

export function LayoutProvider({ children }: { children?: ReactNode }) {
  const [animation, animate] = useState<LayoutAnimation>("off")
  const { pathname } = useLocation()
  const router = useRouter()

  const updater = useCallback((next: LayoutAnimation) => {
    animate(next)
    if (next === "out") {
      setTimeout(() => {
        animate("off")
      }, 200)
    }
  }, [])

  useEffect(() => {
    if (
      animation === "off" &&
      !isIndexRoute(pathname, router) &&
      routesConfig.map((r) => r.path).some((p) => pathname.includes(p))
    ) {
      animate("in")
    }
  }, [animation, pathname])

  return (
    <LayoutContext.Provider value={{ animation, animate: updater }}>
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
