import { Link } from "@tanstack/react-router"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { NavigationLinks } from "./navigation-links"
import { useLayout } from "./layout/use-layout"
import { ThemeToggler } from "./theme-toggler"
import { cn } from "@/lib/utils/cn"

export function Navbar({ className }: { className?: string }) {
  const { setState } = useLayout()

  return (
    <div
      className={cn(
        "z-navbar sticky top-0 h-14 px-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between",
        className,
      )}
    >
      <Link
        to="/"
        onClick={() => setState("out")}
        className="text-neutral-950 dark:text-neutral-50"
      >
        Frontend Handbook
      </Link>

      <Popover>
        <PopoverTrigger className="lg:hidden text-lg dark:text-neutral-50 text-neutral-950">
          Menu
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={16}
          alignOffset={-24}
          className="z-50 -ml-1 w-screen h-[calc(100dvh-56px)] dark:bg-neutral-950 dark:text-neutral-50 text-neutral-950 bg-neutral-50 rounded-none"
        >
          <NavigationLinks />
        </PopoverContent>
      </Popover>

      <ThemeToggler />
    </div>
  )
}
