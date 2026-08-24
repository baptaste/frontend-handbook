import { cn } from "@/lib/utils"
import type { ComponentProps, ReactNode } from "react"

function Documentation({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("min-h-dvh w-full space-y-10", className)} {...props}>
      {children}
    </div>
  )
}

function DocumentationTitle({
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

function DocumentationInfo({
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

function DocumentationHeader({
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

function DocumentationBlock({ children }: { children: ReactNode }) {
  return <section className="space-y-6">{children}</section>
}

function DocumentationBlockHeader({ children }: { children: ReactNode }) {
  return <header className="space-y-2">{children}</header>
}

function DocumentationBlockTitle({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-neutral-950 dark:text-neutral-50 font-bold">
      {children}
    </h4>
  )
}

function DocumentationBlockInfo({ children }: { children: ReactNode }) {
  return <p>{children}</p>
}

function DocumentationBlockList({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-2">{children}</div>
}

function DocumentationDescription({ children }: { children: ReactNode }) {
  return <p className="max-w-lg text-pretty">{children}</p>
}

function DocumentationBlockHeading({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-neutral-950 dark:text-neutral-50">{children}</p>
  )
}

function DocumentationBlockCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4 lg:p-6">
      <div className="space-y-2">{children}</div>
    </div>
  )
}

export {
  Documentation,
  DocumentationHeader,
  DocumentationTitle,
  DocumentationInfo,
  DocumentationBlock,
  DocumentationBlockHeader,
  DocumentationBlockTitle,
  DocumentationBlockInfo,
  DocumentationBlockList,
  DocumentationDescription,
  DocumentationBlockHeading,
  DocumentationBlockCard,
}
