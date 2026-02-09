"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function Theme2Home() {
  const trending = products.filter((p) => p.isTrending).slice(0, 3);

  return (
    <div className="space-y-32">
      {/* Hero */}
      <section className="relative h-[70vh] w-full overflow-hidden border-b-2 border-[#CCFF00] bg-[#111]">
        <div className="pointer-events-none absolute inset-0 grid grid-cols-2 opacity-20">
          <div className="border-r border-[#333]"></div>
          <div></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="z-10 text-[12vw] leading-[0.8] font-black text-white uppercase mix-blend-difference">
            FUTURE
            <br />
            <span className="stroke-text text-transparent">WEAR</span>
          </h1>
          <Link
            href="/2/shop"
            className="mt-8 rotate-3 bg-[#CCFF00] px-12 py-4 text-xl font-bold text-black uppercase transition-transform hover:scale-110"
          >
            Shop Now
          </Link>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2500&auto=format&fit=crop"
          alt="Streetwear"
          fill
          className="object-cover opacity-40 mix-blend-overlay grayscale"
        />
      </section>

      {/* Categories */}
      <section className="px-4">
        <h2 className="mb-8 px-4 text-4xl font-black text-[#CCFF00] uppercase">
          Collections
        </h2>
        <div className="grid grid-cols-1 gap-0 border-2 border-[#333] md:grid-cols-3">
          {[
            {
              name: "Outerwear",
              img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000",
            },
            {
              name: "Tops",
              img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000",
            },
            {
              name: "Bottoms",
              img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000",
            },
          ].map((cat, i) => (
            <Link
              key={i}
              href="/2/shop"
              className="group relative h-[500px] overflow-hidden border-r border-[#333] last:border-r-0"
            >
              <Image
                src={cat.img}
                alt={cat.name}
                fill
                className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="bg-black px-2 text-3xl font-black text-white uppercase italic group-hover:text-[#CCFF00]">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Product Highlight */}
      <section className="px-4">
        <div className="relative overflow-hidden border-2 border-[#CCFF00] bg-[#111] p-8 md:p-16">
          <div className="relative z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <span className="mb-4 inline-block bg-[#CCFF00] px-2 py-1 text-sm font-bold text-black uppercase">
                Trending
              </span>
              <h2 className="mb-6 text-5xl font-black text-white uppercase md:text-7xl">
                Hoodie
                <br />
                SZN
              </h2>
              <p className="mb-8 max-w-md font-mono text-gray-400">
                Heavyweight cotton. Dropped shoulders. The silhouette of the
                season is here. Don't miss out.
              </p>
              <Link
                href="/2/shop"
                className="inline-block border-2 border-white px-8 py-3 font-bold text-white uppercase transition-colors hover:bg-white hover:text-black"
              >
                Cop Now
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000"
                alt="Hoodie"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Decorative BG Text */}
          <div className="absolute top-0 right-0 -z-0 text-[20vw] leading-none font-black text-[#1a1a1a] select-none">
            Y2K
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-4 pb-20">
        <h2 className="mb-8 ml-4 border-l-8 border-[#CCFF00] px-4 pl-4 text-4xl font-black text-white uppercase">
          Latest Drops
        </h2>
        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
          {trending.map((product) => (
            <Link
              key={product.id}
              href={`/2/product/${product.id}`}
              className="group block"
            >
              <div className="relative h-[400px] border-2 border-[#333] bg-[#0a0a0a] transition-colors group-hover:border-[#CCFF00]">
                <Image
                  src={product.colors[0]?.images[0] || ""}
                  alt={product.name}
                  fill
                  className="object-cover p-4 transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-[#CCFF00] px-2 py-1 text-xs font-bold text-black">
                  ${product.price}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="truncate text-xl font-bold uppercase">
                  {product.name}
                </h3>
                <p className="font-mono text-sm text-gray-500">
                  {product.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
