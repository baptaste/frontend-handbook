import { Link, useLocation } from "@tanstack/react-router"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import { getCurrentRoute, getParentRoutes } from "@/lib/utils/routes"
import { Fragment } from "react/jsx-runtime"
import { useLayout } from "./layout/use-layout"

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
