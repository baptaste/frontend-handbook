import { Link, createFileRoute } from "@tanstack/react-router"
import { Article } from "@/components/article"
import { Badge } from "@/components/ui/badge"

export const Route = createFileRoute("/experience")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Article.Root>
      <Article.Header>
        <Article.Title>Experience</Article.Title>
        <Article.Description>
          Five years of building frontend products, from individual features to
          complex applications.
        </Article.Description>
      </Article.Header>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>
            Tudigo — Frontend Engineer
          </Article.SectionTitle>
          <Article.Info>March 2023 – Present</Article.Info>
          <Article.Info>Bordeaux, France · Hybrid / Full remote</Article.Info>
          <Article.Tags>
            <Badge variant="secondary">Fintech</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Monorepo</Badge>
            <Badge variant="secondary">Architecture</Badge>
          </Article.Tags>
        </Article.SectionHeader>

        <Article.Description>
          Regulated{" "}
          <Link to="/projects/investment-platform" className="pretty-link">
            investment platform
          </Link>{" "}
          (240M€+ invested, 250K+ users). Seven months in, helped drive the
          platform's migration off a legacy micro-frontend architecture and
          scaffolded the monorepo it still runs on today — project structure,
          module boundaries and library choices — alongside the CTO. Worked
          across the full product since, from feature work to platform-wide
          reliability and toolchain improvements. Onboarded new hires into the
          codebase and mentored junior engineers as the team consolidated to a
          small senior core.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>
            Feelity – Frontend Engineer
          </Article.SectionTitle>
          <Article.Info>September 2022 – March 2023</Article.Info>
          <Article.Info>Bègles, France · On-site</Article.Info>
          <Article.Tags>
            <Badge variant="secondary">Digital Agency</Badge>
            <Badge variant="secondary">React Native</Badge>
            <Badge variant="secondary">IoT</Badge>
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
          <Article.SectionTitle>
            LibNGo – Frontend Engineer
          </Article.SectionTitle>
          <Article.Info>December 2021 – August 2022</Article.Info>
          <Article.Info>Talence, France · Hybrid</Article.Info>
          <Article.Tags>
            <Badge variant="secondary">Startup</Badge>
            <Badge variant="secondary">Svelte</Badge>
            <Badge variant="secondary">PWA</Badge>
          </Article.Tags>
        </Article.SectionHeader>
        <Article.Description>
          Work-study program during which I worked on the frontend of a
          startup's web platform designed to connect physiotherapists. I've
          built and evolved several different things like the hompage, the
          search page and the user dashboard. I've also turned the plateform
          into a progressive web app with offline support and push
          notifications.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>Learning to code</Article.SectionTitle>
          <Article.Info>December 2019 – September 2021</Article.Info>
          <Article.Info>Bordeaux, France · Remote</Article.Info>
          <Article.Tags>
            <Badge variant="secondary">Self-taught</Badge>
            <Badge variant="secondary">Intensive training</Badge>
            <Badge variant="secondary">JavaScript</Badge>
          </Article.Tags>
        </Article.SectionHeader>
        <Article.Description>
          I taught myself to code first — online courses, written tutorials and
          side projects, working through the fundamentals on my own. I then
          consolidated that into an intensive, fully remote fullstack JavaScript
          program at O'clock, specializing in front-end a little before the end
          of it, and came out straight into the work-study contract above.
        </Article.Description>
      </Article.Section>
    </Article.Root>
  )
}
