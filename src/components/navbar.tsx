import { Link } from "@tanstack/react-router"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Navigation } from "./navigation"

export function Navbar() {
  return (
    <div className="z-navbar sticky top-0 h-14 px-6 border-b border-neutral-200 dark:border-neutral-900 bg-neutral-950 flex items-center justify-between">
      <Link
        to="/"
        className="lg:dark:hover:text-white text-lg lg:text-base lg:hover:text-neutral-950 dark:text-neutral-50 transition-colors"
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
          <Navigation />
        </PopoverContent>
      </Popover>
    </div>
  )
}
