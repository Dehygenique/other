"use client";

import { motion } from "framer-motion";

export function EssenceHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#2C2416] rounded-2xl p-12 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#C8B89A] blur-3xl" />
      </div>
      <div className="relative z-10">
        <p className="text-xs text-[#C8B89A] tracking-[0.3em] mb-4">BRAND ESSENCE</p>
        <h2 className="font-serif text-5xl text-[#FAF7F2] leading-tight mb-6">
          &ldquo;Private Scent<br />That Stays Close&rdquo;
        </h2>
        <p className="text-[#C8B89A]/70 max-w-lg mx-auto text-sm leading-relaxed">
          A promise not of grandeur, but of intimacy. VELARI lives in the quiet corners of home — the pillow, the wardrobe, the still room — whispering comfort to those who notice.
        </p>
      </div>
    </motion.div>
  );
}
