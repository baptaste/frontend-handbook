import { Link, createFileRoute } from "@tanstack/react-router"
import type { ComponentProps } from "react"
import { Article } from "@/components/article"
import { externalPaths } from "@/lib/utils/external-paths"
import { pageTitle } from "@/lib/utils/page-title"

const anchors = {
  howIGotHere: { id: "how-i-got-here", label: "How I got here" },
  whatIUseItFor: { id: "what-i-use-it-for", label: "What I use it for" },
  cleanups: {
    id: "cleanups",
    label: "Cleanups we finally have time for",
  },
  whatIKeep: { id: "what-i-keep", label: "What I keep for myself" },
  whereItFallsShort: {
    id: "where-it-falls-short",
    label: "Where it still falls short",
  },
  howMyWorkChanged: {
    id: "how-my-work-changed",
    label: "How my work changed",
  },
  mySetup: { id: "my-setup", label: "My setup" },
  keepingUp: { id: "keeping-up", label: "Keeping up" },
  theLine: { id: "the-line", label: "The line I don't cross" },
} as const

export const Route = createFileRoute("/engineering/working-with-ai")({
  head: () => ({ meta: [{ title: pageTitle("Working with AI") }] }),
  component: RouteComponent,
  staticData: { anchors: Object.values(anchors) },
})

function ExternalLink(props: ComponentProps<"a">) {
  return <a rel="external" target="_blank" className="pretty-link" {...props} />
}

function RouteComponent() {
  return (
    <Article.Root>
      <Article.Header>
        <Article.Title>Working with AI</Article.Title>
        <Article.Info>Written October 2026</Article.Info>
        <Article.Description>
          How I went from autocomplete to agents, what I hand off, and the line
          I don't cross.
        </Article.Description>
      </Article.Header>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.howIGotHere.id}>
            {anchors.howIGotHere.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          I held off on AI tools for a while, on purpose. I was still a
          junior-to-intermediate developer, and I knew I had to keep learning
          and improving by myself before letting a tool write code for me.
        </Article.Description>
        <Article.Description>
          I started in 2024 with GitHub Copilot in VSCode, mostly for its
          autocompletion. It made me write code faster, and so ship faster. Once
          I'd jumped in, it was a one-way decision: I used it every day, and
          loved it, until I moved to agentic coding.
        </Article.Description>
        <Article.Description>
          I heard about agentic coding as soon as Cursor and Windsurf came out,
          but I'm not an early adopter. I saw what it could do during pair
          programming sessions with colleagues, and it was already impressive.
          It also made a lot of mistakes, and I felt the technology, powerful as
          it was, wasn't mature enough yet.
        </Article.Description>
        <Article.Description>
          I made the switch in early 2026, with Claude Code. I'd heard nothing
          but good things about it, and I'd watched coworkers use it, so I
          already knew the tool a little. Today I rarely need to correct its
          output, and that's a big part of why I jumped in.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.whatIUseItFor.id}>
            {anchors.whatIUseItFor.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          Pretty much the whole range now. Basic or repetitive code, larger
          parts of a feature, and sometimes a whole feature, which I plan with
          the agent first in plan mode. Debugging complex bugs. Refactors that
          would have been way too heavy to take on by hand.
        </Article.Description>
        <Article.Description>
          I also use it to automate routine work. My favorite is a command that
          takes my unstaged changes and commits them in groups of related
          changes. Another builds the apps before I push, which saves time and
          keeps the CI from failing on something I could have caught locally.
        </Article.Description>
        <Article.Description>
          I've tried MCP integrations too. I rarely reach for the Chrome one,
          but it can be really useful for debugging. The last time it was worth
          it was the logout bug on the{" "}
          <Link to="/projects/investment-platform" className="pretty-link">
            investment platform
          </Link>
          , where giving the agent access to the browser helped a lot in
          tracking it down.
        </Article.Description>
        <Article.Description>
          The Figma one I use sometimes, depending on how complex the
          integration is and whether existing components can be reused or it's a
          whole new one. The code it produces is always fine. The UI, about half
          the time, so I usually end up adjusting things myself or asking the
          agent to.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.cleanups.id}>
            {anchors.cleanups.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          On the{" "}
          <Link to="/projects/investment-platform" className="pretty-link">
            investment platform
          </Link>
          , a lot of legacy primitives coexisted with their newer replacements.
          Button was one of them, and migrating every legacy button to the new
          component was a task I'd had in mind for a long time. Hundreds of
          files, different props to map, at least a week of work.
        </Article.Description>
        <Article.Description>
          Without agents that kind of task is discouraging, especially with a
          product roadmap, deliveries and business priorities to keep up with.
          It's never the highest-ranked ticket on the Jira board. With an agent,
          it took me a single day.
        </Article.Description>
        <Article.Description>
          I think that's one of the most interesting benefits of AI. We never
          had time to clean up codebases. Now we do.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.whatIKeep.id}>
            {anchors.whatIKeep.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          When I hand off a whole feature, I still own the scaffolding, the{" "}
          <Link to="/engineering/architecture" className="pretty-link">
            architecture
          </Link>{" "}
          decisions and the folder structure. If I'm not satisfied with what
          comes back, I correct the model.
        </Article.Description>
        <Article.Description>
          And sometimes, less and less often to be honest, I still write the
          code myself. For tiny things, preparing the prompt can cost more time
          than just writing it.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.whereItFallsShort.id}>
            {anchors.whereItFallsShort.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          What still bothers me is over-engineering. It happens occasionally,
          and when it does I tell the agent to rewrite it. Code should be easy
          to read and stay maintainable over time.
        </Article.Description>
        <Article.Description>
          I could add a rule against it to my instructions. When I'm alone on a
          project, I write it once in the root instructions file. On a team
          project I'd have to repeat it every session, and that's easy to
          forget.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.howMyWorkChanged.id}>
            {anchors.howMyWorkChanged.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          Instead of spending my time writing code, I spend it writing prompts
          so an agent can write it, then reviewing the output, checking that it
          works, and repeating. I wouldn't say I spend more time reviewing than
          before, but I'm probably more careful when I do. And delivery is way
          faster, obviously.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.mySetup.id}>
            {anchors.mySetup.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          Claude Code, on the Pro plan. To keep token usage down I run{" "}
          <ExternalLink href={externalPaths.aiSources.rtk}>RTK</ExternalLink>, a
          CLI proxy that filters command output before it reaches the model.
        </Article.Description>
        <Article.Description>
          This site is built with Claude Code. The repository has a{" "}
          <code>CLAUDE.md</code> that describes the architecture and the
          conventions the agent has to follow, and the <code>/commit</code>{" "}
          command mentioned above. It also has a rule that the agent must not
          invent experiences, opinions or details for these notes. They come
          from my own material, and when something is missing the agent has to
          ask rather than fill the gap.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.keepingUp.id}>
            {anchors.keepingUp.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          I keep up with AI through people who share news regularly: dev
          newsletters and posts on X, YouTube channels like{" "}
          <ExternalLink href={externalPaths.aiSources.theo}>
            Theo (t3.gg)
          </ExternalLink>
          ,{" "}
          <ExternalLink href={externalPaths.aiSources.benjaminCode}>
            Benjamin Code
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href={externalPaths.aiSources.underscore}>
            Underscore
          </ExternalLink>
          , and French podcasts like{" "}
          <ExternalLink href={externalPaths.aiSources.ifThisThenDev}>
            If This Then Dev
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href={externalPaths.aiSources.doubleSlash}>
            Double Slash
          </ExternalLink>
          .
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.theLine.id}>
            {anchors.theLine.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          I always review the code the model produces. That's my job, and it's
          my responsibility.
        </Article.Description>
        <Article.Description>
          If I can't understand what the model gives me, it doesn't belong in
          production. I'd rather ship generated code I know I could fix or
          refactor myself later. I think that's an important line, and one we
          should never cross.
        </Article.Description>
      </Article.Section>
    </Article.Root>
  )
}
