"use client";

import { motion } from "framer-motion";
import { ColorPalette } from "@/components/assets/ColorPalette";
import { TypographySystem } from "@/components/assets/TypographySystem";
import { MoodboardGallery } from "@/components/assets/MoodboardGallery";

export default function AssetsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <ColorPalette />
      <TypographySystem />
      <MoodboardGallery />
      <div className="bg-white rounded-2xl p-6 border border-[#E8DDD0]">
        <h3 className="font-serif text-xl text-[#2C2416] mb-4">Photography Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Mood", description: "Quiet, intimate, unhurried. Natural light preferred. Avoid harsh direct flash." },
            { title: "Style", description: "Editorial minimalism. Let negative space breathe. Objects in context, not isolation." },
            { title: "Composition", description: "Asymmetric, close-cropped, texture-forward. Surfaces: linen, marble, wood, concrete." },
          ].map((guide) => (
            <div key={guide.title} className="bg-[#FAF7F2] rounded-xl p-4 border border-[#E8DDD0]">
              <h4 className="font-serif text-base text-[#2C2416] mb-2">{guide.title}</h4>
              <p className="text-sm text-[#4A3F35] leading-relaxed">{guide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
