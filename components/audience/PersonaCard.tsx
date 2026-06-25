"use client";

import { motion } from "framer-motion";

interface PersonaCardProps {
  name: string;
  tagline: string;
  demographics: Record<string, string>;
  psychographics: {
    values: string[];
    lifestyle: string[];
    shoppingBehavior: string;
  };
  index: number;
}

export function PersonaCard({ name, tagline, demographics, psychographics, index }: PersonaCardProps) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15 }}
      className="bg-white rounded-2xl p-6 border border-[#E8DDD0]"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-[#C8B89A] flex items-center justify-center">
          <span className="font-serif text-xl text-[#2C2416]">{initials}</span>
        </div>
        <div>
          <h3 className="font-serif text-xl text-[#2C2416]">{name}</h3>
          <p className="text-xs text-[#8B7355] italic">{tagline}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="text-xs text-[#8B7355] tracking-wider mb-2">DEMOGRAPHICS</h4>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(demographics).slice(0, 4).map(([key, value]) => (
              <div key={key}>
                <p className="text-xs text-[#8B7355]">{key}</p>
                <p className="text-sm text-[#4A3F35]">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs text-[#8B7355] tracking-wider mb-2">VALUES</h4>
          <div className="flex flex-wrap gap-1.5">
            {psychographics.values.map((v) => (
              <span key={v} className="text-xs px-2 py-1 bg-[#FAF7F2] border border-[#E8DDD0] rounded-full text-[#4A3F35]">
                {v}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs text-[#8B7355] tracking-wider mb-1">SHOPPING BEHAVIOR</h4>
          <p className="text-sm text-[#4A3F35]">{psychographics.shoppingBehavior}</p>
        </div>
      </div>
    </motion.div>
  );
}
