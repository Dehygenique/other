"use client";

import { motion } from "framer-motion";
import { brandData } from "@/lib/data/brand";

export function MessagingFramework() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E8DDD0]">
      <h3 className="font-serif text-xl text-[#2C2416] mb-6">Communication Principles</h3>
      <div className="space-y-4">
        {brandData.communicationPrinciples.map((principle, i) => (
          <motion.div
            key={principle.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DDD0]"
          >
            <div className="font-serif text-2xl text-[#C8B89A] min-w-[2rem]">{i + 1}</div>
            <div>
              <h4 className="font-serif text-base text-[#2C2416] mb-1">{principle.name}</h4>
              <p className="text-sm text-[#4A3F35]">{principle.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
