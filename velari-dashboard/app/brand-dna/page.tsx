"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const archetypes = [
  {
    tier: "TOP",
    name: "The Creator-Curator",
    thai: "ผู้สร้างสรรค์และคัดสรร",
    role: "Scent curator, fabric ritual creator, private fragrance editor",
    action: "แบรนด์ออกแบบและคัดสรรกลิ่นที่มีรสนิยมไว้ให้ลูกค้าเลือก ตาม moment และ lifestyle",
    color: "#2C2416",
  },
  {
    tier: "MIDDLE",
    name: "The Caregiver",
    thai: "ผู้ดูแลที่อ่อนโยน",
    role: "Beautiful scent should never compromise care",
    action: "ความหอมต้องมาพร้อมความรู้สึกปลอดภัย อ่อนโยนต่อผิว ผ้า และโลก",
    color: "#8B7355",
  },
  {
    tier: "BASE",
    name: "The Innocent",
    thai: "ความบริสุทธิ์",
    role: "Clean purity, refined through scent",
    action: "ความสะอาด โปร่ง เบา ปลอดภัย (Refined clean, not mass market bright)",
    color: "#C8B89A",
  },
];

const roadmap = [
  {
    number: "01",
    title: "Routine to Ritual",
    desc: "เปลี่ยนการซักผ้าจากงานบ้านให้เป็น ritual เล็กๆ ของการดูแลตัวเอง",
  },
  {
    number: "02",
    title: "Curate, Not Customize",
    desc: "ลูกค้าไม่ได้ออกแบบกลิ่นเอง แต่แบรนด์เป็นผู้คัดสรร scent collection ที่มีรสนิยมให้เลือก",
  },
  {
    number: "03",
    title: "Balance Luxury with Safety",
    desc: "ทำให้ความหอมไม่ถูกมองว่าแรง ฉุน หรือเป็นภาระต่อผิว",
  },
  {
    number: "04",
    title: "Moment as Storytelling",
    desc: "ใช้ moment เป็นภาษาการเล่ากลิ่น แทนการพูดถึง ingredient ตรงๆ",
  },
];

const territories = [
  { name: "Skin-Safe", desc: "อ่อนโยนต่อผิว มั่นใจได้เมื่อสัมผัส" },
  { name: "Private Scent", desc: "กลิ่นเฉพาะตัว ไม่ตลาด ไม่โหล" },
  { name: "Quiet Wealth", desc: "ความหรูหราแบบสุขุม ใช้ได้จริงในชีวิตประจำวัน" },
  { name: "Eco-Conscious", desc: "ใส่ใจโลกแบบ premium และ considered" },
  { name: "Emotional Presence", desc: "เติมความหมายให้ช่วงเวลาของผู้ใช้" },
  { name: "Clean Luxury", desc: "ความหอมสะอาดแบบพรีเมียม ไม่ฉูดฉาด" },
];

export default function BrandDNAPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Hero */}
        <motion.div {...fade(0)} className="bg-[#2C2416] rounded-2xl p-10 text-center">
          <div className="text-xs text-[#C8B89A] tracking-[0.3em] uppercase mb-4">Brand Essence</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-5xl text-[#FAF7F2] font-light italic leading-tight mb-4">
            Private Scent That Stays Close
          </div>
          <div className="text-[#C8B89A]/70 text-sm max-w-xl mx-auto leading-relaxed">
            A scent that doesn&apos;t stay on fabric — it stays with you.
          </div>
        </motion.div>

        {/* Vision + Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div {...fade(0.1)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
            <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-3">Vision</div>
            <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] leading-snug mb-4">
              To be the fabric care brand that transforms scent on fabric and skin contact into a private emotional scent
            </div>
            <p className="text-sm text-[#6B5C4A] leading-relaxed">
              clean, safe, refined, and tasteful.
            </p>
            <div className="mt-4 pt-4 border-t border-[#E8DDD0]">
              <p className="text-xs text-[#9B8C7A] leading-relaxed">
                เป็นแบรนด์ fabric care ที่ทำให้กลิ่นบนผ้าและผิวสัมผัสกลายเป็น private emotional scent ที่สะอาด ปลอดภัย แพง และมีรสนิยม
              </p>
            </div>
          </motion.div>

          <motion.div {...fade(0.15)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
            <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-3">Mission</div>
            <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] leading-snug mb-4">
              To blend niche-quality scent with skin-gentle, eco-conscious care
            </div>
            <p className="text-sm text-[#6B5C4A] leading-relaxed">
              Elevating fabric care into a meaningful daily ritual.
            </p>
            <div className="mt-4 pt-4 border-t border-[#E8DDD0]">
              <p className="text-xs text-[#9B8C7A] leading-relaxed">
                ผสานกลิ่นหอมแบบ niche scent เข้ากับความอ่อนโยนต่อผิวและการใส่ใจโลก เพื่อยกระดับการดูแลผ้าให้เป็น ritual ที่มีความหมาย
              </p>
            </div>
          </motion.div>
        </div>

        {/* Conceptual Shift */}
        <motion.div {...fade(0.2)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Conceptual Shift</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-6">From MOMENT to VELARI</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#FAF7F2] rounded-lg p-5 border border-[#E4D9CC]">
              <div className="text-xs text-[#9B8C7A] tracking-wider uppercase mb-2">Before — MOMENT</div>
              <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-lg text-[#9B8C7A] mb-2">Every Moment Deserves To Feel Better</div>
              <p className="text-sm text-[#9B8C7A]">Generic positioning. Lacked skin-safety and exclusive signals. No distinct brand world.</p>
            </div>
            <div className="bg-[#2C2416] rounded-lg p-5">
              <div className="text-xs text-[#C8B89A] tracking-wider uppercase mb-2">After — VELARI</div>
              <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-lg text-[#FAF7F2] mb-2">Private Scented Fabric Care</div>
              <p className="text-sm text-[#C8B89A]/80">Brand world of private luxury fabric scent. Clear architecture: VELARI Brand World → Private Scented Fabric Care → Scent Collections.</p>
            </div>
          </div>
        </motion.div>

        {/* Archetype Pyramid */}
        <motion.div {...fade(0.25)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Brand Archetype Architecture</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-6">The Pyramid</div>
          <div className="space-y-3">
            {archetypes.map((arch, i) => (
              <motion.div
                key={arch.name}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-lg p-5 flex items-start gap-4"
                style={{ backgroundColor: arch.color + "18", borderLeft: `3px solid ${arch.color}` }}
              >
                <div className="shrink-0">
                  <div className="text-xs font-medium text-[#9B8C7A] mb-0.5">{arch.tier}</div>
                  <div style={{ fontFamily: "var(--font-cormorant)", color: arch.color }} className="text-xl">{arch.name}</div>
                  <div className="text-xs text-[#9B8C7A]">{arch.thai}</div>
                </div>
                <div className="border-l border-[#E4D9CC] pl-4">
                  <div className="text-sm text-[#4A3F35] mb-1 font-medium">{arch.role}</div>
                  <div className="text-xs text-[#9B8C7A]">{arch.action}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Roadmap */}
        <motion.div {...fade(0.3)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Strategic Roadmap</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-6">4 Strategic Imperatives</div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.08 }}
                className="relative p-5 rounded-lg bg-[#FAF7F2] border border-[#E4D9CC]"
              >
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-4xl text-[#E8DDD0] font-light mb-2">{item.number}</div>
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-base text-[#2C2416] mb-2">{item.title}</div>
                <div className="text-xs text-[#8B7355] leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Territories */}
        <motion.div {...fade(0.4)}>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Core Brand Territory — VELARI = Clean Luxury</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {territories.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.07 }}
                className="bg-white rounded-xl border border-[#E4D9CC] p-5"
              >
                <div className="w-2 h-2 rounded-full bg-[#8B7355] mb-3" />
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-lg text-[#2C2416] mb-1">{t.name}</div>
                <div className="text-xs text-[#6B5C4A]">{t.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Guardrails */}
        <motion.div {...fade(0.45)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Brand Expression Guardrails</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-6">VELARI Way vs Mass Way</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#F5F0E8] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-[#8B7355] flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm font-medium text-[#2C2416] tracking-wider uppercase">VELARI Way</span>
              </div>
              <ul className="space-y-2 text-sm text-[#4A3F35]">
                <li className="flex items-start gap-2"><span className="text-[#C8B89A] mt-0.5">—</span> เล่า atmosphere ของช่วงเวลา</li>
                <li className="flex items-start gap-2"><span className="text-[#C8B89A] mt-0.5">—</span> โทน Warm white, porcelain, mist beige</li>
                <li className="flex items-start gap-2"><span className="text-[#C8B89A] mt-0.5">—</span> Niche perfume, boutique hotel, soft shadow</li>
                <li className="flex items-start gap-2"><span className="text-[#C8B89A] mt-0.5">—</span> private · soft · skin-close · airy · considered</li>
              </ul>
            </div>
            <div className="bg-[#FAF7F2] rounded-lg p-6 border border-dashed border-[#E4D9CC]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-[#E8DDD0] flex items-center justify-center">
                  <span className="text-[#9B8C7A] text-xs">✕</span>
                </div>
                <span className="text-sm font-medium text-[#9B8C7A] tracking-wider uppercase">Mass Way — Avoid</span>
              </div>
              <ul className="space-y-2 text-sm text-[#9B8C7A]">
                <li className="flex items-start gap-2"><span className="mt-0.5">—</span> ห้ามตะโกน ห้ามใช้คำว่า &quot;หอมฟุ้งทั้งซอย&quot;</li>
                <li className="flex items-start gap-2"><span className="mt-0.5">—</span> น้ำยาปรับผ้านุ่ม supermarket สีสด</li>
                <li className="flex items-start gap-2"><span className="mt-0.5">—</span> ดอกไม้เยอะ ฟองเยอะ ผ้าสีจัด</li>
                <li className="flex items-start gap-2"><span className="mt-0.5">—</span> Loud claims, generic visuals</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
