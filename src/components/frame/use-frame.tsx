import { createContext, useContext } from "react"

/**
 * The frame holds the whole page. It sits inset over the shader on the homepage
 * and expands to cover the window inside the handbook.
 *
 * - `collapsed`: inset, the homepage
 * - `expanded`: covers the window; the homepage button expands it before
 *   navigating, so it can briefly be expanded while still on the homepage
 * - `collapsing`: shrinking back after leaving the handbook, so the intro waits
 *   for it before showing
 */
export type FrameState = "collapsed" | "expanded" | "collapsing"

// Below `lg` the frame is only inset by a few pixels, so the full duration drags
export function getFrameTransitionMs() {
  return window.matchMedia("(min-width: 64rem)").matches ? 400 : 250
}

export const FrameContext = createContext<{
  state: FrameState
  expand: () => void
} | null>(null)

export function useFrame() {
  const ctx = useContext(FrameContext)
  if (!ctx) {
    throw new Error("useFrame must be wrapped within Frame")
  }
  return ctx
}
