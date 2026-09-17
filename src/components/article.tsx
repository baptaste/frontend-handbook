import type { ComponentProps } from "react"
import { cn } from "@/lib/utils/cn"

function Root({ className, children, ...props }: ComponentProps<"article">) {
  return (
    <article
      className={cn("min-h-dvh w-full space-y-12", className)}
      {...props}
    >
      {children}
    </article>
  )
}

function Header({ className, children, ...props }: ComponentProps<"header">) {
  return (
    <header className={cn("space-y-4", className)} {...props}>
      {children}
    </header>
  )
}

function Title({ className, children, ...props }: ComponentProps<"h1">) {
  return (
    <h1 className={cn("text-3xl font-bold", className)} {...props}>
      {children}
    </h1>
  )
}

function Info({ className, children, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </p>
  )
}

function Description({ className, children, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-pretty leading-7 tracking-wide", className)}
      {...props}
    >
      {children}
    </p>
  )
}

function Section({ className, children, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("space-y-6", className)} {...props}>
      {children}
    </section>
  )
}

function SectionHeader({
  className,
  children,
  ...props
}: ComponentProps<"header">) {
  return (
    <header className={cn("space-y-2", className)} {...props}>
      {children}
    </header>
  )
}

function SectionTitle({
  id,
  className,
  children,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2
      id={id}
      className={cn("text-xl font-bold scroll-mt-20", className)}
      {...props}
    >
      {children}
    </h2>
  )
}

function Heading({ className, children, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("text-lg font-medium", className)} {...props}>
      {children}
    </p>
  )
}

function Tags({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center flex-wrap gap-2 py-1", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function Code({ className, children, ...props }: ComponentProps<"pre">) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-lg border border-border bg-muted p-4 lg:p-6 font-mono text-sm leading-6",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  )
}

function Card({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "space-y-4 bg-card p-4 lg:p-6 rounded-lg border border-border",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const Article = {
  Root,
  Header,
  Title,
  Info,
  Description,
  Section,
  SectionHeader,
  SectionTitle,
  Heading,
  Tags,
  Code,
  Card,
}

export { Article }
