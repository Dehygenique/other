"use client";

import { motion } from "framer-motion";

interface SegmentProfileProps {
  name: string;
  percentage: number;
  description: string;
  painPoints: string[];
  motivators: string[];
  index: number;
}

export function SegmentProfile({ name, percentage, description, painPoints, motivators, index }: SegmentProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="bg-white rounded-2xl p-6 border border-[#E8DDD0]"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-serif text-2xl text-[#2C2416]">{name}</h3>
        <div className="text-right">
          <p className="font-serif text-3xl text-[#C8B89A]">{percentage}%</p>
          <p className="text-xs text-[#8B7355]">of audience</p>
        </div>
      </div>
      <p className="text-sm text-[#4A3F35] leading-relaxed mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-xs text-[#8B7355] tracking-wider mb-2">PAIN POINTS</h4>
          <ul className="space-y-1">
            {painPoints.map((p) => (
              <li key={p} className="text-xs text-[#4A3F35] flex gap-2">
                <span className="text-[#C8B89A]">–</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs text-[#8B7355] tracking-wider mb-2">MOTIVATORS</h4>
          <ul className="space-y-1">
            {motivators.map((m) => (
              <li key={m} className="text-xs text-[#4A3F35] flex gap-2">
                <span className="text-[#C8B89A]">+</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
