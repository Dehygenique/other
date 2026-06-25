"use client";

import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const collections = [
  {
    number: "01",
    name: "The Calm Before the Noise",
    scent: "Morning Sky",
    colorName: "Soft Blue Grey",
    hex: "#B8C4C8",
    desc: "A stillness captured before the world awakens. Light, airy, and subtly mineral — the scent of pre-dawn air on clean cotton.",
  },
  {
    number: "02",
    name: "Mind Slow Down",
    scent: "Tea Leaf",
    colorName: "Muted Sage",
    hex: "#B8BCA8",
    desc: "The ritual of stepping back. Green, grounded, and quietly restorative — like the first sip of morning tea in silence.",
  },
  {
    number: "03",
    name: "An Invitation to Indulge",
    scent: "Champagne Linen",
    colorName: "Soft Champagne",
    hex: "#D4C4A8",
    desc: "Permission to soften. Warm, rich, and quietly celebratory — fabric that feels like a private luxury reward.",
  },
  {
    number: "04",
    name: "Unplugged & Slow Living",
    scent: "Sun-Washed Cotton",
    colorName: "Warm Taupe",
    hex: "#C4B090",
    desc: "The unhurried afternoon. Clean warmth, golden light, and the ease of doing nothing beautifully.",
  },
];

const benchmarks = [
  {
    brand: "Aman Resorts",
    takeaway: "Private, Quiet Luxury & Meaningful Moment",
    lesson: "Luxury is defined by what is omitted, not what is added. Presence over performance.",
  },
  {
    brand: "Bang & Olufsen",
    takeaway: "Elevate Routine into Ritual & Quietly Distinctive",
    lesson: "Premium objects transform everyday actions into considered rituals. Design earns its price silently.",
  },
  {
    brand: "Blue Bottle Coffee / Omakase",
    takeaway: "Curated, Not Customized",
    lesson: "The brand as expert curator removes the burden of choice and elevates the experience.",
  },
  {
    brand: "Polestar",
    takeaway: "Make Eco Feel Refined & Considered Living",
    lesson: "Sustainability and luxury are not opposites. Eco-consciousness can be the most refined position.",
  },
];

const posDirections = [
  {
    title: "Home Memory Corner",
    desc: "A quiet home-styled corner with framed memory imagery and soft textures",
    detail: "Creates an intimate retail environment that mirrors the VELARI home world — letting customers experience the scent in context.",
  },
  {
    title: "Ritual Refill Station",
    tagline: "Refill the Scent. Revisit the Memory.",
    desc: "VELARI Memory Fragrance House concept",
    detail: "The refill station reinforces eco-conscious values while creating a ritualistic return touchpoint — turning repurchase into ceremony.",
  },
];

export default function ProductsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Collections */}
        <div>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Scent Collections</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {collections.map((col, i) => (
              <motion.div
                key={col.name}
                {...fade(i * 0.1)}
                className="bg-white rounded-xl border border-[#E4D9CC] overflow-hidden"
              >
                <div className="h-2 w-full" style={{ backgroundColor: col.hex }} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-3xl text-[#E8DDD0] font-light">{col.number}</div>
                      <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-xl text-[#2C2416] leading-snug">{col.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#8B7355]">{col.scent}</div>
                      <div className="flex items-center gap-1.5 mt-1 justify-end">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: col.hex }} />
                        <div className="text-xs text-[#9B8C7A]">{col.colorName}</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B5C4A] leading-relaxed">{col.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Matrix */}
        <motion.div {...fade(0.3)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Product Matrix</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-6">Collection Architecture</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E4D9CC]">
                  <th className="text-left py-2 px-3 text-xs text-[#8B7355] tracking-wider uppercase font-medium">Collection</th>
                  <th className="text-left py-2 px-3 text-xs text-[#8B7355] tracking-wider uppercase font-medium">Scent Name</th>
                  <th className="text-left py-2 px-3 text-xs text-[#8B7355] tracking-wider uppercase font-medium">Color Direction</th>
                  <th className="text-left py-2 px-3 text-xs text-[#8B7355] tracking-wider uppercase font-medium">Emotional Role</th>
                </tr>
              </thead>
              <tbody>
                {collections.map((col) => (
                  <tr key={col.name} className="border-b border-[#F0E8DE] hover:bg-[#FAF7F2] transition-colors">
                    <td className="py-3 px-3 text-[#2C2416]">{col.name}</td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: col.hex }} />
                        <span className="text-[#4A3F35]">{col.scent}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-[#8B7355]">{col.colorName}</td>
                    <td className="py-3 px-3 text-xs text-[#9B8C7A]">Private Ritual</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Packaging Philosophy */}
        <motion.div {...fade(0.35)} className="bg-[#2C2416] rounded-2xl p-8">
          <div className="text-xs text-[#C8B89A] tracking-[0.3em] uppercase mb-4">Packaging Philosophy</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-3xl text-[#FAF7F2] italic mb-6">
            &ldquo;This scent belongs to a memory.&rdquo;
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <div className="text-xs text-[#C8B89A] uppercase tracking-wider mb-2">Hero Material</div>
              <div className="text-sm text-[#FAF7F2]/80 space-y-1">
                <p>Eco-Conscious Refillable Aluminum Scent Vessel</p>
                <p>Matte aluminum · Brushed satin</p>
                <p>Champagne anodized · Warm ivory coated</p>
              </div>
            </div>
            <div>
              <div className="text-xs text-[#C8B89A] uppercase tracking-wider mb-2">Label Hierarchy</div>
              <div className="text-sm text-[#FAF7F2]/80 space-y-1">
                <p>VELARI</p>
                <p>Private Scented Fabric Care</p>
                <p>[Scent Collection Name]</p>
                <p>Private Scent That Stays Close</p>
                <p className="text-[#C8B89A]/60 text-xs">LESS WASTE MORE CARE</p>
              </div>
            </div>
            <div>
              <div className="text-xs text-[#C8B89A] uppercase tracking-wider mb-2">Sustainable Promise</div>
              <div className="text-sm text-[#FAF7F2]/80 space-y-1">
                <p>100% Recyclable Aluminum</p>
                <p>Designed to be Refilled and Reused</p>
                <p>Made to Last</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* POS Directions */}
        <div>
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">POS Direction</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {posDirections.map((pos, i) => (
              <motion.div
                key={pos.title}
                {...fade(0.4 + i * 0.1)}
                className="bg-white rounded-xl border border-[#E4D9CC] p-6"
              >
                <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-xl text-[#2C2416] mb-2">{pos.title}</div>
                {pos.tagline && (
                  <div className="text-sm text-[#8B7355] italic mb-3">{pos.tagline}</div>
                )}
                <p className="text-sm text-[#4A3F35] mb-3">{pos.desc}</p>
                <p className="text-xs text-[#9B8C7A] leading-relaxed">{pos.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benchmarks */}
        <motion.div {...fade(0.5)} className="bg-white rounded-xl border border-[#E4D9CC] p-7">
          <div className="text-xs text-[#8B7355] tracking-widest uppercase mb-4">Cross-Industry Benchmarks</div>
          <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-2xl text-[#2C2416] mb-6">Brands VELARI Benchmarks Against</div>
          <div className="space-y-4">
            {benchmarks.map((b, i) => (
              <motion.div
                key={b.brand}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 + i * 0.08 }}
                className="flex gap-4 p-4 rounded-lg bg-[#FAF7F2] border border-[#E4D9CC]"
              >
                <div className="shrink-0 w-32">
                  <div style={{ fontFamily: "var(--font-cormorant)" }} className="text-base text-[#2C2416]">{b.brand}</div>
                </div>
                <div className="border-l border-[#E4D9CC] pl-4 flex-1">
                  <div className="text-xs text-[#8B7355] tracking-wider uppercase mb-1">{b.takeaway}</div>
                  <p className="text-sm text-[#6B5C4A]">{b.lesson}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
