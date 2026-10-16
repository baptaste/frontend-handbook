import { type RefObject, useEffect, useEffectEvent, useState } from "react"
import type { RouteAnchor } from "./use-route-anchors"

/**
 * Where in the scroll container a heading becomes "active", 20% from the top.
 * Coupled to the `main` bottom padding in `layout.tsx`, which has to leave the
 * remaining 80% below the last heading so it can reach this line.
 */
const ACTIVE_LINE = 0.2

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

    // prevents unnecessary state update
    let current: string | null = null

    const observer = new IntersectionObserver(
      () => {
        const line =
          root.getBoundingClientRect().top + root.clientHeight * ACTIVE_LINE

        let active: string | null = null

        for (const t of targets) {
          if (t.getBoundingClientRect().top > line) break
          active = t.id
        }

        if (active === current) return
        current = active

        setAnchorId(active)
        onAnchorChange(active)
      },
      {
        root,
        threshold: 0,
        rootMargin: `0px 0px -${(1 - ACTIVE_LINE) * 100}% 0px`,
      },
    )

    for (const t of targets) observer.observe(t)

    return () => observer.disconnect()
  }, [ref, anchors])

  return [anchorId, setAnchorId] as const
}
