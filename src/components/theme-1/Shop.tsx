"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import type { Product } from "@/types";

export default function Theme1Shop({ category }: { category?: string }) {
  const [filterCat, setFilterCat] = useState(category || "All");

  const filtered = products.filter(
    (p) => filterCat === "All" || p.category === filterCat,
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
        <h1 className="font-serif text-4xl italic">Shop Collection</h1>
        <div className="flex gap-8 text-xs tracking-widest text-gray-500">
          {["All", "Men", "Women", "Kids", "Accessories"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`${
                filterCat === cat
                  ? "text-black underline decoration-1 underline-offset-4"
                  : "hover:text-black"
              } uppercase transition-colors`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/1/product/${product.id}`}
            className="group block"
          >
            <div className="relative mb-6 aspect-[3/4] overflow-hidden bg-gray-100">
              <Image
                src={product.colors[0]?.images[0] || ""}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 text-xs tracking-widest text-black opacity-0 transition-all duration-300 group-hover:bottom-8 group-hover:opacity-100">
                QUICK VIEW
              </button>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg text-gray-900 group-hover:text-black">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
