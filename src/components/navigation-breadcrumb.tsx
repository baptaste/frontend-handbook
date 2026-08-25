import { Link, useLocation } from "@tanstack/react-router"
import { Fragment } from "react/jsx-runtime"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import { useLayout } from "./layout/use-layout"
import { getCurrentRoute, getParentRoutes } from "@/lib/utils/routes"

export function NavigationBreadcrumb() {
  const { pathname } = useLocation()
  const { setState } = useLayout()

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem onClick={() => setState("out")}>
          <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
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
