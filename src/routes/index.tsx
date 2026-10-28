import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { getFrameTransitionMs, useFrame } from "@/components/frame/use-frame"
import { externalPaths } from "@/lib/utils/external-paths"
import { ArrowButton } from "@/components/arrow-button"
import { ThemeToggler } from "@/components/theme-toggler"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
  const navigate = useNavigate()
  const frame = useFrame()

  return (
    <div className="lg:p-12 mb-0 pt-6 flex items-start flex-col h-full">
      <ThemeToggler className="ml-auto" />

      <div className="space-y-10 lg:mt-16 lg:mx-auto lg:max-w-3/5">
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
          <ArrowButton
            onClick={async () => {
              // Expand the frame over the homepage first, then swap in the handbook
              frame.expand()
              await new Promise((resolve) =>
                setTimeout(resolve, getFrameTransitionMs()),
              )
              navigate({ to: "/experience" })
            }}
          >
            Explore the handbook
          </ArrowButton>
        </div>
      </div>
    </div>
  )
}
