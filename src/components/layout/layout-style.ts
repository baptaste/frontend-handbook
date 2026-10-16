import { cn } from "../../lib/utils/cn"

export type LayoutAnimation = "off" | "in" | "out"

const OFF_STYLE = "opacity-0 pointer-events-none"

export function getLayoutClassNames(state: LayoutAnimation): {
  navbar: string
  leftSidebar: string
  rightSidebar: string
} {
  return {
    navbar: cn(
      state === "off" && OFF_STYLE,
      state === "in" && "animate-enter-from-top pointer-events-auto",
      state === "out" && "animate-leave-from-top pointer-events-none",
    ),
    leftSidebar: cn(
      "lg:col-span-1",
      state === "off" && OFF_STYLE,
      state === "in" && "animate-enter-from-left pointer-events-auto",
      state === "out" && "animate-leave-from-left pointer-events-none",
    ),
    rightSidebar: cn(
      "lg:col-span-1",
      state === "off" && OFF_STYLE,
      state === "in" && "animate-enter-from-right pointer-events-auto",
      state === "out" && "animate-leave-from-right pointer-events-none",
    ),
  }
}
