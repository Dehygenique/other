"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, Dna, Users, Package, Palette, FileText, Library } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/brand-dna", label: "Brand DNA", icon: Dna },
  { href: "/audience", label: "Audience", icon: Users },
  { href: "/products", label: "Products", icon: Package },
  { href: "/assets", label: "Brand Assets", icon: Palette },
  { href: "/content", label: "Content Strategy", icon: FileText },
  { href: "/library", label: "Asset Library", icon: Library },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-[#2C2416] flex flex-col">
      <div className="px-6 py-8 border-b border-white/10">
        <h1 className="font-serif text-2xl text-[#FAF7F2] tracking-widest">VELARI</h1>
        <p className="text-xs text-[#C8B89A] mt-1 tracking-wider">Brand Strategy</p>
      </div>
      <nav className="flex-1 py-6 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors",
                      isActive
                        ? "bg-[#C8B89A]/20 text-[#C8B89A]"
                        : "text-[#FAF7F2]/60 hover:text-[#FAF7F2] hover:bg-white/5"
                    )}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-1 h-4 bg-[#C8B89A] rounded-full"
                      />
                    )}
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="px-6 py-4 border-t border-white/10">
        <p className="text-xs text-[#C8B89A]/50">© 2025 VELARI</p>
      </div>
    </aside>
  );
}
