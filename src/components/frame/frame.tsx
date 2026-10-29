import { useLocation, useRouter } from "@tanstack/react-router"
import { type ReactNode, useCallback, useEffect, useState } from "react"
import { FlowingGradient, Shader } from "shaders/react"
import {
  FrameContext,
  type FrameState,
  getFrameTransitionMs,
} from "./use-frame"
import { isIndexRoute } from "@/lib/utils/routes"
import { cn } from "@/lib/utils/cn"

export function Frame({ children }: { children?: ReactNode }) {
  const { pathname } = useLocation()
  const router = useRouter()
  const isHome = isIndexRoute(pathname, router)

  // Start in the state matching the landing page so a direct load never animates
  const [state, setState] = useState<FrameState>(
    isHome ? "collapsed" : "expanded",
  )

  const expand = useCallback(() => setState("expanded"), [])

  // Follow route changes that did not go through the homepage button: links back
  // to the homepage, and the browser's back / forward buttons. Only route changes
  // matter here: the homepage button expands the frame before navigating on purpose
  useEffect(() => {
    if (!isHome) {
      setState("expanded")
      return
    }
    if (state !== "expanded") return

    setState("collapsing")
    const timeout = setTimeout(
      () => setState("collapsed"),
      getFrameTransitionMs(),
    )
    return () => clearTimeout(timeout)
  }, [isHome])

  return (
    <FrameContext.Provider value={{ state, expand }}>
      {/* Only the homepage uncovers the shader; links back home navigate first, so
          it is already mounted while the frame shrinks */}
      {isHome && (
        <Shader className="fixed inset-0 -z-10">
          <FlowingGradient distortion={0.2} speed={0.5} />
        </Shader>
      )}

      <div
        className={cn(
          "h-dvh bg-background transition-[clip-path] ease-in-out motion-reduce:transition-none",
          // The collapsed inset, exposed so content can keep clear of the visible edge
          "[--frame-inset-x:12px] [--frame-inset-y:12px] lg:[--frame-inset-x:5vw] lg:[--frame-inset-y:5dvh]",
          state === "expanded"
            ? "[clip-path:inset(0_round_0)]"
            : "[clip-path:inset(var(--frame-inset-y)_var(--frame-inset-x)_round_12px)] lg:[clip-path:inset(var(--frame-inset-y)_var(--frame-inset-x)_round_16px)]",
        )}
        style={{ transitionDuration: `${getFrameTransitionMs()}ms` }}
      >
        {children}
      </div>
    </FrameContext.Provider>
  )
}
