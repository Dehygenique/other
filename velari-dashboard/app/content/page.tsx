"use client";

import { motion } from "framer-motion";
import { ContentPillars } from "@/components/content/ContentPillars";
import { MessagingFramework } from "@/components/content/MessagingFramework";
import { EmotionalTriggers } from "@/components/content/EmotionalTriggers";

export default function ContentStrategyPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div>
        <h3 className="font-serif text-xl text-[#2C2416] mb-6">Content Pillars</h3>
        <ContentPillars />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MessagingFramework />
        <EmotionalTriggers />
      </div>
    </motion.div>
  );
}
