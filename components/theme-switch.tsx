"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface ThemeSwitchProps {
  headerTheme?: 'light' | 'dark' | 'transparent'
}

export function ThemeSwitch({ headerTheme = 'transparent' }: ThemeSwitchProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isHeaderLight = headerTheme === 'light'

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        isHeaderLight 
          ? "bg-primary/20" 
          : "bg-stone-200 dark:bg-stone-700"
      }`}
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Toggle theme"
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full shadow-lg transition-transform ${
          theme === "dark" ? "translate-x-6" : "translate-x-1"
        } ${
          isHeaderLight 
            ? "bg-primary" 
            : "bg-white"
        }`}
      >
        <div className="flex h-full w-full items-center justify-center">
          {theme === "dark" ? (
            <Moon size={12} className={isHeaderLight ? "text-white" : "text-stone-600"} />
          ) : (
            <Sun size={12} className={isHeaderLight ? "text-white" : "text-stone-600"} />
          )}
        </div>
      </span>
    </button>
  )
}

