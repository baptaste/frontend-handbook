import { Layout } from "@/components/layout"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Layout>
      <div className="h-screen w-full">Hello "/experience"!</div>
      <div className="bg-green-200 h-screen w-full" />
      <div className="bg-orange-200 h-screen w-full" />
      <div className="bg-pink-200 h-screen w-full" />
    </Layout>
  )
}
