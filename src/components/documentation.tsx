import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

export function DocumentationTitle({
  className,
  children,
  ...props
}: ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-2xl font-bold dark:text-neutral-50 text-neutral-950",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export function DocumentationInfo({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("", className)} {...props}>
      {children}
    </p>
  )
}

export function DocumentationHeader({
  className,
  children,
  ...props
}: ComponentProps<"header">) {
  return (
    <header className={cn("space-y-4", className)} {...props}>
      {children}
    </header>
  )
}
