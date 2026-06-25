"use client";

import { motion } from "framer-motion";
import { brandData } from "@/lib/data/brand";

export function BrandPillars() {
  return (
    <div>
      <h3 className="font-serif text-xl text-[#2C2416] mb-6">Core Brand Territories</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {brandData.territories.map((territory, i) => (
          <motion.div
            key={territory.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl p-5 border border-[#E8DDD0] hover:border-[#C8B89A] transition-colors"
          >
            <div className="w-2 h-8 bg-[#C8B89A] rounded-full mb-3" />
            <h4 className="font-serif text-base text-[#2C2416] mb-2">{territory.name}</h4>
            <p className="text-xs text-[#8B7355] leading-relaxed">{territory.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
