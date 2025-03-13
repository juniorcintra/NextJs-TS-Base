'use client'

import SwitcherTheme from "@/components/SwitcherTheme"
import { useTheme } from "next-themes"


export default function Home() {
  const { theme } = useTheme()

  return (
    <main className='h-screen bg-background flex justify-center items-center'>
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-foreground">Escolha um tema: </span>
        <SwitcherTheme />
        <span className="text-foreground">Tema escolhido: {theme === "light" ? "Light" : "Dark"}</span>
      </div>
    </main>
  )
}
