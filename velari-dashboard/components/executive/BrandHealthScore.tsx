"use client";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "score", value: 85, fill: "#C8B89A" },
  { name: "remaining", value: 15, fill: "#E8DDD0" },
];

export function BrandHealthScore() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl p-6 border border-[#E8DDD0] flex flex-col items-center"
    >
      <h3 className="font-serif text-lg text-[#2C2416] mb-4">Brand Health Score</h3>
      <div className="relative w-48 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={data} startAngle={90} endAngle={-270}>
            <RadialBar dataKey="value" cornerRadius={10} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-serif text-4xl text-[#2C2416]">85</span>
          <span className="text-xs text-[#8B7355]">/ 100</span>
        </div>
      </div>
      <p className="text-xs text-[#8B7355] mt-2">+3 vs last quarter</p>
      <div className="mt-4 w-full space-y-2">
        {[
          { name: "Awareness", value: 78 },
          { name: "Perception", value: 91 },
          { name: "Loyalty", value: 88 },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span className="text-xs text-[#8B7355] w-24">{item.name}</span>
            <div className="flex-1 h-1.5 bg-[#E8DDD0] rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-full bg-[#C8B89A] rounded-full"
              />
            </div>
            <span className="text-xs text-[#4A3F35] w-8">{item.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
