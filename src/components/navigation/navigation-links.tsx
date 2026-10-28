import { Link } from "@tanstack/react-router"
import { ArrowUpRightIcon } from "lucide-react"

import { routesConfig } from "@/lib/utils/routes"

export function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="space-y-4 lg:space-y-2">
      {routesConfig.map((route) => (
        <Link
          key={route.path}
          to={route.path}
          onClick={onNavigate}
          className="group h-8 text-xl font-medium text-neutral-950 dark:text-neutral-50 lg:text-sm transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700 px-2 flex items-center rounded"
          activeProps={{
            className:
              "bg-neutral-200 hover:bg-neutral-200! dark:bg-neutral-700 dark:hover:bg-neutral-700!",
          }}
        >
          {route.label}
          <ArrowUpRightIcon className="opacity-0 group-hover:opacity-100 transition-opacity size-4 min-w-4 ml-auto" />
        </Link>
      ))}
    </div>
  )
}
