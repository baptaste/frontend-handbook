import { createFileRoute } from "@tanstack/react-router"
import { Article } from "@/components/article"
import { Badge } from "@/components/ui/badge"
import { externalPaths } from "@/lib/utils/external-paths"

const anchors = {
  work: { id: "work", label: "At work" },
  openTo: { id: "open-to", label: "Open to" },
  learning: { id: "learning", label: "Learning" },
  sideProjects: { id: "side-projects", label: "Side projects" },
  outsideOfWork: { id: "outside-of-work", label: "Outside of work" },
} as const

export const Route = createFileRoute("/now")({
  component: RouteComponent,
  staticData: { anchors: Object.values(anchors) },
})

function RouteComponent() {
  return (
    <Article.Root>
      <Article.Header>
        <Article.Title>Now</Article.Title>
        <Article.Info>Updated September 2026</Article.Info>
        <Article.Description>
          What I'm focused on at the moment. This page changes every few months.
        </Article.Description>
      </Article.Header>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.work.id}>
            {anchors.work.label}
          </Article.SectionTitle>
          <Article.Tags>
            <Badge variant="secondary">Search</Badge>
            <Badge variant="secondary">Refactoring</Badge>
          </Article.Tags>
        </Article.SectionHeader>

        <Article.Description>
          I recently rebuilt the web app's home page: the search page for
          ongoing projects and the page for financed ones. As part of that, I
          removed the Algolia integration entirely and replaced it with an
          in-house search, front and back, so we no longer pay for Algolia.
        </Article.Description>
        <Article.Description>
          Earlier this quarter, I reworked the Investments pages of the investor
          dashboard. It was a big refactor, done to make it simpler for
          investors to track their investments and subscriptions.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.openTo.id}>
            {anchors.openTo.label}
          </Article.SectionTitle>
        </Article.SectionHeader>

        <Article.Description>
          I'm open to new opportunities: frontend roles, or fullstack when the
          backend runs on Node. Full remote, or hybrid in Bordeaux.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.learning.id}>
            {anchors.learning.label}
          </Article.SectionTitle>
          <Article.Tags>
            <Badge variant="secondary">TanStack Router</Badge>
            <Badge variant="secondary">Agentic coding</Badge>
          </Article.Tags>
        </Article.SectionHeader>

        <Article.Description>
          I'm learning TanStack Router, which this site is built on. I've used
          React Router for my whole career and I'm getting tired of it. I've
          already used TanStack Query and TanStack Table a lot and liked them,
          and the router feels more reliable to me, with great type safety and a
          better API overall. Developer experience matters a lot to me.
        </Article.Description>
        <Article.Description>
          For the last six months I've also been learning agentic coding, and
          I've been following AI research regularly for a while now.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.sideProjects.id}>
            {anchors.sideProjects.label}
          </Article.SectionTitle>
        </Article.SectionHeader>

        <Article.Description>
          This handbook is my current side project. Before it, I built and
          deployed a{" "}
          <a
            href={externalPaths.sideProjects.composableAutocomplete}
            rel="external"
            target="_blank"
            className="pretty-link"
          >
            composable autocomplete component
          </a>{" "}
          for React.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.outsideOfWork.id}>
            {anchors.outsideOfWork.label}
          </Article.SectionTitle>
        </Article.SectionHeader>

        <Article.Description>
          I spend time with family and friends and work on renovating the house.
          I'm also a big astronomy fan and listen to a lot of podcasts about it.
        </Article.Description>
      </Article.Section>
    </Article.Root>
  )
}
