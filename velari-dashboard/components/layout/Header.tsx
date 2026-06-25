"use client";

import { usePathname } from "next/navigation";

const pageTitles: Record<string, { title: string; subtitle: string }> = {
  "/": { title: "Executive Overview", subtitle: "Brand performance at a glance" },
  "/brand-dna": { title: "Brand DNA", subtitle: "Core identity, essence, and archetypes" },
  "/audience": { title: "Audience Dashboard", subtitle: "Segments, personas, and customer journey" },
  "/products": { title: "Product Architecture", subtitle: "Collections, hierarchy, and matrix" },
  "/assets": { title: "Brand Assets", subtitle: "Colors, typography, and visual system" },
  "/content": { title: "Content Strategy", subtitle: "Messaging framework and content pillars" },
  "/library": { title: "Asset Library", subtitle: "Images, packaging, and campaign references" },
};

export function Header() {
  const pathname = usePathname();
  const page = pageTitles[pathname] || { title: "VELARI", subtitle: "" };

  return (
    <header className="h-16 border-b border-[#E8DDD0] bg-[#FAF7F2] px-8 flex items-center justify-between">
      <div>
        <h2 className="font-serif text-xl text-[#2C2416]">{page.title}</h2>
        <p className="text-xs text-[#8B7355]">{page.subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#C8B89A] animate-pulse" />
        <span className="text-xs text-[#8B7355]">Live Dashboard</span>
      </div>
    </header>
  );
}
