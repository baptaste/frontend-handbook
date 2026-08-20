import { navigationRoutes } from "@/lib/navigation-routes"
import { Link } from "@tanstack/react-router"

export function Navigation() {
  return (
    <div className="space-y-2">
      {navigationRoutes.map((route) => (
        <Link
          key={route.path}
          to={route.path}
          className="h-8 text-xl lg:text-sm transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700 px-2 flex items-center rounded"
          activeProps={{
            className:
              "bg-neutral-200 hover:bg-neutral-200! dark:bg-neutral-700 dark:hover:bg-neutral-700!",
          }}
        >
          {route.label}
        </Link>
      ))}
    </div>
  )
}
