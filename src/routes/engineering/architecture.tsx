import { Link, createFileRoute } from "@tanstack/react-router"
import { Article } from "@/components/article"

const anchors = {
  whoUsesIt: {
    id: "who-uses-it",
    label: "I start with who is going to use it",
  },
  organizeByProduct: {
    id: "organize-by-product",
    label: "Organize around what the product does",
  },
  oneShape: { id: "one-shape", label: "One shape, every time" },
  dependencyDirection: {
    id: "dependency-direction",
    label: "Dependencies only point one way",
  },
} as const

export const Route = createFileRoute("/engineering/architecture")({
  component: RouteComponent,
  staticData: { anchors: Object.values(anchors) },
})

const structure = `
apps/
├── webapp/
├── back-office/
└── embed/

libs/
├── core/
│   ├── types.ts
│   ├── hooks/
│   └── utils/
└── web/
    ├── feature-login/
    ├── feature-kyc/
    └── feature-investment/
        ├── index.ts
        ├── routes/
        ├── pages/
        ├── components/
        ├── hooks/
        ├── utils/
        └── shared-external/`

function RouteComponent() {
  return (
    <Article.Root>
      <Article.Header>
        <Article.Title>Architecture</Article.Title>
        <Article.Description>
          How I decide where code should live, and what's allowed to depend on
          what.
        </Article.Description>
      </Article.Header>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.whoUsesIt.id}>
            {anchors.whoUsesIt.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          I don't dive straight into architecture. Before I write a file I stop
          and think about where the code is going to be used, and who is going
          to use it. The answers usually settle most of the structure on their
          own.
        </Article.Description>
        <Article.Description>
          If the thing is small I answer that in my head. If it's more complex I
          take a pen and a piece of paper and write my ideas down until they're
          organized. Nothing formal, no diagramming tool. Just getting the shape
          out of my head before I commit to it.
        </Article.Description>
        <Article.Description>
          Here is the kind of decision I mean. Say I'm working on a feature that
          needs to open a blob when a request succeeds, and nothing in the
          project has done that before. The straightforward move is to write the
          helper inside the feature I'm already in, right where I need it. But
          opening a blob has nothing to do with that feature's domain, and any
          other feature could need it tomorrow, so it belongs in the shared core
          utils instead. It's a small decision, and I make some version of it
          every time I add a file to a codebase.
        </Article.Description>
        <Article.Description>
          The test I use for that is whether I can name the thing without
          referring to a feature. A blob opener passes. Anything I can only
          describe as "the thing the investment funnel needs" fails, and stays
          where it is. Core utils are for code with no domain, and keeping that
          line strict is what stops them becoming the folder everything reaches
          into.
        </Article.Description>
        <Article.Description>
          The reason I bother is that you don't find out early when a structure
          is wrong. By the time it's obvious, it has spread across enough files
          that fixing it has become a project of its own.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.organizeByProduct.id}>
            {anchors.organizeByProduct.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          In general I'd rather organize code around what the product and the
          application do than around what the code is. Grouping by{" "}
          <code>components</code>, <code>hooks</code> and <code>utils</code>{" "}
          describes the code. Grouping by domain describes the product. When I
          open a repo I'm almost always looking for a part of the product, not
          for a category of file.
        </Article.Description>
        <Article.Description>
          This matters more the larger the codebase gets. The monorepo I've
          worked in for the last two years is the case I know best, partly
          because I helped decide its shape: when the{" "}
          <Link to="/projects/investment-platform" className="pretty-link">
            platform
          </Link>{" "}
          moved off its legacy micro-frontend setup, the CTO and I worked out
          the repo structure between us. Two years of living in a structure is a
          fair test of it.
        </Article.Description>
        <Article.Description>
          There's a place for the core, which supplies the whole project, and
          the React apps are grouped by feature lib, by domain.
        </Article.Description>

        <Article.Code>{structure}</Article.Code>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.oneShape.id}>
            {anchors.oneShape.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          Every feature lib has the same signature: a single barrel export, and
          the same folders inside it. Each page acts like its own feature, so a
          page folder carries its own components, hooks and utils, mirroring the
          lib one level down. <code>shared-external</code> is the feature's
          public surface: the components, hooks and utils it deliberately offers
          to other features. Everything else in the lib is private to it.
        </Article.Description>
        <Article.Description>
          I introduced this with another senior developer on the team. There
          were four of us on the frontend at the time, the product was growing
          quickly, and we were adding features constantly. Because nobody had
          agreed on a shape, each feature looked like whoever had built it. One
          would export a hook straight out of its page folder. Another would put
          a component at the root level. Every one of them was reasonable on its
          own, and none of them matched.
        </Article.Description>
        <Article.Description>
          That's survivable until you're moving between features all day, which
          is exactly what we were doing. Opening someone else's feature meant
          working out its conventions before you could change anything. So we
          settled on one shape and applied it everywhere. What we were after was
          simple enough: editing a feature built by someone else should feel
          like home.
        </Article.Description>
        <Article.Description>
          The other thing it buys is time. Nobody has to work out how to set up
          a new feature, or where a new page or util file goes. That decision
          was made once and it doesn't get made again.
        </Article.Description>
        <Article.Description>
          It didn't hold on its own, though. With several people working
          quickly, the shape was generally followed and sometimes it wasn't, and
          I've gone back and restructured features to bring them into line many
          times since. A convention like this isn't a decision you make once. It
          has to be maintained like anything else.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle id={anchors.dependencyDirection.id}>
            {anchors.dependencyDirection.label}
          </Article.SectionTitle>
        </Article.SectionHeader>
        <Article.Description>
          The folders are only half of it. The other half is a rule about what
          is allowed to depend on what, and it's short:
        </Article.Description>

        <Article.Card>
          <Article.Description>
            Features may import from core. <br />
            Core never imports from a feature. <br />
            Features never import each other's internals — only what a feature
            publishes.
          </Article.Description>
        </Article.Card>

        <Article.Description>
          Three lines, and they're most of what keeps a repo this size from
          turning into a graph nobody can hold in their head. Core stays usable
          by everything precisely because it knows about nothing. A feature
          stays understandable on its own because the only way into it is the
          surface it publishes on purpose, which in this repo is{" "}
          <code>shared-external</code>.
        </Article.Description>
        <Article.Description>
          The third rule is the one that gets broken first, and circular
          dependencies are how you find out. The usual shape:{" "}
          <code>feature-login</code> needs one thing from{" "}
          <code>feature-kyc</code> and imports it directly, then later{" "}
          <code>feature-kyc</code> needs something from{" "}
          <code>feature-login</code>. Neither import looks wrong on its own.
          Together they're a cycle, and you find out either at build time or,
          worse, as an undefined import at runtime.
        </Article.Description>
        <Article.Description>
          We enforce part of this with Nx module boundary tags, which catch a
          lib importing something it has no business importing. They can't see
          inside a lib, though — whether a hook is exported from the right
          level, or whether something ended up in <code>shared-external</code>{" "}
          that no other feature actually needs. And going through{" "}
          <code>shared-external</code> doesn't make a cycle impossible either.
          It only makes it deliberate, since the dependency has to be published
          on purpose rather than reached for. Neither the tooling nor the
          structure closes the gap on its own, which is why this stays a matter
          of review.
        </Article.Description>
      </Article.Section>

      <Article.Section>
        <Article.Description>
          These are the same instinct at three different scales. Where a single
          helper goes, what shape a feature takes, what's allowed to import what
          — each one is decided on behalf of whoever opens the file next, which
          is usually a colleague and sometimes me a year later. That's most of
          what architecture means to me day to day: the small decisions that add
          up to whether the next change is easy or expensive.
        </Article.Description>
      </Article.Section>
    </Article.Root>
  )
}
