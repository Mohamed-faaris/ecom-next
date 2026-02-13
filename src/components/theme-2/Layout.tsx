"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";

export default function Theme2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] font-mono text-white selection:bg-[#CCFF00] selection:text-black">
      <div className="fixed top-0 left-0 z-50 w-full border-b-2 border-[#CCFF00] bg-[#050505]">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="h-6 w-6 text-[#CCFF00]" />
            ) : (
              <Menu className="h-6 w-6 text-[#CCFF00]" />
            )}
          </button>

          <Link
            href="/2"
            className="-skew-x-12 transform text-3xl font-black tracking-tighter text-[#CCFF00] uppercase italic"
          >
            HYPE.BEAST
          </Link>

          <Link href="/2/cart" className="relative flex items-center gap-2">
            <span className="text-xs font-bold text-[#CCFF00]">
              CART ({count})
            </span>
            <ShoppingCart className="h-5 w-5 text-[#CCFF00]" />
          </Link>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden bg-[#CCFF00] py-1 whitespace-nowrap">
          <div className="animate-marquee inline-block text-xs font-bold text-black">
            FREE SHIPPING WORLDWIDE — DROP 002 LIVE NOW — LIMITED STOCK — NO
            RESTOCKS — FREE SHIPPING WORLDWIDE — DROP 002 LIVE NOW — LIMITED
            STOCK — NO RESTOCKS —
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[100px] z-40 flex flex-col gap-8 bg-[#050505] p-8 text-4xl font-black tracking-tighter uppercase">
          <Link
            href="/2/shop?category=Men"
            onClick={() => setMenuOpen(false)}
            className="transition-transform hover:translate-x-4 hover:text-[#CCFF00]"
          >
            Men
          </Link>
          <Link
            href="/2/shop?category=Women"
            onClick={() => setMenuOpen(false)}
            className="transition-transform hover:translate-x-4 hover:text-[#CCFF00]"
          >
            Women
          </Link>
          <Link
            href="/2/shop?category=Accessories"
            onClick={() => setMenuOpen(false)}
            className="transition-transform hover:translate-x-4 hover:text-[#CCFF00]"
          >
            Gear
          </Link>
          <Link
            href="/2/shop"
            onClick={() => setMenuOpen(false)}
            className="text-[#CCFF00] transition-transform hover:translate-x-4 hover:text-[#CCFF00]"
          >
            Shop All
          </Link>
        </div>
      )}

      <main className="mx-auto max-w-[1920px] px-4 pt-[110px] pb-20 md:px-8">
        {children}
      </main>

      <footer className="border-t-2 border-[#333] bg-[#111] p-8 md:p-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-5xl font-black text-[#333] uppercase">
              Dont sleep.
            </h2>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full border border-[#444] bg-[#222] p-4 font-bold outline-none focus:border-[#CCFF00]"
              />
              <button className="bg-[#CCFF00] px-8 py-4 font-black text-black uppercase transition-colors hover:bg-white">
                Join
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-4 text-right text-sm text-gray-500">
            <Link href="#" className="hover:text-[#CCFF00]">
              INSTAGRAM
            </Link>
            <Link href="#" className="hover:text-[#CCFF00]">
              TIKTOK
            </Link>
            <Link href="#" className="hover:text-[#CCFF00]">
              TWITTER
            </Link>
            <p className="mt-8 text-[#333]">© 2026 HYPE.BEAST INC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
