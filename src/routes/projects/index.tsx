import { Link, createFileRoute } from "@tanstack/react-router"
import { ArrowRightIcon } from "lucide-react"
import { Article } from "@/components/article"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/projects/")({
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
            <Article.SectionTitle>
              Tudigo — Investment platform
            </Article.SectionTitle>
            <Article.Info>
              A complex web application for managing and discovering
              investments.
            </Article.Info>
            <Article.Info>Role: Frontend Engineer</Article.Info>
            <Article.Tags>
              <Badge variant="outline">Fintech</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Vite</Badge>
              <Badge variant="outline">Monorepo</Badge>
              <Badge variant="outline">TanStack</Badge>
              <Badge variant="outline">Algolia</Badge>
            </Article.Tags>
          </Article.SectionHeader>

          <Link to="/projects/investment-platform">
            <Button>
              <ArrowRightIcon />
              Read case study
            </Button>
          </Link>
        </Article.Card>
      </Article.Section>
    </Article.Root>
  )
}
