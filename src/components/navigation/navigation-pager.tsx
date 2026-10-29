import { Link, useLocation } from "@tanstack/react-router"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils/cn"
import { getAdjacentRoutes } from "@/lib/utils/routes"

const LINK_STYLE =
  "group flex flex-col gap-1 rounded-lg border border-border lg:border-none w-full lg:w-fit p-4 transition-colors hover:bg-accent lg:hover:bg-inherit"

export function NavigationPager({ className }: { className?: string }) {
  const { pathname } = useLocation()
  const { previous, next } = getAdjacentRoutes(pathname)

  if (!previous && !next) return null

  return (
    <nav
      aria-label="Previous and next pages"
      className={cn(
        "flex flex-col lg:flex-row justify-between gap-4",
        className,
      )}
    >
      {previous && (
        <Link to={previous.path} className={LINK_STYLE}>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <ArrowLeftIcon className="size-4" />
            Previous
          </span>
          <span className="font-medium group-hover:text-muted-foreground transition-colors">
            {previous.label}
          </span>
        </Link>
      )}

      {next && (
        <Link
          to={next.path}
          className={cn(LINK_STYLE, "items-end text-right ml-auto")}
        >
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            Next
            <ArrowRightIcon className="size-4" />
          </span>
          <span className="font-medium group-hover:text-muted-foreground transition-colors">
            {next.label}
          </span>
        </Link>
      )}
    </nav>
  )
}
