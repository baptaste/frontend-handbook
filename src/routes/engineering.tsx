import { Layout } from "@/components/layout"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/engineering")({
  component: RouteComponent,
})

function RouteComponent() {
  return <Layout>Hello "/engineering"!</Layout>
}
