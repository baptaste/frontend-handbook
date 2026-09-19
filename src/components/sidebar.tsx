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
        "hidden lg:block sticky top-14 bottom-0 min-h-[calc(100dvh-56px)] h-full",
        "data-[side=left]:left-0 data-[side=left]:border-r border-neutral-200 dark:border-neutral-800 data-[side=right]:border-none data-[side=right]:right-0",
        className,
      )}
    >
      <div className="p-4">{children}</div>
    </aside>
  )
}
