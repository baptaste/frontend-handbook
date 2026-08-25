import { createFileRoute } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Documentation,
  DocumentationBlock,
  DocumentationBlockCard,
  DocumentationBlockHeader,
  DocumentationBlockHeading,
  DocumentationBlockInfo,
  DocumentationBlockList,
  DocumentationBlockTitle,
  DocumentationDescription,
  DocumentationHeader,
  DocumentationInfo,
  DocumentationTitle,
} from "@/components/documentation"

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
})

function ExperienceAchievement({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div key={label} className="space-y-1">
      <p className="text-neutral-900 dark:text-neutral-50">{label}</p>
      <p>{children}</p>
    </div>
  )
}

function RouteComponent() {
  return (
    <Documentation>
      <DocumentationHeader>
        <DocumentationTitle>Experience</DocumentationTitle>
        <DocumentationInfo>
          Five years of building frontend products, from individual features to
          complex applications.
        </DocumentationInfo>
      </DocumentationHeader>

      <DocumentationBlock>
        <DocumentationBlockHeader>
          <DocumentationBlockTitle>2023 — today</DocumentationBlockTitle>
          <DocumentationBlockInfo>
            Frontend Engineer, Tudigo
          </DocumentationBlockInfo>
          <DocumentationBlockList>
            <Badge variant="secondary">Fintech</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Monorepo</Badge>
          </DocumentationBlockList>
        </DocumentationBlockHeader>

        <DocumentationDescription>
          I worked on the frontend of a complex investment platform, with a
          strong focus on usability, performance and maintainability.
        </DocumentationDescription>

        <DocumentationBlockHeading>What I worked on</DocumentationBlockHeading>
        <DocumentationBlockCard>
          <ExperienceAchievement label="Product">
            Built and evolved user-facing features used across the investment
            platform.
          </ExperienceAchievement>
          <ExperienceAchievement label="Architecture">
            Designed reusable frontend patterns for complex and highly
            interactive interfaces.
          </ExperienceAchievement>
          <ExperienceAchievement label="Data">
            Worked extensively with asynchronous data, caching, filtering and
            search.
          </ExperienceAchievement>
          <ExperienceAchievement label="UX">
            Translated product requirements and designs into polished responsive
            interfaces.
          </ExperienceAchievement>
          <ExperienceAchievement label="Mentoring">
            Onboarded new developers and helped juniors.
          </ExperienceAchievement>
        </DocumentationBlockCard>
      </DocumentationBlock>

      <DocumentationBlock>
        <DocumentationBlockHeader>
          <DocumentationBlockTitle>2022</DocumentationBlockTitle>
          <DocumentationBlockInfo>
            Frontend Engineer, Feelity
          </DocumentationBlockInfo>
          <DocumentationBlockList>
            <Badge variant="secondary">React Native</Badge>
            <Badge variant="secondary">Angular</Badge>
            <Badge variant="secondary">Mobile Apps</Badge>
          </DocumentationBlockList>
        </DocumentationBlockHeader>

        <DocumentationDescription>
          I worked on several projects for clients of a digital agency. <br />
          The projects were mainly mobile apps that are heavily focused on the
          IoT, such as a remote configurator for pools or an app for controlling
          connected heated motorcycle gloves. <br /> I also worked on an
          educational web platform for employees designed to support cancer
          screening.
        </DocumentationDescription>
      </DocumentationBlock>

      <DocumentationBlock>
        <DocumentationBlockHeader>
          <DocumentationBlockTitle>2021</DocumentationBlockTitle>
          <DocumentationBlockInfo>
            Frontend Engineer, LibNGo
          </DocumentationBlockInfo>
          <DocumentationBlockList>
            <Badge variant="secondary">Svelte</Badge>
            <Badge variant="secondary">SvelteKit</Badge>
            <Badge variant="secondary">PWA</Badge>
          </DocumentationBlockList>
        </DocumentationBlockHeader>
        <DocumentationDescription>
          I worked on the frontend of a startup's web platform designed to
          connect physiotherapists. I've built and evolved several different
          things like the hompage, the search page and the user dashboard. I've
          also turned the plateform into a progressive web app with offline
          support and push notifications.
        </DocumentationDescription>
      </DocumentationBlock>
    </Documentation>
  )
}
