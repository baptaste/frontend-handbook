import { useLayout } from "@/components/layout/use-layout"
import { externalPaths } from "@/lib/utils/external-paths"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
  const { setState } = useLayout()

  return (
    <div className="lg:py-12 flex items-center flex-col justify-center">
      <div className="space-y-10 max-w-prose">
        <header>
          <h1 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
            Frontend Handbook
          </h1>
          <p>by Baptiste Champbenoit, Frontend Engineer</p>
        </header>

        <div className="space-y-4">
          <p>
            I work on the web team of an
            <a
              href={externalPaths.works.tudigo}
              rel="external"
              target="_blank"
              className="ml-1 pretty-link"
            >
              investment platform
            </a>
            . Previously, I worked on the mobile applications team of a
            <a
              href={externalPaths.works.feelity}
              rel="external"
              target="_blank"
              className="ml-1 pretty-link"
            >
              digital agency
            </a>
            .
          </p>

          <p>
            I like building fast, polished and maintainable web applications.
            This document describes how I design, build and maintain them.
          </p>
        </div>

        <div>
          <p>
            You can reach me on
            <a
              href={externalPaths.socials.linkedIn}
              rel="external"
              target="_blank"
              className="mx-1 pretty-link"
            >
              LinkedIn
            </a>
            or by
            <a
              href={externalPaths.socials.mail}
              rel="external"
              target="_blank"
              className="ml-1 pretty-link"
            >
              email
            </a>
            .
          </p>
        </div>

        <div className="flex">
          <Link
            to="/experience"
            onClick={() => setState("in")}
            className="hover:shimmer shimmer-duration-2000 ml-auto text-neutral-950 dark:text-neutral-50 hover:text-muted-foreground group"
          >
            [ Explore the handbook → ]
          </Link>
        </div>
      </div>
    </div>
  )
}
