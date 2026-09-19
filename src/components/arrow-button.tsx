import { ArrowUpRightIcon } from "lucide-react"
import { Button } from "./ui/button"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils/cn"

export function ArrowButton({
  className,
  children,
  ...props
}: ComponentProps<typeof Button>) {
  return (
    <Button className={cn("group", className)} {...props}>
      {children}
      <ArrowUpRightIcon className="size-4 min-w-4 opacity-0 -ml-5.5 group-hover:ml-0 group-hover:opacity-100 ease-out transition-all" />
    </Button>
  )
}
