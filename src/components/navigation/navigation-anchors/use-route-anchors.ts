import { useMatches } from "@tanstack/react-router"

export type RouteAnchor = { id: string; label: string }

export function useRouteAnchors(): ReadonlyArray<RouteAnchor> {
  return useMatches().at(-1)?.staticData.anchors ?? []
}
