"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

export default function Theme3Shop({ category }: { category?: string }) {
  const [filterCat, setFilterCat] = useState(category || "All");

  const filtered = products.filter(
    (p) => filterCat === "All" || p.category === filterCat,
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8 flex flex-col items-center justify-between rounded-xl border border-slate-100 bg-white p-4 shadow-sm md:flex-row">
        <div className="flex w-full gap-2 overflow-x-auto pb-2 md:w-auto md:pb-0">
          {["All", "Men", "Women", "Kids", "Accessories"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCat(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                filterCat === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-4 flex w-full gap-4 md:mt-0 md:w-auto">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
            Sort By <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <Link
            key={product.id}
            href={`/3/product/${product.id}`}
            className="group rounded-2xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-slate-50">
              <Image
                src={product.colors[0]?.images[0] || ""}
                alt={product.name}
                fill
                className="object-cover opacity-90 mix-blend-multiply transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute top-2 left-2">
                {product.isNew && (
                  <span className="rounded-full bg-blue-600 px-2 py-1 text-[10px] font-bold text-white">
                    NEW
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-start justify-between">
                <h3 className="line-clamp-1 font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1">
                  <span className="text-[10px] font-bold text-slate-900">
                    ★
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    {product.rating}
                  </span>
                </div>
              </div>
              <p className="mt-1 mb-3 text-sm text-slate-500">
                {product.category}
              </p>
              <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2">
                <span className="text-lg font-bold text-slate-900">
                  ${product.price}
                </span>
                <span className="translate-x-2 transform text-sm font-bold text-blue-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                  View Details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
