"use client";

import { motion } from "framer-motion";

interface ArchetypeCardProps {
  name: string;
  role: string;
  description: string;
  traits: string[];
  color: string;
  index: number;
}

export function ArchetypeCard({ name, role, description, traits, color, index }: ArchetypeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="bg-white rounded-2xl p-6 border border-[#E8DDD0]"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-xs text-[#8B7355] tracking-wider mb-1">{role} Archetype</div>
          <h3 className="font-serif text-2xl text-[#2C2416]">{name}</h3>
        </div>
        <div className="w-12 h-12 rounded-full" style={{ backgroundColor: color, opacity: 0.3 }} />
      </div>
      <p className="text-sm text-[#4A3F35] leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {traits.map((trait) => (
          <span
            key={trait}
            className="text-xs px-2 py-1 rounded-full border border-[#E8DDD0] text-[#8B7355]"
          >
            {trait}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
