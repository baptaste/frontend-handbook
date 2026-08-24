import { navigationRoutes } from "@/lib/navigation-routes"
import { Link } from "@tanstack/react-router"
import { useLayout } from "./layout"

export function Navigation() {
  const { setState } = useLayout()

  return (
    <div className="space-y-2">
      {navigationRoutes.map((route) => (
        <Link
          key={route.path}
          to={route.path}
          onClick={() => {
            if (route.path === "/") {
              setState("out")
            }
          }}
          className="h-8 text-xl font-medium text-neutral-950 dark:text-neutral-50 lg:text-sm transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700 px-2 flex items-center rounded"
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
