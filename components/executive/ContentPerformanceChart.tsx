"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { metricsData } from "@/lib/data/metrics";

export function ContentPerformanceChart() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E8DDD0]">
      <h3 className="font-serif text-lg text-[#2C2416] mb-6">Content Performance — 2025</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={metricsData.contentPerformance}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E8DDD0" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#8B7355" }} />
          <YAxis tick={{ fontSize: 11, fill: "#8B7355" }} />
          <Tooltip
            contentStyle={{ background: "#FAF7F2", border: "1px solid #E8DDD0", borderRadius: 8, fontSize: 12 }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line type="monotone" dataKey="engagement" stroke="#C8B89A" strokeWidth={2} dot={false} name="Engagement" />
          <Line type="monotone" dataKey="reach" stroke="#8B7355" strokeWidth={2} dot={false} name="Reach" />
          <Line type="monotone" dataKey="conversions" stroke="#2C2416" strokeWidth={2} dot={false} name="Conversions" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
