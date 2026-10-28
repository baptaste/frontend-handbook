import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router"

import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import "../styles.css"
import { Layout } from "@/components/layout/layout"
import { Frame } from "@/components/frame/frame"
import { ThemeProvider } from "@/lib/hooks/use-theme"

export const Route = createRootRoute({
  head: () => ({
    meta: [{ title: "Baptiste Champbenoit - Frontend Handbook" }],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider>
      <HeadContent />
      <Frame>
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
      </Frame>
    </ThemeProvider>
  )
}
