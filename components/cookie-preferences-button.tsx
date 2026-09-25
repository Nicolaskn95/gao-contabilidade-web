"use client"

import { Settings2 } from "lucide-react"
import { openCookieBanner } from "@/components/cookie-banner"

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={openCookieBanner}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#024D44] text-white text-sm font-semibold hover:bg-[#024D44]/90 transition-all shadow-sm cursor-pointer"
    >
      <Settings2 className="w-4 h-4" />
      Gerenciar preferências de cookies
    </button>
  )
}
