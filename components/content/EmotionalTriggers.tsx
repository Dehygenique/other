"use client";

import { motion } from "framer-motion";

const triggers = [
  { emotion: "Comfort", description: "The feeling of being held, known, and safe at home", intensity: 95 },
  { emotion: "Nostalgia", description: "Scent as a portal to cherished memories and people", intensity: 88 },
  { emotion: "Calm", description: "The relief of stepping away from external demands", intensity: 92 },
  { emotion: "Pride", description: "Quiet satisfaction in a home that reflects one's taste", intensity: 75 },
  { emotion: "Anticipation", description: "The pleasure of a ritual about to begin", intensity: 80 },
  { emotion: "Belonging", description: "Scent as a signature — this is my space", intensity: 85 },
];

export function EmotionalTriggers() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E8DDD0]">
      <h3 className="font-serif text-xl text-[#2C2416] mb-6">Emotional Triggers</h3>
      <div className="space-y-4">
        {triggers.map((trigger, i) => (
          <motion.div
            key={trigger.emotion}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-serif text-sm text-[#2C2416]">{trigger.emotion}</span>
              <span className="text-xs text-[#8B7355]">{trigger.intensity}%</span>
            </div>
            <div className="h-1.5 bg-[#E8DDD0] rounded-full mb-1">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${trigger.intensity}%` }}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.8 }}
                className="h-full bg-gradient-to-r from-[#C8B89A] to-[#8B7355] rounded-full"
              />
            </div>
            <p className="text-xs text-[#8B7355]">{trigger.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
