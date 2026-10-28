import { Link, useLocation } from "@tanstack/react-router"
import { Fragment } from "react/jsx-runtime"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"
import { getCurrentRoute, getParentRoutes } from "@/lib/utils/routes"

export function NavigationBreadcrumb() {
  const { pathname } = useLocation()

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link to="/" />}>Introduction</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {getParentRoutes(pathname).map((route) => (
          <Fragment key={route.path}>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to={route.path} />}>
                {route.label}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
          </Fragment>
        ))}

        <BreadcrumbItem>
          <BreadcrumbPage>{getCurrentRoute(pathname)?.label}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
