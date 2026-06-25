"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const segments = [
  {
    name: "Thinkers",
    percentage: 35,
    type: "Primary",
    hook: "ความหอมที่คิดมาแล้ว เพื่อผิว ผ้า และตัวตนของคุณ",
    profile: "ต้องการเหตุผลรองรับความรู้สึก ซื้อเพราะแบรนด์ให้เหตุผลได้ว่าทำไมความหอมนี้จึงควรอยู่ใกล้ผิว (Skin-safe, eco-conscious)",
    age: "35–48",
    income: "30,000+ THB/month",
    color: "#C8B89A",
  },
  {
    name: "Achievers",
    percentage: 30,
    type: "Primary",
    hook: "ความหรูที่เริ่มจากผ้าที่คุณสัมผัสทุกวัน",
    profile: "ใช้สินค้าเป็น self-reward และยกระดับคุณภาพชีวิตประจำวัน มอง VELARI เป็นรายละเอียดที่ทำให้บ้านและ routine ธรรมดามีระดับขึ้น",
    age: "35–52",
    income: "50,000+ THB/month",
    color: "#8B7355",
  },
  {
    name: "Innovators",
    percentage: 20,
    type: "Secondary",
    hook: "กลิ่นของตัวตนที่ไม่ต้องเหมือนใคร",
    profile: "ซื้อเพราะ taste แบรนด์เหมือนอยู่ในโลก niche fragrance กลิ่นไม่โหล แพ็กเกจไม่ mass",
    age: "28–42",
    income: "30,000+ THB/month",
    color: "#4A3F35",
  },
  {
    name: "Experiencers",
    percentage: 15,
    type: "Secondary",
    hook: "เลือกกลิ่นตามจังหวะชีวิต ไม่ใช่แค่ตามโน้ตน้ำหอม",
    profile: "ชอบ collection name และ scent story ชื่นชอบการเปลี่ยนการซักผ้าเป็นการพักผ่อนที่พิเศษขึ้น",
    age: "25–40",
    income: "25,000+ THB/month",
    color: "#B8A47A",
  },
];

const emotionalRoles = [
  {
    number: "01",
    title: "The Presence of Someone Loved",
    subtitle: "Comfort & Presence",
    desc: "กลิ่นที่ทำให้รู้สึกถึงการมีอยู่ของใครบางคนอันเป็นที่รัก",
    detail: "อบอุ่น คุ้นเคย เหมือนเสื้อเชิ้ตตัวโปรดของคนรัก",
  },
  {
    number: "02",
    title: "The Version of Myself I Love Most",
    subtitle: "Identity & Calm",
    desc: "กลิ่นที่ทำให้รู้สึกว่าได้เป็นตัวของตัวเองอย่างเต็มที่",
    detail: "มั่นใจ ผ่อนคลาย เป็นธรรมชาติ ทำหน้าที่เหมือน signature scent ส่วนตัว",
  },
  {
    number: "03",
    title: "The Meaningful Moments I Cherish",
    subtitle: "Ritual & Meaning",
    desc: "กลิ่นที่ทำให้ช่วงเวลาธรรมดากลายเป็นช่วงเวลาที่มีความหมาย",
    detail: "เปลี่ยน routine เล็กๆ เช่น การสวมเสื้อผ้าสะอาดยามเช้า ให้เป็น private ritual",
  },
];

export default function AudiencePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* The Muse */}
        <motion.div {...fade(0)} className="bg-[#2C2416] rounded-2xl p-8">
          <div className="text-xs text-[#C8B89A] tracking-[0.3em] uppercase mb-4">The Muse — Target Audience</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-3xl text-[#FAF7F2] font-light leading-snug mb-4">
                Age 30–55 · Urban · SEC B+ to A
              </div>
              <div className="space-y-2 text-sm text-[#C8B89A]/80">
                <p>Income: 30,000+ THB/month</p>
                <p>Established income, values quality of life and living space</p>
                <p>มองเสื้อผ้าและบ้านเป็นพื้นที่สะท้อนตัวตน</p>
                <p>เลือกของใช้ในบ้านเหมือนเลือก skincare หรือ niche perfume</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-xs text-[#C8B89A] mb-3 uppercase tracking-wider">The Muse Quote</div>
              <blockquote style={{ fontFamily: "var(--font-cormorant)" }} className="text-xl text-[#FAF7F2] italic leading-relaxed">
                &ldquo;I don&apos;t want to create my own fragrance. But I want a brand that has already selected scents that are good, expensive, safe, and not overpowering...&rdquo;
              </blockquote>
              <div className="mt-3 text-xs text-[#C8B89A]/60">— VELARI Target Customer Insight</div>
            </div>
          </div>
        </motion.div>

        {/* VALS Segments */}
        <div>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">VALS Audience Segments</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {segments.map((seg, i) => (
              <motion.div
                key={seg.name}
                {...fade(0.1 + i * 0.08)}
                className="bg-white rounded-xl border border-[#E4D9CC] p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416]">{seg.name}</div>
                    <div className="text-xs text-[#8B7355] mt-0.5">{seg.type} Segment</div>
                  </div>
                  <div className="text-right">
                    <div style={{ fontFamily: "var(--font-cormorant)", color: seg.color }} className="text-3xl">{seg.percentage}%</div>
                    <div className="text-xs text-[#9B8C7A]">{seg.age}</div>
                  </div>
                </div>
                <div className="h-1.5 rounded-full bg-[#E8DDD0] mb-4">
                  <motion.div
                    className="h-1.5 rounded-full"
                    style={{ backgroundColor: seg.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${seg.percentage}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  />
                </div>
                <div className="text-xs text-[#9B8C7A] mb-2 uppercase tracking-wider">Hook</div>
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-base text-[#4A3F35] mb-3 italic">{seg.hook}</div>
                <p className="text-xs text-[#6B5C4A] leading-relaxed">{seg.profile}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scent Emotional Roles */}
        <motion.div {...fade(0.4)}>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">3 Scent Emotional Roles</div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {emotionalRoles.map((role, i) => (
              <motion.div
                key={role.number}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 + i * 0.1 }}
                className="bg-white rounded-xl border border-[#E4D9CC] p-6"
              >
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-5xl text-[#E8DDD0] font-light mb-3">{role.number}</div>
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-xl text-[#2C2416] leading-snug mb-1">{role.title}</div>
                <div className="text-xs text-[#8B7355] tracking-wider uppercase mb-3">{role.subtitle}</div>
                <p className="text-sm text-[#4A3F35] mb-2">{role.desc}</p>
                <p className="text-xs text-[#9B8C7A] leading-relaxed">{role.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
