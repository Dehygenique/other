"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const audienceSegments = [
  { name: "Thinkers", value: 35, color: "#C8B89A" },
  { name: "Achievers", value: 30, color: "#8B7355" },
  { name: "Innovators", value: 20, color: "#4A3F35" },
  { name: "Experiencers", value: 15, color: "#D4C4A8" },
];

const contentData = [
  { month: "Jan", engagement: 4200, reach: 18000 },
  { month: "Feb", engagement: 5100, reach: 21000 },
  { month: "Mar", engagement: 4800, reach: 19500 },
  { month: "Apr", engagement: 6200, reach: 26000 },
  { month: "May", engagement: 7100, reach: 31000 },
  { month: "Jun", engagement: 6800, reach: 29000 },
];

const metricCards = [
  { label: "Brand Clarity Score", value: 92, desc: "Conceptual identity strength" },
  { label: "Market Positioning", value: 78, desc: "Accessible quiet luxury tier" },
  { label: "Content Alignment", value: 85, desc: "Messaging vs brand DNA" },
  { label: "Audience Resonance", value: 89, desc: "Primary segment connection" },
];

const territories = [
  { name: "Skin-Safe", desc: "อ่อนโยนต่อผิว มั่นใจได้เมื่อสัมผัส" },
  { name: "Private Scent", desc: "กลิ่นเฉพาะตัว ไม่ตลาด ไม่โหล" },
  { name: "Quiet Wealth", desc: "ความหรูหราแบบสุขุม ใช้ได้จริง" },
  { name: "Eco-Conscious", desc: "ใส่ใจโลกแบบ premium" },
  { name: "Emotional Presence", desc: "เติมความหมายให้ช่วงเวลา" },
  { name: "Clean Luxury", desc: "ความหอมสะอาดแบบพรีเมียม" },
];

const collections = [
  { name: "The Calm Before the Noise", scent: "Morning Sky", colorName: "Soft Blue Grey", hex: "#B8C4C8" },
  { name: "Mind Slow Down", scent: "Tea Leaf", colorName: "Muted Sage", hex: "#B8BCA8" },
  { name: "An Invitation to Indulge", scent: "Champagne Linen", colorName: "Soft Champagne", hex: "#D4C4A8" },
  { name: "Unplugged & Slow Living", scent: "Sun-Washed Cotton", colorName: "Warm Taupe", hex: "#C4B090" },
];

function CircularProgress({ score }: { score: number }) {
  const r = 54;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  return (
    <div className="relative flex items-center justify-center w-40 h-40">
      <svg width="140" height="140" className="-rotate-90">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#E8DDD0" strokeWidth="8" />
        <motion.circle
          cx="70" cy="70" r={r} fill="none"
          stroke="#8B7355" strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute text-center">
        <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-4xl font-light text-[#2C2416]">{score}</div>
        <div className="text-xs text-[#8B7355]">/ 100</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="bg-white rounded-xl border border-[#E4D9CC] p-8 flex flex-col items-center justify-center"
          >
            <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Brand Health Score</div>
            <CircularProgress score={87} />
            <div className="mt-4 text-center">
              <div className="text-xs text-[#9B8C7A]">+3 vs last quarter</div>
              <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-lg text-[#2C2416] mt-1 italic">Quiet and Ascending</div>
            </div>
          </motion.div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {metricCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.2 }}
                className="bg-white rounded-xl border border-[#E4D9CC] p-6"
              >
                <div className="text-xs text-[#8B7355] tracking-wider uppercase mb-2">{card.label}</div>
                <div className="flex items-baseline gap-1">
                  <span style={{ fontFamily: "var(--font-cormorant)" }} className="text-4xl text-[#2C2416]">{card.value}</span>
                  <span className="text-sm text-[#9B8C7A]">/100</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-[#E8DDD0]">
                  <motion.div
                    className="h-1.5 rounded-full bg-[#8B7355]"
                    initial={{ width: 0 }}
                    animate={{ width: `${card.value}%` }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.4 }}
                  />
                </div>
                <div className="text-xs text-[#9B8C7A] mt-2">{card.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-white rounded-xl border border-[#E4D9CC] p-6"
          >
            <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-1">Audience Segments</div>
            <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-xl text-[#2C2416] mb-4">VALS Framework</div>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie data={audienceSegments} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" paddingAngle={3}>
                  {audienceSegments.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, ""]} />
                <Legend formatter={(value) => <span style={{ color: "#4A3F35", fontSize: "12px" }}>{value}</span>} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="bg-white rounded-xl border border-[#E4D9CC] p-6"
          >
            <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-1">Content Performance</div>
            <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-xl text-[#2C2416] mb-4">Jan to Jun 2025</div>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={contentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0E8DE" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#8B7355" }} />
                <YAxis tick={{ fontSize: 11, fill: "#8B7355" }} />
                <Tooltip contentStyle={{ borderColor: "#E4D9CC", borderRadius: "8px" }} />
                <Legend />
                <Line type="monotone" dataKey="engagement" stroke="#8B7355" strokeWidth={2} dot={false} name="Engagement" />
                <Line type="monotone" dataKey="reach" stroke="#C8B89A" strokeWidth={2} dot={false} name="Reach" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Scent Collections</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white rounded-xl border border-[#E4D9CC] p-5 hover:border-[#C8B89A] transition-colors"
              >
                <div className="w-8 h-8 rounded-full mb-3" style={{ backgroundColor: col.hex }} />
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-sm text-[#2C2416] leading-snug mb-1">{col.name}</div>
                <div className="text-xs text-[#8B7355]">{col.scent}</div>
                <div className="text-xs text-[#9B8C7A] mt-0.5">{col.colorName}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Core Brand Territories</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {territories.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.08 }}
                className="bg-white rounded-xl border border-[#E4D9CC] p-5 flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-[#C8B89A] mt-1.5 shrink-0" />
                <div>
                  <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-base text-[#2C2416]">{t.name}</div>
                  <div className="text-xs text-[#8B7355] mt-0.5">{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
  );
}
