"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasConsented = localStorage.getItem("gao_cookie_consent")
    if (!hasConsented) {
      // Delay de 1.5s para aparecer
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("gao_cookie_consent", "true")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("gao_cookie_consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-[100] pointer-events-auto">
      <div className="w-[300px] bg-white rounded-lg flex flex-col items-center justify-center py-5 px-7 gap-[13px] relative overflow-hidden shadow-[2px_2px_20px_rgba(0,0,0,0.062)]">
        
        {/* Ícone de Cookie animado */}
        <div className="w-[50px] flex justify-center text-[rgb(97,81,81)]">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" fill="rgb(97,81,81)"/>
            <path d="M8.5 8.5v.01" strokeWidth="2"/>
            <path d="M16 12.5v.01" strokeWidth="2"/>
            <path d="M12 16v.01" strokeWidth="2"/>
            <path d="M11 11v.01" strokeWidth="2"/>
            <path d="M7 14v.01" strokeWidth="2"/>
          </svg>
        </div>

        <p className="text-[1.2em] font-[800] text-[rgb(26,26,26)]">
          Nossos Cookies
        </p>

        <p className="text-center text-[0.7em] font-[600] text-[rgb(99,99,99)] leading-relaxed">
          Nós utilizamos cookies para melhorar sua navegação e experiência. Para saber mais, veja nossa{" "}
          <Link href="/politica-de-cookies" className="text-blue-500 hover:underline">
            Política
          </Link>.
        </p>

        <div className="flex gap-[20px] flex-row mt-2">
          <button 
            onClick={handleAccept} 
            className="w-[80px] h-[30px] bg-[#024D44] text-[#f1f1f1] border-none font-[600] rounded-[20px] shadow-[0_4px_6px_-1px_#024d4488,0_2px_4px_-1px_#024d4488] transition-all duration-200 ease-in-out hover:bg-[#024D44]/90 hover:shadow-[0_10px_15px_-3px_#024d4488,0_4px_6px_-2px_#024d4488] cursor-pointer text-[0.8rem]"
          >
            Aceitar
          </button>
          
          <button 
            onClick={handleReject} 
            className="w-[80px] h-[30px] bg-[#dadada] text-[#2e2e2e] border-none font-[600] rounded-[20px] shadow-[0_4px_6px_-1px_#bebdbd,0_2px_4px_-1px_#bebdbd] transition-all duration-200 ease-in-out hover:bg-[#ebebeb] hover:shadow-[0_10px_15px_-3px_#bebdbd,0_4px_6px_-2px_#bebdbd] cursor-pointer text-[0.8rem]"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  )
}
