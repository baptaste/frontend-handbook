import { createFileRoute } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { Article } from "@/components/article"
import { Badge } from "@/components/ui/badge"
import { pageTitle } from "@/lib/utils/page-title"

const anchors = {
  whatTudigoIs: { id: "what-tudigo-is", label: "What Tudigo is" },
  theCodebase: { id: "the-codebase", label: "The codebase I worked in" },
  rebuildingTheFoundation: {
    id: "rebuilding-the-foundation",
    label: "Rebuilding the foundation",
  },
  workImHappyWith: {
    id: "work-im-happy-with",
    label: "Three pieces of work I'm happy with",
  },
  lookingBack: { id: "looking-back", label: "Looking back" },
} as const

export const Route = createFileRoute("/projects/investment-platform")({
  head: () => ({ meta: [{ title: pageTitle("Investment Platform") }] }),
  component: RouteComponent,
  staticData: { anchors: Object.values(anchors) },
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
        <Article.Title>Tudigo, Investment Platform</Article.Title>
        <Article.Description>
          Building and maintaining a 215K-line, three-app investment platform
          that has channeled 240M€+ into 250+ companies.
        </Article.Description>
        <Article.Tags>
          <Badge variant="secondary">Fintech</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Vite</Badge>
          <Badge variant="secondary">React Query</Badge>
          <Badge variant="secondary">Zustand</Badge>
          <Badge variant="secondary">Tailwind</Badge>
          <Badge variant="secondary">Nx</Badge>
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
          <Article.SectionTitle id={anchors.whatTudigoIs.id}>
            {anchors.whatTudigoIs.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          Tudigo is a French investment platform that opens up a corner of
          finance most people never get access to: putting money directly into
          unlisted companies, startups, small businesses, and real-estate
          projects. Normally that world is reserved for professional investors.
          Tudigo lets anyone browse opportunities, subscribe, sign, and pay, all
          in one place.
        </Article.Description>
        <Article.Description>
          It's also a regulated financial service, and that changes how you
          build. On most products a bug is annoying. Here, a wrong amount or a
          broken signature step is a compliance problem, not just a bad
          experience. A lot of the job is making sure the boring things, money,
          identity, state, are always right.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.theCodebase.id}>
            {anchors.theCodebase.label}
          </Article.SectionTitle>
          <Article.Description>
            Tudigo isn't one app. It's three products sharing a single
            foundation, all living in one 215K+ line monorepo, a monorepo that
            didn't exist when I joined.
          </Article.Description>
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

        <Article.Description>
          Underneath sits a large shared library system: a typed API client with
          secure authentication, a full set of domain models, theming and
          translations on the core side; and on the web side, dozens of feature
          modules plus the machinery that holds it together, a multi-step
          investment funnel, session handling, "spaces" (a user can act as
          themselves, a company, or an investment club), and analytics wired to
          a handful of external tools.
        </Article.Description>
        <Article.Description>
          The point isn't the tool list; it's that this is a big, shared,
          multi-team codebase. You can't ship a quick fix in a corner. Almost
          every change has to respect abstractions other people rely on, stay
          type-safe, and stay translatable. That constraint shaped most of what
          I did.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.rebuildingTheFoundation.id}>
            {anchors.rebuildingTheFoundation.label}
          </Article.SectionTitle>
          <Article.Description>
            Everything described above, the three apps, the shared library
            system, the boundaries between them, is a structure I helped design
            and stand up. It's the largest piece of work I was part of at
            Tudigo.
          </Article.Description>
        </Article.SectionHeader>

        <Article.Description>
          The platform originally ran as a legacy micro-frontend setup:
          somewhere around eight to ten React apps of varying size and
          responsibility, each built and deployed separately. Low-level
          primitives did have a home, buttons, alerts and the like lived in a
          dedicated app the others consumed. What had no home was anything above
          that layer. A larger component, assembled from several primitives,
          existed once per app that used it. One of those might live in three
          places, which meant making the same edit three times, keeping three
          copies in step, and having no way to be sure they hadn't drifted until
          it was in production.
        </Article.Description>
        <Article.Description>
          Getting to the point where you could make that edit was its own
          project. Several Docker containers had to be brought up before every
          coding session, and a local database that steadily drifted from
          production had to be topped up by hand to stay realistic enough to
          work against. It made onboarding slow, a new engineer spent days on
          setup before touching a feature, and added a fixed cost to the start
          of everyone else's day.
        </Article.Description>
        <Article.Description>
          In the autumn of 2023, seven months after I joined, a new CTO took
          over and made the call to collapse all of it into a single Nx
          monorepo, consolidating those apps into the three products described
          above. The decision was his. Building it was the two of us: we worked
          out the repo structure together, and the library choices got argued
          out between us, first commit in October 2023.
        </Article.Description>
        <Article.Description>
          I pushed for TanStack Query, React Query at the time, to own server
          state, and for carrying Tailwind over from the legacy rather than
          reaching for something new. I chose Zustand for client state instead
          of the Redux we'd been running. Later, with the monorepo well into
          development but not yet in front of anyone, I brought in shadcn as our
          component primitives.
        </Article.Description>
        <Article.Description>
          The judgement call wasn't "micro-frontends are bad." They weren't;
          they were a reasonable answer to a question the company had stopped
          asking. Independent deploys buy you team autonomy, and that's worth
          real complexity when you have a dozen engineers spread across separate
          products. It stops being worth it when the same few people touch every
          app, you keep paying the coordination cost and no longer collect the
          benefit. Choosing the architecture that matched the team we actually
          had, rather than the one we used to have, was most of the decision.
        </Article.Description>
        <Article.Description>
          We shipped it in one go. The rule we set was that every feature the
          legacy platform had needed to exist in the new one before any of it
          went out, so we took the time that took, about six months, and cut all
          three apps over together in April 2024. No gradual rollout, no period
          of running both. That's a demanding way to work on a regulated
          product, and it was the tensest stretch of my time at Tudigo. It was
          also the most satisfying: after six months of building against a
          moving target, seeing all three apps live and behaving is a feeling I
          haven't had before or since.
        </Article.Description>
        <Article.Description>
          The structure held. Two years on it's still the shape of the platform,
          and everything else on this page, the funnel, the shared domain
          models, the sweeping migrations, the compiler swap, was possible
          because there was now one repo where a change could be made once and
          land everywhere. The composed component that used to exist three times
          exists once.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.workImHappyWith.id}>
            {anchors.workImHappyWith.label}
          </Article.SectionTitle>
        </Article.SectionHeader>

        <Article.Card>
          <Article.Heading>
            A logout that occasionally sent people back to the login screen
          </Article.Heading>
          <Article.Description>
            Sign-in state lived in two places that updated at different speeds:
            a token in a cookie, and the user's profile in local storage. On
            logout, the app sometimes navigated away before both had finished
            clearing, so for a split second it still thought you were partly
            signed in, and bounced you back to log in again.
          </Article.Description>
          <Article.Description>
            The fix itself was a few lines. The hard part was finding it. It was
            intermittent and left no error behind, so it came down to reasoning
            about ordering, which piece of state clears first, and what the
            router sees in between. I made logout wait until both were cleared
            before moving on. It's the kind of bug that quietly wears down trust
            in a financial product, and the kind you only catch by understanding
            how the system actually behaves, not by reading a stack trace.
          </Article.Description>
        </Article.Card>

        <Article.Card>
          <Article.Heading>
            Speeding up TypeScript without betting the whole codebase on it
          </Article.Heading>
          <Article.Description>
            Typechecking a codebase this size is slow, and slow feedback taxes
            everyone all day. I brought in the new native TypeScript compiler
            for typechecking, but ran it alongside the existing setup rather
            than swapping everything at once, linting, tests and builds kept
            using the proven path, and there was a clean way back if it didn't
            hold up.
          </Article.Description>
          <Article.Description>
            I like this one because the interesting decision wasn't technical,
            it was how to introduce it. On a codebase other people depend on
            every day, a big-bang migration is a gamble. Framing it as a small,
            reversible change let us get the speed win without asking anyone to
            trust it blindly.
          </Article.Description>
        </Article.Card>

        <Article.Card>
          <Article.Heading>
            Cleaning up UI debt across the whole repo
          </Article.Heading>
          <Article.Description>
            I ran a few sweeping migrations end to end: replacing an old button
            component with the design-system one everywhere, standardizing how
            dates are formatted on a single library, and pushing shared UI
            primitives in place of one-off markup, leaving no stragglers behind.
          </Article.Description>
          <Article.Description>
            None of this is glamorous, and that's sort of the point. In a
            codebase this large, consistency is a feature in its own right. It's
            the work that keeps a frontend from slowly drifting into a dozen
            slightly-different versions of the same thing, and I think it
            matters as much as building something new.
          </Article.Description>
        </Article.Card>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.lookingBack.id}>
            {anchors.lookingBack.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          I spent 3.5 years on Tudigo, and the role didn't stay still. I joined
          a team of around a dozen engineers, owning a slice of the product.
          Over time the team narrowed to a core of three to five, and my job
          widened to match. What used to be "my feature" became "large parts of
          the platform", and the work shifted from building in a lane to keeping
          a whole system healthy: knowing where the bodies were buried, making
          changes safely, and being one of the few people who could reason about
          how the pieces fit together. Having laid the repo out in the first
          place is a good part of why, when you've had to decide where the seams
          go, you end up carrying a map of the system that's hard to acquire any
          other way. Part of that was bringing other people up to speed too,
          onboarding new developers into the codebase and mentoring junior
          engineers, so the knowledge didn't live only in a couple of heads.
        </Article.Description>
        <Article.Description>
          That's the part I'm proudest of. The interesting problems at Tudigo
          were rarely about building another screen. They were about timing,
          state and trust, making careful changes inside a large system that a
          lot of people, and 240M€+ of other people's money, depend on. Doing
          that well on a small team is a different kind of engineering than
          shipping features on a big one, and it's the kind I got better at
          here.
        </Article.Description>
      </Article.Section>
    </Article.Root>
  )
}
