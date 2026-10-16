import { Link, createFileRoute } from "@tanstack/react-router"
import { Article } from "@/components/article"
import { ArrowButton } from "@/components/arrow-button"
import { Badge } from "@/components/ui/badge"
import { externalPaths } from "@/lib/utils/external-paths"
import { pageTitle } from "@/lib/utils/page-title"

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: pageTitle("Contact") }] }),
  component: RouteComponent,
})

type ChannelCardProps = {
  title: string
  value: string
  href: string
  action: string
}

function ChannelCard({ title, value, href, action }: ChannelCardProps) {
  return (
    <Article.Card>
      <div className="space-y-2">
        <Article.Heading>{title}</Article.Heading>
        <Article.Info>{value}</Article.Info>
      </div>
      <a href={href} rel="external" target="_blank">
        <ArrowButton>{action}</ArrowButton>
      </a>
    </Article.Card>
  )
}

function RouteComponent() {
  return (
    <Article.Root>
      <Article.Header>
        <Article.Title>Contact</Article.Title>
        <Article.Description>
          Feel free to reach out about anything. I'm also{" "}
          <Link to="/now" hash="open-to" className="pretty-link">
            open to new opportunities
          </Link>
          .
        </Article.Description>
      </Article.Header>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>Channels</Article.SectionTitle>
        </Article.SectionHeader>

        <div className="flex flex-col lg:flex-row lg:items-center gap-4 [&_div]:flex-1">
          <ChannelCard
            title="Email"
            value="baptiste.champbenoit@gmail.com"
            href={externalPaths.socials.mail}
            action="Send an email"
          />
          <ChannelCard
            title="LinkedIn"
            value="in/baptiste-champbenoit"
            href={externalPaths.socials.linkedIn}
            action="Open LinkedIn"
          />
          <ChannelCard
            title="GitHub"
            value="baptaste"
            href={externalPaths.socials.github}
            action="Open GitHub"
          />
        </div>
      </Article.Section>

      <Article.Section>
        <Article.SectionHeader>
          <Article.SectionTitle>CV</Article.SectionTitle>
        </Article.SectionHeader>

        <Article.Card>
          <div className="flex items-center gap-2">
            <Article.Heading>Download my CV</Article.Heading>
            <Badge variant="outline">Soon</Badge>
          </div>
          <Article.Description>
            A PDF version is coming soon.
          </Article.Description>
        </Article.Card>
      </Article.Section>
    </Article.Root>
  )
}
