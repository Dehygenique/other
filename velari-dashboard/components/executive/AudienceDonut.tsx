"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { metricsData } from "@/lib/data/metrics";

export function AudienceDonut() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E8DDD0]">
      <h3 className="font-serif text-lg text-[#2C2416] mb-4">Audience Segments</h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={metricsData.audienceSegments}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
          >
            {metricsData.audienceSegments.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ background: "#FAF7F2", border: "1px solid #E8DDD0", borderRadius: 8, fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
