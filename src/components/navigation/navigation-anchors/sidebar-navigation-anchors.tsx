import { useLocation, useNavigate } from "@tanstack/react-router"
import { type RefObject, useRef } from "react"
import { useRouteAnchors } from "./use-route-anchors"
import { useAnchorsObserver } from "./use-anchors-observer"
import { cn } from "@/lib/utils/cn"

export function SidebarNavigationAnchors({
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
                "text-sm text-pretty block text-muted-foreground hover:text-foreground transition-colors",
                anchor.id === anchorId && "text-foreground",
              )}
            >
              {anchor.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
