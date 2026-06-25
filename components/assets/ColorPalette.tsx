"use client";

import { motion } from "framer-motion";

const colors = [
  { name: "Warm Beige", hex: "#C8B89A", role: "Primary", usage: "CTAs, highlights, key accents" },
  { name: "Cream", hex: "#FAF7F2", role: "Background", usage: "Page backgrounds, cards" },
  { name: "Deep Brown", hex: "#2C2416", role: "Dark", usage: "Sidebar, headline contrast" },
  { name: "Warm Tan", hex: "#8B7355", role: "Accent", usage: "Subheadings, icons, borders" },
  { name: "Text Brown", hex: "#4A3F35", role: "Text", usage: "Body text, descriptions" },
  { name: "Muted Sand", hex: "#E8DDD0", role: "Muted", usage: "Borders, dividers, subtle fills" },
];

export function ColorPalette() {
  return (
    <div>
      <h3 className="font-serif text-xl text-[#2C2416] mb-6">Color Palette</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {colors.map((color, i) => (
          <motion.div
            key={color.hex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl border border-[#E8DDD0] overflow-hidden"
          >
            <div className="h-24" style={{ backgroundColor: color.hex }} />
            <div className="p-4">
              <p className="font-medium text-sm text-[#2C2416]">{color.name}</p>
              <p className="text-xs text-[#8B7355] font-mono">{color.hex}</p>
              <p className="text-xs text-[#C8B89A] mt-0.5">{color.role}</p>
              <p className="text-xs text-[#4A3F35] mt-1">{color.usage}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
