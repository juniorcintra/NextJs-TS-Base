"use client";

import Button from "@/components/Button";
import SwitcherTheme from "@/components/SwitcherTheme";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="bg-background flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-foreground">Escolha um tema: </span>
        <SwitcherTheme />
        <span className="text-foreground">
          Tema escolhido: {theme === "light" ? "Light" : "Dark"}
        </span>
        <Button />
        <span className="text-foreground">Desenvolvido por Junior Cintra</span>
      </div>
    </main>
  );
}
