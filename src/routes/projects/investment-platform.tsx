import {
  Documentation,
  DocumentationBlock,
  DocumentationBlockHeader,
  DocumentationBlockInfo,
  DocumentationBlockList,
  DocumentationBlockTitle,
  DocumentationHeader,
  DocumentationInfo,
  DocumentationTitle,
} from "@/components/documentation"
import { Badge } from "@/components/ui/badge"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/projects/investment-platform")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Documentation>
      <DocumentationHeader>
        <DocumentationTitle>Tudigo — Investment Platform</DocumentationTitle>
        <DocumentationInfo>
          A complex web application for managing and discovering investments.
        </DocumentationInfo>
      </DocumentationHeader>

      <DocumentationBlock>
        <DocumentationBlockHeader>
          <DocumentationBlockTitle>Context</DocumentationBlockTitle>
          <DocumentationBlockInfo>
            Investment platform for retail investors in private equity and
            crowdfunding — a regulated fintech where people back real companies
            with real money.
          </DocumentationBlockInfo>
          <DocumentationBlockInfo>
            Role: Frontend Engineer
          </DocumentationBlockInfo>
          <DocumentationBlockInfo>
            Focus: Architecture · Search · UX · Performance
          </DocumentationBlockInfo>
          <DocumentationBlockList>
            <Badge variant="secondary">Fintech</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Vite</Badge>
            <Badge variant="secondary">Monorepo</Badge>
            <Badge variant="secondary">React Router</Badge>
            <Badge variant="secondary">TanStack Query</Badge>
            <Badge variant="secondary">Algolia</Badge>
            <Badge variant="secondary">Tailwind</Badge>
            <Badge variant="secondary">Zustand</Badge>
          </DocumentationBlockList>
        </DocumentationBlockHeader>

        <DocumentationBlockTitle>The problem</DocumentationBlockTitle>
        <DocumentationInfo>
          Building an interface for investment data sounds straightforward.
          <br />
          It isn't.
          <br />
          Users need to navigate large datasets, combine multiple filters,
          change sorting, move between views and preserve their context while
          navigating through the application.
        </DocumentationInfo>
        <DocumentationInfo>
          The large Tudigo codebase is a monorepo of three surfaces: the
          investor webapp, an internal back-office, and an embeddable widget. It
          comes with its own set of challenges : systematic migrations across
          the monorepo — legacy buttons to the design-system component,
          consistent date formatting, shared separators — the unglamorous work
          that keeps a large codebase coherent.
        </DocumentationInfo>

        <DocumentationBlockTitle>Search & filtering</DocumentationBlockTitle>
        <DocumentationInfo>
          Search is more than an input. The interface combines:
          <ul>
            <li>• full-text search</li>
            <li>• refinements</li>
            <li>• sorting</li>
            <li>• pagination</li>
            <li>• URL state</li>
            <li>• default filters</li>
            <li>• persistent navigation state</li>
          </ul>
        </DocumentationInfo>

        <DocumentationInfo>
          The interesting part wasn't implementing each feature independently.
          <br />
          It was making all of them behave as one coherent system.
        </DocumentationInfo>
      </DocumentationBlock>
    </Documentation>
  )
}
