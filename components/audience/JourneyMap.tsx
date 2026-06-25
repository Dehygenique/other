"use client";

import { motion } from "framer-motion";
import { audienceData } from "@/lib/data/audience";

const colors = ["#C8B89A", "#8B7355", "#4A3F35", "#2C2416", "#C8B89A"];

export function JourneyMap() {
  return (
    <div>
      <h3 className="font-serif text-xl text-[#2C2416] mb-6">Customer Journey Map</h3>
      <div className="flex gap-3 overflow-x-auto pb-4">
        {audienceData.journeyStages.map((stage, i) => (
          <motion.div
            key={stage.stage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-52 bg-white rounded-xl p-4 border border-[#E8DDD0]"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium mb-3"
              style={{ backgroundColor: colors[i] }}
            >
              {i + 1}
            </div>
            <h4 className="font-serif text-base text-[#2C2416] mb-2">{stage.stage}</h4>
            <p className="text-xs text-[#8B7355] italic mb-3">&ldquo;{stage.emotion}&rdquo;</p>
            <p className="text-xs text-[#4A3F35] leading-relaxed">{stage.velariAction}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
