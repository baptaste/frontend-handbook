import { useLocation, useNavigate } from "@tanstack/react-router"
import { ChevronsUpDownIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover"
import { useRouteAnchors } from "./use-route-anchors"
import { useAnchorsObserver } from "./use-anchors-observer"
import type { RefObject } from "react"

export function PopoverNavigationAnchors({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>
}) {
  const navigate = useNavigate()
  const { hash } = useLocation()

  const anchors = useRouteAnchors()
  useAnchorsObserver(ref, anchors, (next) => {
    next ??= ""
    if (hash === next) return

    navigate({
      hash: next,
      replace: true,
      resetScroll: false,
      hashScrollIntoView: false,
    })
  })

  return (
    <Popover>
      <PopoverTrigger className="lg:hidden flex items-center ml-auto gap-2">
        On This Page <ChevronsUpDownIcon className="size-4 min-w-4" />
      </PopoverTrigger>
      <PopoverContent className="mr-4">
        <ul className="space-y-4">
          {anchors.map((anchor) => (
            <li key={anchor.id} data-anchor={anchor.id}>
              <a
                href={`#${anchor.id}`}
                className="flex flex-col justify-center min-h-8 text-base text-pretty"
              >
                {anchor.label}
              </a>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
