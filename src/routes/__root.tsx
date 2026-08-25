import { Outlet, createRootRoute } from "@tanstack/react-router"

import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import "../styles.css"
import { Layout } from "@/components/layout/layout"
import { LayoutProvider } from "@/components/layout/use-layout"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <LayoutProvider>
      <Layout>
        <Outlet />
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "TanStack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </Layout>
    </LayoutProvider>
  )
}
