"use client";

import { productsData } from "@/lib/data/products";

export function ProductMatrix() {
  return (
    <div className="bg-white rounded-2xl border border-[#E8DDD0] overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#E8DDD0] bg-[#FAF7F2]">
            <th className="text-left px-4 py-3 text-xs text-[#8B7355] tracking-wider">COLLECTION</th>
            <th className="text-left px-4 py-3 text-xs text-[#8B7355] tracking-wider">CATEGORY</th>
            <th className="text-left px-4 py-3 text-xs text-[#8B7355] tracking-wider">PRODUCTS</th>
            <th className="text-left px-4 py-3 text-xs text-[#8B7355] tracking-wider">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {productsData.collections.map((col, i) => (
            <tr key={col.id} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]/50"}>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: col.color }} />
                  <span className="font-serif text-sm text-[#2C2416]">{col.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-xs text-[#8B7355]">{col.category}</td>
              <td className="px-4 py-3 text-xs text-[#4A3F35]">{col.products.length}</td>
              <td className="px-4 py-3 text-xs text-[#4A3F35] max-w-xs">{col.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
