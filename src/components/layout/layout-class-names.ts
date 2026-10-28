import type { FrameState } from "@/components/frame/use-frame"
import { cn } from "@/lib/utils/cn"

// The fade lives on the hidden style only: hiding fades out whatever the state
// sequence, while revealing is left to the enter animations and their delays
const OFF_STYLE =
  "opacity-0 pointer-events-none transition-opacity duration-200"

export function getLayoutClassNames({
  frameState,
  isHome,
}: {
  frameState: FrameState
  isHome: boolean
}): {
  intro: string
  navbar: string
  leftSidebar: string
  page: string
  rightSidebar: string
} {
  const navigationVisible = frameState === "expanded" && !isHome

  return {
    intro: cn(
      "transition-opacity duration-200 px-[calc(var(--frame-inset-x)+1.5rem)] lg:px-[calc(var(--frame-inset-x)+2rem)] overflow-y-hidden",
      frameState !== "collapsed" && OFF_STYLE,
    ),
    navbar: navigationVisible ? "animate-enter-from-top" : OFF_STYLE,
    leftSidebar: cn(
      "lg:col-span-1 lg:col-start-1 lg:row-start-1",
      navigationVisible
        ? "animate-enter-from-left [animation-delay:60ms]"
        : OFF_STYLE,
    ),
    page: cn(
      "space-y-4 lg:pb-20 overflow-y-auto",
      navigationVisible && "animate-enter-from-top [animation-delay:120ms]",
    ),
    rightSidebar: cn(
      "lg:col-span-1",
      navigationVisible && "animate-enter-from-right [animation-delay:120ms]",
    ),
  }
}
