"use client";

import { motion } from "framer-motion";
import { productsData } from "@/lib/data/products";

export function ProductTree() {
  return (
    <div>
      <h3 className="font-serif text-xl text-[#2C2416] mb-6">Product Architecture</h3>
      <div className="relative">
        <div className="bg-[#2C2416] rounded-xl p-4 text-center mb-6 w-48 mx-auto">
          <p className="font-serif text-lg text-[#FAF7F2]">VELARI</p>
          <p className="text-xs text-[#C8B89A]">Brand</p>
        </div>
        <div className="flex justify-center mb-2">
          <div className="w-px h-6 bg-[#E8DDD0]" />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          {productsData.collections.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-3 border border-[#E8DDD0] text-center"
            >
              <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ backgroundColor: col.color }} />
              <p className="text-xs font-medium text-[#4A3F35]">{col.name}</p>
              <p className="text-xs text-[#8B7355]">{col.products.length} products</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
