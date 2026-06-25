"use client";

import { motion } from "framer-motion";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from "recharts";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const principles = [
  {
    number: "01",
    title: "Sell the Feeling First, Explain the Care Later",
    desc: "ให้ลูกค้ารู้สึกก่อนว่ากลิ่นนี้แพงและมีความหมาย แล้วค่อยตามด้วยเหตุผลเรื่อง skin-safe / eco-conscious",
  },
  {
    number: "02",
    title: "Curated Choice, Not Customization",
    desc: "ทำให้ลูกค้ารู้สึกว่าแต่ละกลิ่น \"ถูกเลือกมาแล้ว\" อย่างมีรสนิยม ไม่ใช่ออกแบบเอง",
  },
  {
    number: "03",
    title: "Make Fabric Feel Personal",
    desc: "สื่อสารว่าผ้าไม่ใช่แค่ของใช้ แต่คือสิ่งที่สัมผัสร่างกายใกล้ชิดที่สุด",
  },
  {
    number: "04",
    title: "Build Emotional Presence",
    desc: "กลิ่นต้องทำให้นึกถึงใครบางคน รู้สึกเป็นตัวเอง และทำให้โมเมนต์มีความหมาย",
  },
  {
    number: "05",
    title: "Keep Luxury Quiet",
    desc: "ความแพงต้องไม่ตะโกน รับรู้ได้จากภาพ กลิ่น แพ็กเกจ และจังหวะที่สุขุม",
  },
  {
    number: "06",
    title: "Use Moment as Emotional Architecture",
    desc: "เล่าเรื่องด้วยอารมณ์และจังหวะชีวิต ไม่ใช่เลือกจาก ingredient เพียงอย่างเดียว",
  },
];

const guardrailsDo = [
  "เล่า atmosphere ของช่วงเวลา",
  "โทน Warm white, porcelain, mist beige",
  "ภาพให้ความรู้สึก niche perfume, boutique hotel",
  "แสงเช้า, ม่านบาง, soft shadow, skin-safe softness",
  "Use words: private · soft · skin-close · airy · considered · meaningful moment",
];

const guardrailsAvoid = [
  "ห้ามตะโกน ห้ามใช้คำว่า \"หอมฟุ้งทั้งซอย\"",
  "ห้ามใช้ภาพน้ำยาปรับผ้านุ่ม supermarket",
  "สีสด ดอกไม้เยอะ ฟองเยอะ ผ้าสีจัด",
  "Loud claims, generic mass-market language",
  "Over-explanation of ingredients without feeling",
];

const brandVocab = [
  "private", "soft", "skin-close", "airy", "considered",
  "meaningful moment", "quiet", "refined", "intimate",
  "ritual", "presence", "memory", "curated", "clean",
];

const emotionalRoles = [
  {
    number: "01",
    title: "The Presence of Someone Loved",
    subtitle: "Comfort & Presence",
    desc: "กลิ่นที่ทำให้รู้สึกถึงการมีอยู่ของใครบางคนอันเป็นที่รัก",
  },
  {
    number: "02",
    title: "The Version of Myself I Love Most",
    subtitle: "Identity & Calm",
    desc: "กลิ่นที่ทำให้รู้สึกว่าได้เป็นตัวของตัวเองอย่างเต็มที่",
  },
  {
    number: "03",
    title: "The Meaningful Moments I Cherish",
    subtitle: "Ritual & Meaning",
    desc: "กลิ่นที่ทำให้ช่วงเวลาธรรมดากลายเป็นช่วงเวลาที่มีความหมาย",
  },
];

const moodWords = ["Quiet Luxury", "Airy Veil", "Emotional Presence", "Intimate Warmth", "Soft Ritual", "Considered Calm"];

const radarData = [
  { attribute: "Emotional Depth", score: 92 },
  { attribute: "Brand Clarity", score: 88 },
  { attribute: "Luxury Positioning", score: 85 },
  { attribute: "Safety Communication", score: 90 },
  { attribute: "Eco Narrative", score: 78 },
  { attribute: "Scent Storytelling", score: 94 },
];

export default function ContentPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Communication Principles */}
        <motion.div {...fade(0)}>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Communication Framework</div>
          <div className="space-y-3">
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.07 }}
                className="bg-white rounded-xl border border-[#E4D9CC] p-6 flex gap-5 items-start"
              >
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-5xl text-[#E8DDD0] font-light shrink-0 leading-none">{p.number}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-xl text-[#2C2416] mb-1">{p.title}</div>
                  <p className="text-sm text-[#6B5C4A] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guardrails */}
        <motion.div {...fade(0.3)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Brand Expression Guardrails</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-6">DO vs AVOID</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 rounded-full bg-[#8B7355] flex items-center justify-center">
                  <span className="text-white text-xs leading-none">✓</span>
                </div>
                <span className="text-sm font-medium text-[#2C2416] uppercase tracking-wider">VELARI Way</span>
              </div>
              <ul className="space-y-2">
                {guardrailsDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#4A3F35]">
                    <span className="text-[#C8B89A] shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 rounded-full bg-[#E8DDD0] flex items-center justify-center">
                  <span className="text-[#9B8C7A] text-xs leading-none">✕</span>
                </div>
                <span className="text-sm font-medium text-[#9B8C7A] uppercase tracking-wider">Avoid</span>
              </div>
              <ul className="space-y-2">
                {guardrailsAvoid.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#9B8C7A]">
                    <span className="shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Vocabulary */}
        <motion.div {...fade(0.35)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Key Brand Vocabulary</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-5">Words That Build the VELARI World</div>
          <div className="flex flex-wrap gap-2">
            {brandVocab.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.04 }}
                className="px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#C8B89A] text-sm text-[#4A3F35]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Emotional Roles + Mood */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div {...fade(0.4)}>
            <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Scent Emotional Roles</div>
            <div className="space-y-3">
              {emotionalRoles.map((role, i) => (
                <motion.div
                  key={role.number}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + i * 0.08 }}
                  className="bg-white rounded-xl border border-[#E4D9CC] p-5 flex gap-4"
                >
                  <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-3xl text-[#E8DDD0] font-light shrink-0">{role.number}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-base text-[#2C2416]">{role.title}</div>
                    <div className="text-xs text-[#8B7355] mt-0.5 uppercase tracking-wider">{role.subtitle}</div>
                    <p className="text-xs text-[#6B5C4A] mt-1">{role.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade(0.45)}>
            <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Brand Attribute Scores</div>
            <div className="bg-white rounded-xl border border-[#E4D9CC] p-6">
              <ResponsiveContainer width="100%" height={280}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#E8DDD0" />
                  <PolarAngleAxis dataKey="attribute" tick={{ fontSize: 10, fill: "#8B7355" }} />
                  <Radar name="VELARI" dataKey="score" stroke="#8B7355" fill="#C8B89A" fillOpacity={0.4} />
                  <Tooltip contentStyle={{ borderColor: "#E4D9CC", borderRadius: "8px" }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Mood Grid */}
        <motion.div {...fade(0.5)}>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Mood & Tone</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {moodWords.map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + i * 0.06 }}
                className="bg-white rounded-xl border border-[#E4D9CC] p-5 text-center"
              >
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-lg text-[#4A3F35]">{word}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
