"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { ArrowRight, Zap, Wind, Activity } from "lucide-react";

export default function Theme3Home() {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="relative h-[600px] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply" />
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2500&auto=format&fit=crop"
          alt="Active"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-xl text-white">
            <span className="mb-6 inline-block rounded-full border border-blue-500 bg-blue-600/30 px-3 py-1 text-xs font-bold tracking-wide text-blue-300 uppercase">
              New Collection
            </span>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl">
              Unlock Your <span className="text-blue-500">Potential</span>
            </h1>
            <p className="mb-8 text-lg font-light text-slate-300">
              Engineered for peak performance. Our latest collection features
              advanced breathable fabrics and ergonomic designs.
            </p>
            <div className="flex gap-4">
              <Link
                href="/3/shop"
                className="rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-900/50 transition-all hover:bg-blue-700"
              >
                Shop Collection
              </Link>
              <Link
                href="/3/shop"
                className="rounded-lg border border-white/10 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">
              Advanced Tech
            </h3>
            <p className="leading-relaxed text-slate-500">
              Moisture-wicking materials that keep you dry during intense
              workouts.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
              <Wind className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">
              Lightweight
            </h3>
            <p className="leading-relaxed text-slate-500">
              Featherlight construction designed for maximum agility and speed.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
              <Activity className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">
              Durability
            </h3>
            <p className="leading-relaxed text-slate-500">
              Reinforced stitching and premium materials built to last.
            </p>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">New Arrivals</h2>
            <Link
              href="/3/shop"
              className="flex items-center font-bold text-blue-600 hover:text-blue-700"
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <Link
                key={product.id}
                href={`/3/product/${product.id}`}
                className="group"
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                  <Image
                    src={product.colors[0]?.images[0] || ""}
                    alt={product.name}
                    fill
                    className="object-cover p-2 transition-all duration-300 group-hover:p-0"
                  />
                </div>
                <h3 className="truncate font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {product.name}
                </h3>
                <p className="mt-1 mb-2 text-sm text-slate-500">
                  {product.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">
                    ${product.price}
                  </span>
                  <span className="text-sm font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                    Add +
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
