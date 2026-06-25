"use client";

import { motion } from "framer-motion";
import { productsData } from "@/lib/data/products";

export function CollectionHierarchy() {
  return (
    <div className="space-y-4">
      {productsData.collections.map((collection, i) => (
        <motion.div
          key={collection.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-xl border border-[#E8DDD0] overflow-hidden"
        >
          <div className="px-5 py-4 flex items-center gap-3" style={{ borderLeft: `4px solid ${collection.color}` }}>
            <div>
              <p className="text-xs text-[#8B7355]">{collection.category}</p>
              <h4 className="font-serif text-lg text-[#2C2416]">{collection.name}</h4>
            </div>
          </div>
          <div className="px-5 pb-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            {collection.products.map((product) => (
              <div key={product.name} className="bg-[#FAF7F2] rounded-lg p-3">
                <p className="text-sm text-[#4A3F35] font-medium">{product.name}</p>
                <p className="text-xs text-[#8B7355]">{product.size}</p>
                <p className="text-xs text-[#C8B89A] mt-1 italic">{product.notes}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
