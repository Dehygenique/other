"use client";

import { motion } from "framer-motion";

const moodItems = [
  { label: "Linen & Morning Light", gradient: "from-[#E8DDD0] to-[#C8B89A]" },
  { label: "Deep Amber Interior", gradient: "from-[#8B7355] to-[#4A3F35]" },
  { label: "Clean White Surfaces", gradient: "from-[#FAF7F2] to-[#E8DDD0]" },
  { label: "Warm Shadow Play", gradient: "from-[#4A3F35] to-[#2C2416]" },
  { label: "Soft Texture Detail", gradient: "from-[#C8B89A] to-[#8B7355]" },
  { label: "Evening Ritual", gradient: "from-[#2C2416] to-[#4A3F35]" },
];

export function MoodboardGallery() {
  return (
    <div>
      <h3 className="font-serif text-xl text-[#2C2416] mb-6">Visual Moodboard</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {moodItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-xl overflow-hidden bg-gradient-to-br ${item.gradient} aspect-[4/3] relative group cursor-pointer`}
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <p className="text-white text-xs font-sans">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
