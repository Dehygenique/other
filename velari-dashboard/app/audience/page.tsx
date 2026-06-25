"use client";

import { motion } from "framer-motion";
import { PersonaCard } from "@/components/audience/PersonaCard";
import { JourneyMap } from "@/components/audience/JourneyMap";
import { SegmentProfile } from "@/components/audience/SegmentProfile";
import { audienceData } from "@/lib/data/audience";

export default function AudienceDashboard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {audienceData.segments.map((seg, i) => (
          <SegmentProfile
            key={seg.id}
            name={seg.name}
            percentage={seg.percentage}
            description={seg.description}
            painPoints={seg.painPoints}
            motivators={seg.motivators}
            index={i}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {audienceData.segments.map((seg, i) => (
          <PersonaCard
            key={seg.id}
            name={`The ${seg.name.slice(0, -1)}`}
            tagline={seg.tagline}
            demographics={seg.demographics}
            psychographics={seg.psychographics}
            index={i}
          />
        ))}
      </div>

      <JourneyMap />
    </motion.div>
  );
}
