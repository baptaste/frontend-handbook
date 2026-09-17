import { Link, createFileRoute } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { Article } from "@/components/article"

const anchors = {
  doesItExist: { id: "does-it-exist", label: "First, does it need to exist?" },
  serverState: { id: "server-state", label: "Server state isn't client state" },
  whereItLives: { id: "where-it-lives", label: "Where the rest of it lives" },
  contextCeiling: { id: "context-ceiling", label: "Context has a ceiling" },
  howIGotHere: { id: "how-i-got-here", label: "How I got here" },
} as const

export const Route = createFileRoute("/engineering/state-management")({
  component: RouteComponent,
  staticData: { anchors: Object.values(anchors) },
})

function Choice({ label, children }: { label: string; children: ReactNode }) {
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
        <Article.Title>State management</Article.Title>
        <Article.Description>
          Whether a piece of state needs to exist at all, and where it goes when
          it does.
        </Article.Description>
      </Article.Header>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.doesItExist.id}>
            {anchors.doesItExist.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          Before any of the tools below, the question is whether the state needs
          to exist in the first place. A lot of what ends up in a{" "}
          <code>useState</code> is something the component could have worked out
          from what it already has. A filtered list, a total, whether a form is
          valid — none of those are state. They're values derived from state,
          and storing them separately means keeping two things in sync for as
          long as the component lives.
        </Article.Description>
        <Article.Description>
          So every time I come across a <code>useState</code> I didn't put there
          myself, my first thought is whether it's truly necessary. Often it
          isn't, and deriving the value from what's already there is the answer.
        </Article.Description>
        <Article.Description>
          The same question applies to state that already exists somewhere else,
          and that version of it is more expensive to get wrong. On the{" "}
          <Link to="/projects/investment-platform" className="pretty-link">
            investment platform
          </Link>
          , sign-in state lived in two places that updated at different speeds:
          a token in a cookie, and the user's profile in local storage. On
          logout the app sometimes navigated away before both had finished
          clearing, so for a moment it still thought you were partly signed in
          and sent you back to the login screen. The fix was a few lines.
          Finding it took far longer, because nothing errored — it was an
          ordering problem between two copies of the same fact.
        </Article.Description>
        <Article.Description>
          Two stores holding the same truth aren't one state. They're two states
          you've quietly promised to keep in agreement, and what comes out of
          that promise being broken is intermittent and leaves no stack trace
          behind.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.serverState.id}>
            {anchors.serverState.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          Anything that comes from the server goes to TanStack Query, and I
          don't spend much time debating that one. Caching, background
          refetching, loading and error states, invalidation: writing that by
          hand with <code>useState</code> and <code>useEffect</code> means
          rebuilding a worse version of a solved problem, and then maintaining
          it.
        </Article.Description>
        <Article.Description>
          Drawing that line first is what makes the rest of the decisions easy.
          Once the server's data isn't your problem, what's left is genuinely
          client state, and there tends to be much less of it than people
          expect.
        </Article.Description>
        <Article.Description>
          The clearest case I've seen of missing that line is react-router's
          outlet context. When we started the monorepo it was the team's
          convention for sharing data between a parent route and the pages
          rendered beneath it, and it ended up used all over the codebase.
        </Article.Description>
        <Article.Description>
          It has two problems. The first is structural: outlet context reaches
          exactly one level down. A more deeply nested outlet cannot read it —
          not awkwardly, not at all — so the day a route grows another level,
          the pattern stops working and there's nothing to be done about it.
        </Article.Description>
        <Article.Description>
          The second is that it was usually unnecessary. In almost every case I
          found, what was being handed down was data the parent had fetched from
          our backend, which meant it was already sitting in a TanStack Query
          cache. Any component, at any depth, can read that same data by using
          the same query key. The context was plumbing built to carry something
          that didn't need carrying, and what it carried was a snapshot rather
          than the live value.
        </Article.Description>
        <Article.Description>
          So I've been unwinding it where I get the chance — when I have the
          time and I'm already working in that feature — replacing the context
          with a read from the query. Not a campaign, just not leaving it worse
          than I found it. The general shape of the mistake is the part worth
          keeping: a lot of what looks like shared client state is server state
          you already have cached, and reaching for a client-state mechanism to
          move it around only creates a second, staler copy of it.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.whereItLives.id}>
            {anchors.whereItLives.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          For what's left, the decision comes down to how far the state has to
          travel and how long it has to survive.
        </Article.Description>

        <Article.Card>
          <Choice label="The URL">
            When the state could or should be shared or persisted. A list page
            with pagination, filtering and sorting — a project search, or an
            investor's list of investments or repayments — belongs here.
          </Choice>
          <Choice label="Zustand">
            Global client state that changes often or is read in many places.
          </Choice>
          <Choice label="React Context">
            A single compound component. A ProjectCard made of many parts, where
            the pieces need to know about each other but nothing outside does.
          </Choice>
          <Choice label="useState">
            A basic, single-task component. A copy-to-clipboard button doesn't
            need anything more than this.
          </Choice>
        </Article.Card>

        <Article.Description>
          The URL is the one I've come to reach for first, and the one people
          skip. If whatever relies on that state could be shared or restored
          later, the URL is already a store that does both: a link reproduces
          the exact view someone was looking at, a refresh doesn't throw it
          away, and the back button behaves the way people expect without anyone
          implementing it.
        </Article.Description>
        <Article.Description>
          The tell is someone asking to see what you're looking at. If the
          answer is a description of which filters to click rather than a link,
          the state is in the wrong place.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.contextCeiling.id}>
            {anchors.contextCeiling.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          The line between the last two is the one I've learned the most about,
          and I learned it by building the wrong version first.
        </Article.Description>
        <Article.Description>
          <code>tudigo-editor</code> is a CMS editor I built for the platform.
          The first version used React Context as its global state. The editor
          does a lot: adding, editing and deleting content blocks, previewing
          the result, drag and drop, and every change invalidates the query on
          whichever page is hosting it.
        </Article.Description>
        <Article.Description>
          It worked. It was also, sometimes, slow. The cause is the thing
          Context does by design: when the value changes, every consumer
          re-renders. In an editor, where some small piece of state is updating
          constantly — a drag in progress, a field being typed into — that meant
          large parts of the interface re-rendering for changes they had no
          interest in.
        </Article.Description>
        <Article.Description>
          I recently rebuilt it as a v2 on top of Zustand and shipped it to
          production, along with a set of things the first version couldn't
          support: inline block editing in the style of Notion, a
          transform-block plugin, and a global search across all the content
          with matches highlighted. The state change is the unglamorous part and
          the one that mattered. Components subscribe to the slice they need, so
          an update re-renders what depends on it and nothing else, and the
          lagging is gone.
        </Article.Description>
        <Article.Description>
          That's where the line sits for me now. React Context is for simple
          components that are mostly isolated, where the value doesn't change
          very often. When state is global, updated frequently and read from
          several places, it needs a real state manager with selectors. I know
          that from having built the version that didn't have them.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.howIGotHere.id}>
            {anchors.howIGotHere.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          I used <code>useState</code> for almost everything when I started with
          React. Then I found Redux, and I genuinely liked it at the time. It
          worked, and it made the flow of data through an application easy to
          follow.
        </Article.Description>
        <Article.Description>
          What wore me down was the boilerplate. A lot of ceremony for every
          piece of state, repeated on every project, and not much fun to evolve
          or maintain once it had grown. Eventually I went looking for something
          with less of that, which is how I found Zustand. It's been my first
          pick for global client state since.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.Description>
          Most of these decisions are about ending up with less state rather
          than managing it better. Which tool you reach for matters, but it
          matters less than whether the thing needed to exist, and whether
          something somewhere already knows the answer.
        </Article.Description>
      </Article.Section>
    </Article.Root>
  )
}
