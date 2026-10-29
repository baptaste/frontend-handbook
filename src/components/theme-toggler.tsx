import { LightbulbIcon, LightbulbOffIcon } from "lucide-react"
import { Button } from "./ui/button"
import type { ComponentProps } from "react"
import { useTheme } from "@/lib/hooks/use-theme"

export function ThemeToggler({
  variant = "ghost",
  ...props
}: ComponentProps<typeof Button>) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant={variant}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      {...props}
    >
      {theme === "light" ? (
        <LightbulbOffIcon className="size-4.5" />
      ) : (
        <LightbulbIcon className="size-4.5" />
      )}
    </Button>
  )
}
