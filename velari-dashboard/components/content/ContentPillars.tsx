"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "The Ritual Edit",
    description: "Content that frames VELARI products within meaningful daily routines. Morning prep, evening wind-down, weekend stillness.",
    formats: ["Instagram carousel", "Short-form video", "Blog essay"],
  },
  {
    number: "02",
    title: "Scent as Memory",
    description: "Stories that connect fragrance to emotional recall. How scent anchors us to people, places, and moments.",
    formats: ["Long-form editorial", "Customer stories", "Seasonal campaign"],
  },
  {
    number: "03",
    title: "The Quiet Home",
    description: "Interior inspiration that prioritizes calm over clutter. Spaces that breathe, rest, and welcome.",
    formats: ["Moodboard content", "Partnership features", "Pinterest"],
  },
  {
    number: "04",
    title: "Craft & Care",
    description: "Behind the formulation — ingredient transparency, textile science, and the careful thinking behind VELARI products.",
    formats: ["Educational posts", "Founder perspective", "How-to guides"],
  },
];

export function ContentPillars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {pillars.map((pillar, i) => (
        <motion.div
          key={pillar.number}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-xl p-6 border border-[#E8DDD0]"
        >
          <p className="font-serif text-4xl text-[#E8DDD0] mb-2">{pillar.number}</p>
          <h4 className="font-serif text-lg text-[#2C2416] mb-2">{pillar.title}</h4>
          <p className="text-sm text-[#4A3F35] leading-relaxed mb-4">{pillar.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {pillar.formats.map((f) => (
              <span key={f} className="text-xs px-2 py-1 bg-[#FAF7F2] border border-[#E8DDD0] rounded-full text-[#8B7355]">
                {f}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
