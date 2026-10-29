import { type RefObject, useEffect, useEffectEvent, useState } from "react"
import type { RouteAnchor } from "./use-route-anchors"

/**
 * Where in the scroll container a heading becomes "active", 20% from the top.
 * A short last section never lets its heading reach this line, so reaching the
 * bottom of the page activates the last heading instead.
 */
const ACTIVE_LINE = 0.2

// Tolerance for fractional scroll positions
const BOTTOM_THRESHOLD = 2

export function useAnchorsObserver(
  ref: RefObject<HTMLDivElement | null>,
  anchors: ReadonlyArray<RouteAnchor>,
  onChange?: (anchorId: string | null) => void,
) {
  const [anchorId, setAnchorId] = useState<string | null>(null)

  const onAnchorChange = useEffectEvent((next: string | null) =>
    onChange?.(next),
  )

  useEffect(() => {
    const root = ref.current
    if (!root || anchors.length === 0) return

    const targets = anchors
      .map((anchor) =>
        root.querySelector<HTMLElement>(`#${CSS.escape(anchor.id)}`),
      )
      .filter((target) => target !== null)

    // Prevents unnecessary state updates. Undefined until the first check, which
    // therefore always writes, clearing the previous page's anchor
    let current: string | null | undefined

    const update = () => {
      const line =
        root.getBoundingClientRect().top + root.clientHeight * ACTIVE_LINE
      // A page too short to scroll starts at its bottom: keep it on the line rule
      const atBottom =
        root.scrollTop > 0 &&
        root.scrollTop + root.clientHeight >=
          root.scrollHeight - BOTTOM_THRESHOLD

      let active: string | null = null

      if (atBottom) {
        active = targets.at(-1)?.id ?? null
      } else {
        for (const t of targets) {
          if (t.getBoundingClientRect().top > line) break
          active = t.id
        }
      }

      if (active === current) return
      current = active

      setAnchorId(active)
      onAnchorChange(active)
    }

    // Wait a frame for the router to reset the scroll after a page change: run
    // now, the old position would pick an anchor, and syncing its hash to the
    // URL would cancel that reset
    const frame = requestAnimationFrame(update)
    root.addEventListener("scroll", update, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      root.removeEventListener("scroll", update)
    }
  }, [ref, anchors])

  return [anchorId, setAnchorId] as const
}
