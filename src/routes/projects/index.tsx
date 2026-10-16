import { Link, createFileRoute } from "@tanstack/react-router"
import { Article } from "@/components/article"
import { Badge } from "@/components/ui/badge"
import { ArrowButton } from "@/components/arrow-button"
import { pageTitle } from "@/lib/utils/page-title"

export const Route = createFileRoute("/projects/")({
  head: () => ({ meta: [{ title: pageTitle("Projects") }] }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Article.Root>
      <Article.Header>
        <Article.Title>Projects</Article.Title>
        <Article.Info>
          A selection of products and problems I've worked on.
        </Article.Info>
      </Article.Header>

      <Article.Section>
        <Article.Card>
          <Article.SectionHeader>
            <Article.SectionTitle id="investment-platform">
              Tudigo, Investment platform · Fintech
            </Article.SectionTitle>
            <Article.Tags>
              <Badge variant="secondary">Fintech</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Monorepo</Badge>
            </Article.Tags>
            <Article.Description className="mt-4">
              A 215K-line, three-app platform that has channeled 240M€+ into
              250+ companies, where a "small bug" can be a compliance problem.
              Three years of chasing trust-critical bugs, modernizing the
              toolchain, and holding a large codebase together as the team
              shrank around it.
            </Article.Description>
          </Article.SectionHeader>

          <Link to="/projects/investment-platform">
            <ArrowButton>Read the case study</ArrowButton>
          </Link>
        </Article.Card>
      </Article.Section>
    </Article.Root>
  )
}
