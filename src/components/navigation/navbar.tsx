import { Link } from "@tanstack/react-router"
import { useRef, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

import { useLayout } from "../layout/use-layout"
import { ThemeToggler } from "../theme-toggler"
import { NavigationLinks } from "./navigation-links"
import { cn } from "@/lib/utils/cn"

export function Navbar({ className }: { className?: string }) {
  const { animate } = useLayout()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div
      ref={ref}
      className={cn(
        "z-navbar fixed top-0 left-0 right-0 h-14 px-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between",
        className,
      )}
    >
      <Link
        to="/"
        onClick={() => animate("out")}
        className="text-neutral-950 dark:text-neutral-50"
      >
        Frontend Handbook
      </Link>

      <div className="flex items-center gap-4">
        <ThemeToggler />

        <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <PopoverTrigger className="lg:hidden dark:text-neutral-50 text-neutral-950">
            Menu
          </PopoverTrigger>
          <PopoverContent
            anchor={ref}
            collisionPadding={0}
            align="start"
            sideOffset={0}
            className="z-50 ring-background dark:ring-neutral-950 overflow-y-hidden w-(--anchor-width) h-[calc(100dvh-56px)] dark:bg-neutral-950 dark:text-neutral-50 text-neutral-950 bg-neutral-50 rounded-none"
          >
            <NavigationLinks onNavigate={() => setIsMenuOpen(false)} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
