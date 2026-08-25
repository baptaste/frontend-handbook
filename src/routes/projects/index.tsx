import {
  Documentation,
  DocumentationBlock,
  DocumentationBlockCard,
  DocumentationBlockHeader,
  DocumentationBlockInfo,
  DocumentationBlockList,
  DocumentationBlockTitle,
  DocumentationHeader,
  DocumentationInfo,
  DocumentationTitle,
} from "@/components/documentation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowRightIcon } from "lucide-react"

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Documentation>
      <DocumentationHeader>
        <DocumentationTitle>Projects</DocumentationTitle>
        <DocumentationInfo>
          A selection of products and problems I've worked on.
        </DocumentationInfo>
      </DocumentationHeader>

      <DocumentationBlock>
        <DocumentationBlockCard>
          <DocumentationBlockHeader>
            <DocumentationBlockTitle>
              Tudigo — Investment platform
            </DocumentationBlockTitle>
            <DocumentationBlockInfo>
              A complex web application for managing and discovering
              investments.
            </DocumentationBlockInfo>
            <DocumentationBlockInfo>
              Role: Frontend Engineer
            </DocumentationBlockInfo>
            <DocumentationBlockList>
              <Badge variant="outline">Fintech</Badge>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Vite</Badge>
              <Badge variant="outline">Monorepo</Badge>
              <Badge variant="outline">TanStack</Badge>
              <Badge variant="outline">Algolia</Badge>
            </DocumentationBlockList>
          </DocumentationBlockHeader>

          <Link to="/projects/investment-platform">
            <Button>
              <ArrowRightIcon />
              Read case study
            </Button>
          </Link>
        </DocumentationBlockCard>
      </DocumentationBlock>
    </Documentation>
  )
}
