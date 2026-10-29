import type { FrameState } from "@/components/frame/use-frame"
import { cn } from "@/lib/utils/cn"

// The fade lives on the hidden style only: hiding fades out whatever the state
// sequence, while revealing is left to the enter animations and their delays
const OFF_STYLE =
  "opacity-0 pointer-events-none transition-opacity duration-200"

export function getLayoutClassNames({
  frameState,
  isRoot,
}: {
  frameState: FrameState
  isRoot: boolean
}): {
  intro: string
  navbar: string
  leftSidebar: string
  page: string
  content: string
  rightSidebar: string
} {
  const navigationVisible = frameState === "expanded" && !isRoot

  return {
    intro: cn(
      "transition-opacity duration-200 px-[calc(var(--frame-inset-x)+1.5rem)] lg:px-[calc(var(--frame-inset-x)+2rem)]",
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
      // The page scrolls under the navbar (top-4 + h-14.5) so its glass has
      // something to blur; the padding only clears it at rest
      "lg:pb-20 overflow-y-auto pt-[calc(4.625rem+1rem)] lg:pt-[calc(4.625rem+2rem)]",
    ),
    // Wraps what `main` renders: the enter animation can't sit on `main` itself,
    // whose `animation` already drives its scroll fade
    content: cn(
      isRoot ? "h-full" : "space-y-4",
      navigationVisible && "animate-enter-from-top [animation-delay:120ms]",
    ),
    rightSidebar: cn(
      "lg:col-span-1",
      navigationVisible && "animate-enter-from-right [animation-delay:120ms]",
    ),
  }
}
