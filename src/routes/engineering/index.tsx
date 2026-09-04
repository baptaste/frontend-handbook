import { Link, createFileRoute } from "@tanstack/react-router"
import { ArrowRightIcon } from "lucide-react"
import type { LinkProps } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { Article } from "@/components/article"
import { Badge } from "@/components/ui/badge"

export const Route = createFileRoute("/engineering/")({
  component: RouteComponent,
})

type NoteProps = {
  title: string
  description: string
}

function NoteBody({
  title,
  description,
  trailing,
}: NoteProps & { trailing: ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Article.Heading>{title}</Article.Heading>
        {trailing}
      </div>
      <Article.Description>{description}</Article.Description>
    </div>
  )
}

function Note({ to, ...props }: NoteProps & { to: LinkProps["to"] }) {
  return (
    <Article.Card className="group">
      <Link to={to}>
        <NoteBody
          {...props}
          trailing={
            <ArrowRightIcon className="opacity-0 group-hover:opacity-100 transition-opacity size-5 min-w-5" />
          }
        />
      </Link>
    </Article.Card>
  )
}

function PlannedNote(props: NoteProps) {
  return (
    <Article.Card>
      <NoteBody {...props} trailing={<Badge variant="outline">Soon</Badge>} />
    </Article.Card>
  )
}

function RouteComponent() {
  return (
    <Article.Root>
      <Article.Header>
        <Article.Title>Engineering</Article.Title>
        <Article.Description>
          Opinionated notes on how I build interfaces — the principles I keep
          coming back to, and the decisions where they actually got tested.
        </Article.Description>
        <Article.Description>
          If there's a single thread, it's this: I optimize for change. Code is
          read far more than it's written, and it's changed more than either. So
          I lean toward the explicit over the clever, the reversible over the
          grand, and boundaries that stay honest as a system grows. I'd rather
          repeat a little and hide nothing.
        </Article.Description>
        <Article.Description>
          These notes are less "best practices" and more the specific opinions
          I've earned — each one anchored to a real decision, usually from a
          large fintech codebase where getting it wrong had consequences.
        </Article.Description>
        <Article.Description>
          I also learned this trade before a model could write it for me:
          courses and tutorials on my own, then an intensive program, then
          production code. I use AI every day now and I'd not go back. But
          having built the mechanics by hand is why I can usually tell when
          something plausible is quietly wrong — and that judgement is what
          these notes are made of.
        </Article.Description>
      </Article.Header>

      <Article.Section>
        <Note
          to="/engineering/architecture"
          title="Architecture"
          description="Where code should live, and what's allowed to depend on what."
        />

        <Note
          to="/engineering/state-management"
          title="State management"
          description="Whether a piece of state needs to exist at all, and where it goes when it does."
        />

        <PlannedNote
          title="Separation of concerns"
          description="The seams worth defending, the ones that only look like seams, and how to tell them apart before you commit."
        />

        <PlannedNote
          title="Code style"
          description="Functionnal programming and Repeat rather than abstract"
        />

        <PlannedNote
          title="User experience"
          description="The frontend owns the last mile. Most of what users experience as a bad product is an engineering decision wearing a disguise."
        />

        <PlannedNote
          title="Developer experience"
          description="Fast feedback, boring consistency, and the case for treating toolchain work as product work."
        />
      </Article.Section>
    </Article.Root>
  )
}
