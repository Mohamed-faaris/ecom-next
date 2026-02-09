"use client";

import { useWishlist } from "@/hooks/use-wishlist";
import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function WishlistPage({
  params,
}: {
  params: Promise<{ theme: string }>;
}) {
  const { theme } = use(params);
  const { wishlist, isClient } = useWishlist();

  // Prevent hydration mismatch
  if (!isClient) return null;

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div
      className={`min-h-screen p-8 ${theme === "2" ? "bg-black text-white" : theme === "3" ? "bg-slate-50 text-slate-900" : "bg-[#FDFBF7] text-[#1A1A1A]"}`}
    >
      <h1 className="mb-8 text-3xl font-bold">Your Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {wishlistProducts.map((p) => (
            <Link
              key={p.id}
              href={`/${theme}/product/${p.id}`}
              className="group"
            >
              <div className="relative mb-4 aspect-[3/4] bg-gray-100">
                <Image
                  src={p.colors[0]?.images[0] || ""}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold">{p.name}</h3>
              <p>${p.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
