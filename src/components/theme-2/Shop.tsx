"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function Theme2Shop({ category }: { category?: string }) {
  const [filterCat, setFilterCat] = useState(category || "All");

  const filtered = products.filter(
    (p) => filterCat === "All" || p.category === filterCat,
  );

  return (
    <div className="px-4">
      <div className="sticky top-[73px] z-30 mb-8 flex flex-wrap gap-4 border-b-2 border-[#CCFF00] bg-[#050505] py-4">
        {["All", "Men", "Women", "Kids", "Accessories"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCat(cat)}
            className={`transform border-2 px-6 py-2 text-sm font-black tracking-widest uppercase transition-all hover:-translate-y-1 ${
              filterCat === cat
                ? "border-[#CCFF00] bg-[#CCFF00] text-black"
                : "border-[#333] bg-transparent text-white hover:border-[#CCFF00]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/2/product/${product.id}`}
            className="group relative block border-2 border-[#333] bg-[#111] transition-colors hover:border-[#CCFF00]"
          >
            <div className="relative aspect-square overflow-hidden border-b-2 border-[#333] group-hover:border-[#CCFF00]">
              <Image
                src={product.colors[0]?.images[0] || ""}
                alt={product.name}
                fill
                className="object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {product.isNew && (
                  <span className="bg-[#CCFF00] px-2 py-1 text-xs font-bold text-black uppercase">
                    New Drop
                  </span>
                )}
                {product.rating > 4.7 && (
                  <span className="bg-white px-2 py-1 text-xs font-bold text-black uppercase">
                    Fire
                  </span>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="w-3/4 text-xl leading-none font-black text-white uppercase">
                  {product.name}
                </h3>
                <span className="font-mono text-xl font-bold text-[#CCFF00]">
                  ${product.price}
                </span>
              </div>
              <p className="mb-4 font-mono text-xs text-gray-500 uppercase">
                {product.category} // {product.material}
              </p>
              <button className="w-full bg-[#333] py-3 font-bold text-white uppercase transition-colors hover:bg-[#CCFF00] hover:text-black">
                View Item
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
