"use client";

export function TypographySystem() {
  return (
    <div className="bg-white rounded-2xl p-8 border border-[#E8DDD0]">
      <h3 className="font-serif text-xl text-[#2C2416] mb-8">Typography System</h3>
      <div className="space-y-8 divide-y divide-[#E8DDD0]">
        <div>
          <p className="text-xs text-[#8B7355] tracking-wider mb-3">DISPLAY — Cormorant Garamond Light 300</p>
          <p className="font-serif text-5xl text-[#2C2416] font-light">Private Scent</p>
        </div>
        <div className="pt-6">
          <p className="text-xs text-[#8B7355] tracking-wider mb-3">HEADING 1 — Cormorant Garamond 400</p>
          <p className="font-serif text-3xl text-[#2C2416]">That Stays Close</p>
        </div>
        <div className="pt-6">
          <p className="text-xs text-[#8B7355] tracking-wider mb-3">HEADING 2 — Cormorant Garamond 500</p>
          <p className="font-serif text-2xl text-[#2C2416] font-medium">Quiet Luxury in Every Room</p>
        </div>
        <div className="pt-6">
          <p className="text-xs text-[#8B7355] tracking-wider mb-3">BODY — Inter 400</p>
          <p className="font-sans text-base text-[#4A3F35] leading-relaxed max-w-lg">
            VELARI is the art of creating space that breathes. Each product is designed to disappear into your routine — becoming as natural as the morning light.
          </p>
        </div>
        <div className="pt-6">
          <p className="text-xs text-[#8B7355] tracking-wider mb-3">CAPTION — Inter 300</p>
          <p className="font-sans text-sm text-[#8B7355] font-light">Collection No. 01 — The Morning Ritual Series</p>
        </div>
      </div>
    </div>
  );
}
