"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const etymology = [
  {
    part: "Vela",
    reading: "เว-ลา",
    meaning: "fabric floating in air",
    desc: "The visual and physical poetry of fabric in motion — light, breathable, elevated above the everyday.",
  },
  {
    part: "Veil",
    reading: "เวล",
    meaning: "sheer scent cloud",
    desc: "A delicate invisible layer — the way scent surrounds without announcing itself, intimate and weightless.",
  },
  {
    part: "Ari",
    reading: "-รี",
    meaning: "modern refined sound",
    desc: "A contemporary ending that signals refinement, approachability, and quiet distinction.",
  },
];

const galleryImages = [
  { seed: "velari1", caption: "Morning light on linen" },
  { seed: "velari2", caption: "Soft fabric texture" },
  { seed: "velari3", caption: "Aluminum vessel detail" },
  { seed: "velari4", caption: "Quiet home corner" },
  { seed: "velari5", caption: "Skin close scent" },
  { seed: "velari6", caption: "Ritual preparation" },
  { seed: "velari7", caption: "Natural light fabric" },
  { seed: "velari8", caption: "Refill station" },
  { seed: "velari9", caption: "Brand packaging" },
];

const packagingRefs = [
  {
    title: "Outer Sleeve",
    desc: "Embossed window frame + brand name in deep ink. Warm ivory / pale stone base.",
    detail: "Box concept: 'This scent belongs to a memory.'",
  },
  {
    title: "Inner Box",
    desc: "Scent illustration print on inside. Reveals collection identity on opening.",
    detail: "Creates the unboxing as a ritual moment, not just a transaction.",
  },
  {
    title: "Aluminum Vessel",
    desc: "Hero refillable container. Soft cylindrical or rounded-shoulder form.",
    detail: "Matte or brushed satin finish. Champagne anodized or warm ivory coated.",
  },
  {
    title: "Label System",
    desc: "Small label on ivory/warm white. VELARI name clear, not loud.",
    detail: "No flower illustrations. No icons. Deep ink typography only.",
  },
];

export default function LibraryPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Brand Anatomy */}
        <motion.div {...fade(0)} className="bg-[#2C2416] rounded-2xl p-8">
          <div className="text-xs text-[#C8B89A] tracking-[0.3em] uppercase mb-4">Brand Anatomy</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-5xl text-[#FAF7F2] tracking-[0.2em] mb-2">VELARI</div>
          <div className="text-sm text-[#C8B89A]/70 mb-8">คำอ่าน: เว-ลา-รี</div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {etymology.map((e, i) => (
              <motion.div
                key={e.part}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.1 }}
                className="bg-white/5 rounded-xl p-5 border border-white/10"
              >
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-3xl text-[#C8B89A] mb-1">{e.part}</div>
                <div className="text-xs text-[#C8B89A]/60 mb-2">{e.reading} — {e.meaning}</div>
                <p className="text-sm text-[#FAF7F2]/70 leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Definition */}
        <motion.div {...fade(0.2)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Category Definition</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-3xl text-[#2C2416] mb-4">Luxury Fabric Care / Laundry Perfume</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="text-xs text-[#9B8C7A] uppercase tracking-wider mb-2">Brand Line</div>
              <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-xl text-[#4A3F35]">Private Scented Fabric Care</div>
            </div>
            <div>
              <div className="text-xs text-[#9B8C7A] uppercase tracking-wider mb-2">Positioning</div>
              <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-xl text-[#4A3F35]">Accessible Quiet Luxury / Premium Daily Ritual</div>
            </div>
            <div className="lg:col-span-2">
              <div className="text-xs text-[#9B8C7A] uppercase tracking-wider mb-2">Architecture</div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-[#2C2416] text-[#FAF7F2] px-4 py-2 rounded-lg text-sm" style={{ fontFamily: "var(--font-cormorant)" }}>VELARI Brand World</span>
                <span className="text-[#C8B89A]">→</span>
                <span className="bg-[#8B7355] text-[#FAF7F2] px-4 py-2 rounded-lg text-sm" style={{ fontFamily: "var(--font-cormorant)" }}>Private Scented Fabric Care</span>
                <span className="text-[#C8B89A]">→</span>
                <span className="bg-[#C8B89A] text-[#2C2416] px-4 py-2 rounded-lg text-sm" style={{ fontFamily: "var(--font-cormorant)" }}>Scent Collections</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div {...fade(0.25)}>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Visual Reference Gallery</div>
          <div className="text-xs text-[#9B8C7A] mb-4">Photography direction: Editorial · Tactile · Soft Shadow · Human Crop</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.seed}
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.05 }}
                className="relative overflow-hidden rounded-xl aspect-square bg-[#E8DDD0] group"
              >
                <Image
                  src={`https://picsum.photos/seed/${img.seed}/400/400`}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: "saturate(0.7) brightness(0.95)" }}
                />
                <div className="absolute inset-0 bg-[#2C2416]/0 group-hover:bg-[#2C2416]/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#2C2416]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-[#FAF7F2]">{img.caption}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Packaging References */}
        <motion.div {...fade(0.4)}>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Packaging Reference Cards</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {packagingRefs.map((ref, i) => (
              <motion.div
                key={ref.title}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 + i * 0.08 }}
                className="bg-white rounded-xl border border-[#E4D9CC] p-6"
              >
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-xl text-[#2C2416] mb-2">{ref.title}</div>
                <p className="text-sm text-[#4A3F35] mb-2">{ref.desc}</p>
                <p className="text-xs text-[#8B7355] italic">{ref.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* POS Visuals */}
        <motion.div {...fade(0.5)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">POS Direction</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-6">VELARI Memory Fragrance House</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#FAF7F2] rounded-xl p-6 border border-[#E4D9CC]">
              <div className="relative overflow-hidden rounded-lg aspect-video bg-[#E8DDD0] mb-4">
                <Image
                  src="https://picsum.photos/seed/velari-pos1/600/400"
                  alt="Home Memory Corner"
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.6) brightness(0.9)" }}
                />
              </div>
              <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-lg text-[#2C2416] mb-1">Home Memory Corner</div>
              <p className="text-sm text-[#6B5C4A]">A quiet home-styled corner with framed memory imagery and soft textures. Mirrors the VELARI domestic world.</p>
            </div>
            <div className="bg-[#FAF7F2] rounded-xl p-6 border border-[#E4D9CC]">
              <div className="relative overflow-hidden rounded-lg aspect-video bg-[#E8DDD0] mb-4">
                <Image
                  src="https://picsum.photos/seed/velari-pos2/600/400"
                  alt="Ritual Refill Station"
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.6) brightness(0.9)" }}
                />
              </div>
              <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-lg text-[#2C2416] mb-1">Ritual Refill Station</div>
              <p className="text-sm text-[#6B5C4A]">&ldquo;Refill the Scent. Revisit the Memory.&rdquo; Turns repurchase into ceremony, reinforcing eco-conscious values.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
