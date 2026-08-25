import { createFileRoute } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { Article } from "@/components/article"
import { Badge } from "@/components/ui/badge"

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
    <Article.Root>
      <Article.Header>
        <Article.Title>Experience</Article.Title>
        <Article.Info>
          Five years of building frontend products, from individual features to
          complex applications.
        </Article.Info>
      </Article.Header>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>2023 — today</Article.SectionTitle>
          <Article.Info>Frontend Engineer, Tudigo</Article.Info>
          <Article.Tags>
            <Badge variant="secondary">Fintech</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Monorepo</Badge>
          </Article.Tags>
        </Article.SectionHeader>

        <Article.Description>
          I worked on the frontend of a complex investment platform, with a
          strong focus on usability, performance and maintainability.
        </Article.Description>

        <Article.Heading>What I worked on</Article.Heading>
        <Article.Card>
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
        </Article.Card>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>2022</Article.SectionTitle>
          <Article.Info>Frontend Engineer, Feelity</Article.Info>
          <Article.Tags>
            <Badge variant="secondary">React Native</Badge>
            <Badge variant="secondary">Angular</Badge>
            <Badge variant="secondary">Mobile Apps</Badge>
          </Article.Tags>
        </Article.SectionHeader>

        <Article.Description>
          I worked on several projects for clients of a digital agency. <br />
          The projects were mainly mobile apps that are heavily focused on the
          IoT, such as a remote configurator for pools or an app for controlling
          connected heated motorcycle gloves. <br /> I also worked on an
          educational web platform for employees designed to support cancer
          screening.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>2021</Article.SectionTitle>
          <Article.Info>Frontend Engineer, LibNGo</Article.Info>
          <Article.Tags>
            <Badge variant="secondary">Svelte</Badge>
            <Badge variant="secondary">SvelteKit</Badge>
            <Badge variant="secondary">PWA</Badge>
          </Article.Tags>
        </Article.SectionHeader>
        <Article.Description>
          I worked on the frontend of a startup's web platform designed to
          connect physiotherapists. I've built and evolved several different
          things like the hompage, the search page and the user dashboard. I've
          also turned the plateform into a progressive web app with offline
          support and push notifications.
        </Article.Description>
      </Article.Section>
    </Article.Root>
  )
}
