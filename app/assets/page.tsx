"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const colorPalette = [
  { name: "Warm White", hex: "#F5F0E8", light: true },
  { name: "Soft Ivory", hex: "#EDE4D3", light: true },
  { name: "Mist Beige", hex: "#D4C4A8", light: true },
  { name: "Pale Stone", hex: "#C8BAA0", light: true },
  { name: "Muted Champagne", hex: "#B8A47A", light: false },
  { name: "Deep Ink", hex: "#1A1612", light: false },
];

const photoStyles = [
  {
    title: "Editorial",
    desc: "Close-up fabric and skin textures with intentional cropping",
  },
  {
    title: "Tactile",
    desc: "Natural light with gentle contrast, emphasizing material quality",
  },
  {
    title: "Soft Shadow",
    desc: "Negative space and soft movement — never commercial household",
  },
  {
    title: "Human Crop",
    desc: "Intimate human details without full face — body parts, hands, skin",
  },
];

const visualDirections = [
  { name: "Skin-Safe", desc: "Skin-close imagery that communicates safety and gentleness" },
  { name: "Eco-Conscious", desc: "Natural materials, refillable vessels, considered restraint" },
  { name: "Private Scent", desc: "Intimate scale — never broadcast, always personal" },
  { name: "Emotional Presence", desc: "Cinematic fabric and memory-in-atmosphere storytelling" },
];

const moodWords = [
  "Quiet Luxury",
  "Airy Veil",
  "Emotional Presence",
  "Intimate Warmth",
  "Soft Ritual",
  "Considered Calm",
];

export default function AssetsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Color Palette */}
        <motion.div {...fade(0)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-1">Color System</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-6">Brand Color Palette</div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {colorPalette.map((color, i) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07 }}
                className="group"
              >
                <div
                  className="w-full h-24 rounded-xl mb-2 border border-[#E4D9CC]/50 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-xs text-[#2C2416] font-medium">{color.name}</div>
                <div className="text-xs text-[#9B8C7A] font-mono mt-0.5">{color.hex}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Typography Showcase */}
        <motion.div {...fade(0.15)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Typography System</div>
          <div className="space-y-6">
            <div className="border-b border-[#E8DDD0] pb-6">
              <div className="text-xs text-[#9B8C7A] mb-2">Display — Cormorant Garamond Light Italic</div>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, color: "#2C2416" }} className="font-light italic">
                Private Scent That Stays Close
              </div>
            </div>
            <div className="border-b border-[#E8DDD0] pb-6">
              <div className="text-xs text-[#9B8C7A] mb-2">Heading — Cormorant Garamond Regular</div>
              <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-3xl text-[#2C2416]">
                A Scent That Stays With You
              </div>
            </div>
            <div className="border-b border-[#E8DDD0] pb-4">
              <div className="text-xs text-[#9B8C7A] mb-2">Subheading — Cormorant Garamond, tracked wide</div>
              <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-xl text-[#4A3F35] tracking-[0.15em] uppercase">
                Private Scented Fabric Care
              </div>
            </div>
            <div className="border-b border-[#E8DDD0] pb-4">
              <div className="text-xs text-[#9B8C7A] mb-2">Body — Inter Regular</div>
              <p className="text-sm text-[#4A3F35] leading-relaxed max-w-lg">
                We craft fragrance and fabric care experiences that anchor people to moments of stillness, comfort, and self-possession — turning the everyday into the quietly extraordinary.
              </p>
            </div>
            <div>
              <div className="text-xs text-[#9B8C7A] mb-2">Label / Caption — Inter Light, tracked wide</div>
              <div className="text-xs text-[#8B7355] tracking-[0.3em] uppercase">Scent Collection No. 01 · Morning Sky</div>
            </div>
          </div>
        </motion.div>

        {/* Photography Style */}
        <motion.div {...fade(0.2)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Photography Direction</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-6">Editorial · Tactile · Soft Shadow · Human Crop</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {photoStyles.map((style, i) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.07 }}
                className="bg-[#FAF7F2] rounded-lg p-4 border border-[#E4D9CC]"
              >
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-lg text-[#2C2416] mb-2">{style.title}</div>
                <p className="text-xs text-[#6B5C4A] leading-relaxed">{style.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Visual Direction */}
        <motion.div {...fade(0.3)}>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Key Visual Direction</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {visualDirections.map((dir, i) => (
              <motion.div
                key={dir.name}
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35 + i * 0.08 }}
                className="bg-white rounded-xl border border-[#E4D9CC] p-5"
              >
                <div className="w-2 h-2 rounded-full bg-[#8B7355] mb-3" />
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-lg text-[#2C2416] mb-1">{dir.name}</div>
                <p className="text-xs text-[#6B5C4A] leading-relaxed">{dir.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mood & Tone */}
        <motion.div {...fade(0.4)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Mood & Tone</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-6">Brand Emotional Register</div>
          <div className="flex flex-wrap gap-3">
            {moodWords.map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.45 + i * 0.06 }}
                className="px-5 py-2.5 rounded-full border border-[#C8B89A] bg-[#FAF7F2]"
              >
                <span style={{ fontFamily: "var(--font-cormorant)" }} className="text-base text-[#4A3F35]">{word}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Packaging Reference */}
        <motion.div {...fade(0.45)} className="bg-[#2C2416] rounded-2xl p-8">
          <div className="text-xs text-[#C8B89A] tracking-[0.3em] uppercase mb-4">Packaging Direction</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-3xl text-[#FAF7F2] italic mb-6">
            Eco-Conscious Refillable Aluminum Vessel
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <div className="text-xs text-[#C8B89A] uppercase tracking-wider mb-3">Forms</div>
              <ul className="space-y-1 text-sm text-[#FAF7F2]/80">
                <li>Soft cylindrical bottle</li>
                <li>Rounded-shoulder aluminum</li>
                <li>Flat oval / soft rectangular</li>
              </ul>
            </div>
            <div>
              <div className="text-xs text-[#C8B89A] uppercase tracking-wider mb-3">Materials</div>
              <ul className="space-y-1 text-sm text-[#FAF7F2]/80">
                <li>Matte aluminum</li>
                <li>Brushed satin aluminum</li>
                <li>Champagne anodized</li>
                <li>Warm ivory coated</li>
                <li>Pale stone powder-coated</li>
              </ul>
            </div>
            <div>
              <div className="text-xs text-[#C8B89A] uppercase tracking-wider mb-3">Label Style</div>
              <ul className="space-y-1 text-sm text-[#FAF7F2]/80">
                <li>Small, background ivory/warm white</li>
                <li>Deep ink text — no icons</li>
                <li>No flower illustrations</li>
                <li>Scent name clear but not loud</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
