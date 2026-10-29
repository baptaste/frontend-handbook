import { Link } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { MailIcon, MenuIcon, XIcon } from "lucide-react"

import { GitHubIcon } from "../github-icon"
import { LinkedInIcon } from "../linkedin-icon"
import { ThemeToggler } from "../theme-toggler"
import { Button } from "../ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible"
import { Separator } from "../ui/separator"
import { NavigationBreadcrumb } from "./navigation-breadcrumb"
import { NavigationLinks } from "./navigation-links"
import { cn } from "@/lib/utils/cn"
import { externalPaths } from "@/lib/utils/external-paths"

const socials = [
  {
    href: externalPaths.socials.mail,
    label: "Email",
    target: "self",
    icon: MailIcon,
  },
  {
    href: externalPaths.socials.linkedIn,
    label: "LinkedIn",
    target: "_blank",
    icon: LinkedInIcon,
  },
  {
    href: externalPaths.socials.github,
    label: "GitHub",
    target: "_blank",
    icon: GitHubIcon,
  },
]

function SocialLinks({
  className,
  labels = false,
}: {
  className?: string
  labels?: boolean
}) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {socials.map((s) => (
        <Button
          key={s.href}
          variant="ghost"
          className="text-xl font-medium"
          nativeButton={false}
          render={
            <a
              href={s.href}
              target={s.target}
              rel="external"
              aria-label={s.label}
            />
          }
        >
          <s.icon />
          {labels && s.label}
        </Button>
      ))}
    </div>
  )
}

export function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isMenuOpen])

  return (
    <Collapsible
      open={isMenuOpen}
      onOpenChange={setIsMenuOpen}
      className={cn(
        "z-navbar fixed top-4 left-3 right-3 lg:left-4 lg:right-4 m-px pl-6 pr-3 lg:px-8 rounded-lg",
        // liquid glass
        "bg-background/60 backdrop-blur-md backdrop-saturate-150 border border-black/5 dark:border-white/10",
        className,
      )}
    >
      <div className="h-14 flex items-center justify-between">
        <Link
          to="/"
          className="lg:hidden text-neutral-950 dark:text-neutral-50"
        >
          Frontend Handbook
        </Link>
        <NavigationBreadcrumb
          className="hidden lg:block"
          rootLabel="Frontend Handbook"
          rootClassName="text-neutral-950 dark:text-neutral-50"
        />

        <div className="flex items-center gap-1">
          <SocialLinks className="hidden lg:flex" />
          <Separator
            orientation="vertical"
            className="hidden lg:block h-4 data-vertical:self-center"
          />
          <ThemeToggler />
          <Separator
            orientation="vertical"
            className="lg:hidden h-4 data-vertical:self-center"
          />
          <CollapsibleTrigger className="h-8 lg:hidden dark:text-neutral-50 text-neutral-950 px-3">
            {isMenuOpen ? (
              <XIcon className="size-5" strokeWidth={1} />
            ) : (
              <MenuIcon className="size-5" strokeWidth={1} />
            )}
          </CollapsibleTrigger>
        </div>
      </div>

      <CollapsibleContent className="lg:hidden h-(--collapsible-panel-height) overflow-y-auto transition-[height] duration-300 ease-out data-starting-style:h-0 data-ending-style:h-0 data-ending-style:duration-200">
        <div className="pr-3 h-[calc(100dvh-5.75rem)] flex flex-col gap-4 py-4 text-neutral-950 dark:text-neutral-50">
          <NavigationBreadcrumb onNavigate={() => setIsMenuOpen(false)} />
          <Separator />
          <NavigationLinks
            className="[&_a]:px-0 [&_a]:bg-transparent [&_a]:dark:bg-transparent"
            onNavigate={() => setIsMenuOpen(false)}
          />
          <Separator />
          <SocialLinks
            className="flex-col items-start space-y-4 [&_a]:px-0 [&_svg]:mr-2"
            labels
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
