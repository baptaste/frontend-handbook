import { useLocation, useMatches, useNavigate } from "@tanstack/react-router"
import {
  type RefObject,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react"
import { cn } from "@/lib/utils/cn"

type Anchor = { id: string; label: string }

/**
 * Where in the scroll container a heading becomes "active" — 20% from the top.
 * Coupled to the `main` bottom padding in `layout.tsx`, which has to leave the
 * remaining 80% below the last heading so it can reach this line.
 */
const ACTIVE_LINE = 0.2

export function useRouteAnchors(): ReadonlyArray<Anchor> {
  return useMatches().at(-1)?.staticData.anchors ?? []
}

function useAnchorsObserver(
  ref: RefObject<HTMLDivElement | null>,
  anchors: ReadonlyArray<Anchor>,
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

export function NavigationAnchors({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>
}) {
  const navigate = useNavigate()
  const { hash } = useLocation()

  const anchors = useRouteAnchors()
  const listRef = useRef<HTMLUListElement | null>(null)

  const [anchorId, setAnchorId] = useAnchorsObserver(ref, anchors, (next) => {
    next ??= ""
    if (hash === next) return

    navigate({
      hash: next,
      replace: true,
      resetScroll: false,
      hashScrollIntoView: false,
    })
  })

  const active = anchorId
    ? listRef.current?.querySelector<HTMLElement>(
        `[data-anchor="${CSS.escape(anchorId)}"]`,
      )
    : null
  const indicator = {
    top: active?.offsetTop ?? 0,
    height: active?.offsetHeight ?? 0,
  }

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
        On This Page
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-[2.15px] bg-muted" />
        <div
          className="absolute left-0 w-[2.15px] bg-foreground transition-all duration-200 ease-out"
          style={{
            height: indicator.height,
            transform: `translateY(${indicator.top}px)`,
          }}
        />

        <ul ref={listRef} className="flex flex-col gap-y-4 ml-4">
          {anchors.map((anchor) => (
            <li key={anchor.id} data-anchor={anchor.id}>
              <a
                href={`#${anchor.id}`}
                onClick={() => setAnchorId(anchor.id)}
                className={cn(
                  "text-sm w-full text-pretty text-muted-foreground transition-colors",
                  anchor.id === anchorId && "text-foreground",
                )}
              >
                {anchor.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
