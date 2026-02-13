"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function Theme1Home() {
  const featuredProducts = products.filter((p) => p.isTrending).slice(0, 4);

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-stone-100">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2500&auto=format&fit=crop"
          alt="Luxury Fashion"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 text-center text-white">
          <span className="mb-4 text-sm font-medium tracking-[0.3em] uppercase opacity-90">
            Spring Summer 2026
          </span>
          <h1 className="mb-8 font-serif text-6xl italic md:text-8xl">
            Modern Elegance
          </h1>
          <Link
            href="/1/shop"
            className="group relative inline-flex items-center gap-2 overflow-hidden border border-white px-8 py-4 text-sm tracking-widest transition-all hover:bg-white hover:text-black"
          >
            DISCOVER COLLECTION
          </Link>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="group relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop"
              alt="Accessories"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <Link
                href="/1/shop?category=Accessories"
                className="bg-white px-8 py-3 text-sm tracking-widest text-black"
              >
                SHOP ACCESSORIES
              </Link>
            </div>
            <h3 className="absolute bottom-8 left-8 font-serif text-2xl text-white">
              Essentials
            </h3>
          </div>
          <div className="flex flex-col justify-center space-y-8 bg-white p-8 md:p-16">
            <h2 className="font-serif text-4xl italic">The New Standard</h2>
            <p className="leading-relaxed text-gray-500">
              Discover our latest collection of refined essentials, crafted with
              precision and tailored for the modern individual. Quality that
              speaks for itself.
            </p>
            <Link
              href="/1/shop"
              className="inline-flex items-center gap-2 text-sm tracking-widest transition-all hover:gap-4"
            >
              VIEW LOOKBOOK <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-serif text-3xl">Trending Now</h2>
          <Link
            href="/1/shop"
            className="text-xs tracking-widest text-gray-500 hover:text-black"
          >
            VIEW ALL
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/1/product/${product.id}`}
              className="group block"
            >
              <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                  src={product.colors[0]?.images[0] || ""}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-white px-2 py-1 text-[10px] tracking-widest">
                    NEW
                  </span>
                )}
              </div>
              <h3 className="font-serif text-lg decoration-1 underline-offset-4 group-hover:underline">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">${product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#1A1A1A] py-24 text-white">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl italic">Join the List</h2>
          <p className="mb-8 text-sm text-gray-400">
            Sign up for exclusive access to new drops and private sales.
          </p>
          <div className="flex border-b border-gray-600 pb-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent outline-none placeholder:text-gray-600"
            />
            <button className="text-xs tracking-widest hover:text-gray-300">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
