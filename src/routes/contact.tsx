import { Layout } from "@/components/layout"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
})

function RouteComponent() {
  return <Layout>Hello "/contact"!</Layout>
}
