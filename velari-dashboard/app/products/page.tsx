"use client";

import { motion } from "framer-motion";
import { ProductTree } from "@/components/products/ProductTree";
import { CollectionHierarchy } from "@/components/products/CollectionHierarchy";
import { ProductMatrix } from "@/components/products/ProductMatrix";

export default function ProductsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <ProductTree />
      <div>
        <h3 className="font-serif text-xl text-[#2C2416] mb-4">Collection Hierarchy</h3>
        <CollectionHierarchy />
      </div>
      <div>
        <h3 className="font-serif text-xl text-[#2C2416] mb-4">Product Matrix</h3>
        <ProductMatrix />
      </div>
    </motion.div>
  );
}
