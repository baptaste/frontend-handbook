import type { ComponentProps } from "react"
import { cn } from "@/lib/utils/cn"

function Root({ className, children, ...props }: ComponentProps<"article">) {
  return (
    <article
      className={cn("min-h-dvh w-full space-y-10", className)}
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
    <p className={className} {...props}>
      {children}
    </p>
  )
}

function Description({ className, children, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("max-w-lg text-pretty", className)} {...props}>
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

function SectionTitle({ className, children, ...props }: ComponentProps<"h4">) {
  return (
    <h4 className={cn("text-xl font-bold", className)} {...props}>
      {children}
    </h4>
  )
}

function Heading({ className, children, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("mb-4 text-lg", className)} {...props}>
      {children}
    </p>
  )
}

function Tags({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      {children}
    </div>
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
  Card,
}

export { Article }
