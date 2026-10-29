import { Link, useLocation, useRouter } from "@tanstack/react-router"
import { Fragment } from "react/jsx-runtime"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"
import {
  getCurrentRoute,
  getParentRoutes,
  isRootRoute,
} from "@/lib/utils/routes"

export function NavigationBreadcrumb({
  className,
  rootLabel = "Introduction",
  rootClassName,
  onNavigate,
}: {
  className?: string
  rootLabel?: string
  rootClassName?: string
  onNavigate?: () => void
}) {
  const router = useRouter()
  const { pathname } = useLocation()
  const isRoot = isRootRoute(pathname, router)

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            render={<Link to="/" />}
            className={rootClassName}
            onClick={onNavigate}
          >
            {rootLabel}
          </BreadcrumbLink>
        </BreadcrumbItem>

        {!isRoot && <BreadcrumbSeparator />}

        {getParentRoutes(pathname).map((route) => (
          <Fragment key={route.path}>
            <BreadcrumbItem>
              <BreadcrumbLink
                render={<Link to={route.path} />}
                onClick={onNavigate}
              >
                {route.label}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
          </Fragment>
        ))}

        {!isRoot && (
          <BreadcrumbItem>
            <BreadcrumbPage>{getCurrentRoute(pathname)?.label}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
