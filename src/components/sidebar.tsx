import type { PropsWithChildren } from "react"
import { cn } from "@/lib/utils/cn"

export function Sidebar({
  children,
  className,
  side = "left",
}: PropsWithChildren<{ side?: "left" | "right"; className?: string }>) {
  return (
    <aside
      data-side={side}
      className={cn(
        "sticky top-18.5 bottom-0 min-h-[calc(100dvh-74px)] h-full pt-18.5",
        "data-[side=left]:left-0 border-neutral-200 dark:border-neutral-800 data-[side=right]:border-none data-[side=right]:right-0",
        className,
      )}
    >
      <div className="px-4 pb-4 pt-6">{children}</div>
    </aside>
  )
}
