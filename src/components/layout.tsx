import type { ReactNode } from "react"
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"
import { Navigation } from "./navigation"

export function Layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-dvh">
        <Sidebar className="lg:col-span-1">
          <Navigation />
        </Sidebar>

        <main className="w-full h-full overflow-y-auto p-4 lg:p-8 col-span-1 lg:col-span-3">
          {children}
        </main>

        <Sidebar side="right" className="lg:col-span-1">
          Right Sidebar
        </Sidebar>
      </div>
    </>
  )
}
