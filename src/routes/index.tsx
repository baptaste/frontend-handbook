import { externalPaths } from "@/lib/external-paths"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
  return (
    <div className="min-h-dvh py-12 flex items-center flex-col justify-center">
      <div className="space-y-10 max-w-prose p-4">
        <header>
          <h1 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">
            Frontend Handbook
          </h1>
          <p>by Baptiste Champbenoit, Design Engineer</p>
        </header>

        <div className="space-y-4">
          <p>
            I work on the web team of
            <a
              href={externalPaths.works.tudigo}
              rel="external"
              target="_blank"
              className="ml-1 pretty-link"
            >
              Tudigo
            </a>
            . Previously, I worked on the mobile applications team of
            <a
              href={externalPaths.works.feeltiy}
              rel="external"
              target="_blank"
              className="ml-1 pretty-link"
            >
              Feelity
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
            className="hover:shimmer shimmer-duration-2000 ml-auto text-neutral-950 dark:text-neutral-50 hover:text-muted-foreground group"
          >
            [ Explore the handbook → ]
          </Link>
        </div>
      </div>
    </div>
  )
}
