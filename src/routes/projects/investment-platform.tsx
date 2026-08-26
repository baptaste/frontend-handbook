import { createFileRoute } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { Article } from "@/components/article"
import { Badge } from "@/components/ui/badge"

export const Route = createFileRoute("/projects/investment-platform")({
  component: RouteComponent,
})

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-1">
      <p className="text-foreground font-bold">{label}</p>
      <p>{children}</p>
    </div>
  )
}

function RouteComponent() {
  return (
    <Article.Root>
      <Article.Header>
        <Article.Title>Tudigo — Investment Platform</Article.Title>
        <Article.Info>
          Building and maintaining a 215K-line, three-app investment platform
          that has channeled 240M€+ into 250+ companies.
        </Article.Info>
        <Article.Tags>
          <Badge variant="secondary">Fintech</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Vite</Badge>
          <Badge variant="secondary">React Query</Badge>
          <Badge variant="secondary">Zustand</Badge>
          <Badge variant="secondary">Tailwind</Badge>
          <Badge variant="secondary">Monorepo</Badge>
        </Article.Tags>
      </Article.Header>

      <Article.Section>
        <Article.Card>
          <Fact label="Role">Frontend Engineer, 3.5 years</Fact>
          <Fact label="Domain">
            Regulated fintech · private-market investing
          </Fact>
          <Fact label="Platform">
            240M€+ invested · 250+ projects funded · 250K+ users
          </Fact>
          <Fact label="Codebase">
            215K+ lines · 3 apps · one shared monorepo
          </Fact>
          <Fact label="Team">One of ~3–5 engineers, down from ~12</Fact>
        </Article.Card>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>What Tudigo is</Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Info>
          Tudigo is a French investment platform that opens up a corner of
          finance most people never get access to: putting money directly into
          unlisted companies — startups, small businesses, and real-estate
          projects. Normally that world is reserved for professional investors.
          Tudigo lets anyone browse opportunities, subscribe, sign, and pay, all
          in one place.
        </Article.Info>
        <Article.Info>
          It's also a regulated financial service, and that changes how you
          build. On most products a bug is annoying. Here, a wrong amount or a
          broken signature step is a compliance problem, not just a bad
          experience. A lot of the job is making sure the boring things — money,
          identity, state — are always right.
        </Article.Info>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>The codebase I worked in</Article.SectionTitle>
          <Article.Info>
            Tudigo isn't one app. It's three products sharing a single
            foundation, all living in one 215K+ line monorepo.
          </Article.Info>
        </Article.SectionHeader>

        <Article.Card>
          <Fact label="Investor webapp">
            Where people discover projects and invest.
          </Fact>
          <Fact label="Back-office">
            The internal tool the team uses to run operations.
          </Fact>
          <Fact label="Embeddable widget">
            Drops Tudigo's investment flow into partner websites.
          </Fact>
        </Article.Card>

        <Article.Info>
          Underneath sits a large shared library system: a typed API client with
          secure authentication, a full set of domain models, theming and
          translations on the core side; and on the web side, dozens of feature
          modules plus the machinery that holds it together — a multi-step
          investment funnel, session handling, "spaces" (a user can act as
          themselves, a company, or an investment club), and analytics wired to
          a handful of external tools.
        </Article.Info>
        <Article.Info>
          The point isn't the tool list — it's that this is a big, shared,
          multi-team codebase. You can't ship a quick fix in a corner. Almost
          every change has to respect abstractions other people rely on, stay
          type-safe, and stay translatable. That constraint shaped most of what
          I did.
        </Article.Info>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>
            Three pieces of work I'm happy with
          </Article.SectionTitle>
        </Article.SectionHeader>

        <Article.Card>
          <Article.Heading>
            A logout that occasionally sent people back to the login screen
          </Article.Heading>
          <Article.Info>
            Sign-in state lived in two places that updated at different speeds —
            a token in a cookie, and the user's profile in local storage. On
            logout, the app sometimes navigated away before both had finished
            clearing, so for a split second it still thought you were partly
            signed in, and bounced you back to log in again.
          </Article.Info>
          <Article.Info>
            The fix itself was a few lines. The hard part was finding it. It was
            intermittent and left no error behind, so it came down to reasoning
            about ordering — which piece of state clears first, and what the
            router sees in between. I made logout wait until both were cleared
            before moving on. It's the kind of bug that quietly wears down trust
            in a financial product, and the kind you only catch by understanding
            how the system actually behaves, not by reading a stack trace.
          </Article.Info>
        </Article.Card>

        <Article.Card>
          <Article.Heading>
            Speeding up TypeScript without betting the whole codebase on it
          </Article.Heading>
          <Article.Info>
            Typechecking a codebase this size is slow, and slow feedback taxes
            everyone all day. I brought in the new native TypeScript compiler
            for typechecking, but ran it alongside the existing setup rather
            than swapping everything at once — linting, tests and builds kept
            using the proven path, and there was a clean way back if it didn't
            hold up.
          </Article.Info>
          <Article.Info>
            I like this one because the interesting decision wasn't technical,
            it was how to introduce it. On a codebase other people depend on
            every day, a big-bang migration is a gamble. Framing it as a small,
            reversible change let us get the speed win without asking anyone to
            trust it blindly.
          </Article.Info>
        </Article.Card>

        <Article.Card>
          <Article.Heading>
            Cleaning up UI debt across the whole repo
          </Article.Heading>
          <Article.Info>
            I ran a few sweeping migrations end to end: replacing an old button
            component with the design-system one everywhere, standardizing how
            dates are formatted on a single library, and pushing shared UI
            primitives in place of one-off markup — leaving no stragglers
            behind.
          </Article.Info>
          <Article.Info>
            None of this is glamorous, and that's sort of the point. In a
            codebase this large, consistency is a feature in its own right. It's
            the work that keeps a frontend from slowly drifting into a dozen
            slightly-different versions of the same thing, and I think it
            matters as much as building something new.
          </Article.Info>
        </Article.Card>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>Looking back</Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Info>
          I spent 3.5 years on Tudigo, and the role didn't stay still. I joined
          a team of around a dozen engineers, owning a slice of the product.
          Over time the team narrowed to a core of three to five — and my job
          widened to match. What used to be "my feature" became "large parts of
          the platform", and the work shifted from building in a lane to keeping
          a whole system healthy: knowing where the bodies were buried, making
          changes safely, and being one of the few people who could reason about
          how the pieces fit together. Part of that was bringing other people up
          to speed too — onboarding new developers into the codebase and
          mentoring junior engineers, so the knowledge didn't live only in a
          couple of heads.
        </Article.Info>
        <Article.Info>
          That's the part I'm proudest of. The interesting problems at Tudigo
          were rarely about building another screen. They were about timing,
          state and trust — making careful changes inside a large system that a
          lot of people, and 240M€+ of other people's money, depend on. Doing
          that well on a small team is a different kind of engineering than
          shipping features on a big one, and it's the kind I got better at
          here.
        </Article.Info>
      </Article.Section>
    </Article.Root>
  )
}
