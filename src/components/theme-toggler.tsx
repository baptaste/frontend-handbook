import { MoonIcon, ParasolIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "@/lib/hooks/use-theme"

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
