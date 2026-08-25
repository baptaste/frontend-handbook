import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/projects/investment-platform")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>TODO</div>
}
