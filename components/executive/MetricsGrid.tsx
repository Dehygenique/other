"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { metricsData } from "@/lib/data/metrics";

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {metricsData.keyMetrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-xl p-5 border border-[#E8DDD0]"
        >
          <p className="text-xs text-[#8B7355] mb-1">{metric.label}</p>
          <p className="font-serif text-2xl text-[#2C2416]">{metric.value}</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp size={12} className="text-[#C8B89A]" />
            <span className="text-xs text-[#C8B89A]">{metric.change}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
