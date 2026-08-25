import { Outlet, createRootRoute } from "@tanstack/react-router"

import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import "../styles.css"
import { Layout } from "@/components/layout/layout"
import { LayoutProvider } from "@/components/layout/use-layout"
import { ThemeProvider } from "@/lib/hooks/use-theme"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}
