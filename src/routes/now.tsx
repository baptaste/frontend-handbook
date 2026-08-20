import { Layout } from "@/components/layout"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/now")({
  component: RouteComponent,
})

function RouteComponent() {
  return <Layout>Hello "/now"!</Layout>
}
