"use client";

import { motion } from "framer-motion";

const libraryItems = [
  {
    category: "Packaging References",
    items: [
      { name: "Signature Box — Cream", description: "Primary retail packaging", gradient: "from-[#FAF7F2] to-[#E8DDD0]" },
      { name: "Gift Set Box — Dark", description: "Ritual Collection packaging", gradient: "from-[#2C2416] to-[#4A3F35]" },
      { name: "Bottle Label System", description: "Spray bottle labeling", gradient: "from-[#C8B89A] to-[#8B7355]" },
    ],
  },
  {
    category: "Campaign Inspirations",
    items: [
      { name: "Morning Ritual Series", description: "Dawn light, linen texture", gradient: "from-[#E8DDD0] to-[#C8B89A]" },
      { name: "Evening Ceremony", description: "Amber candlelight, shadow", gradient: "from-[#4A3F35] to-[#2C2416]" },
      { name: "Seasonal Collection", description: "Nature, transition, scent", gradient: "from-[#8B7355] to-[#C8B89A]" },
    ],
  },
];

export default function LibraryPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      {libraryItems.map((section, si) => (
        <div key={section.category}>
          <h3 className="font-serif text-xl text-[#2C2416] mb-4">{section.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {section.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (si * 3 + i) * 0.1 }}
                className="bg-white rounded-xl border border-[#E8DDD0] overflow-hidden"
              >
                <div className={`h-36 bg-gradient-to-br ${item.gradient}`} />
                <div className="p-4">
                  <p className="font-serif text-sm text-[#2C2416]">{item.name}</p>
                  <p className="text-xs text-[#8B7355] mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
