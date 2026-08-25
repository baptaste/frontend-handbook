import { useTheme } from "@/lib/hooks/use-theme"
import { Button } from "./ui/button"
import { MoonIcon, ParasolIcon } from "lucide-react"

export function ThemeToggler() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <MoonIcon /> : <ParasolIcon />}
    </Button>
  )
}
