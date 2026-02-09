"use client";

import Link from "next/link";
import { ShoppingBag, Search, User, Heart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";

export default function Theme1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { count } = useCart();
  const { wishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-serif text-[#1A1A1A] selection:bg-[#D4C4A8] selection:text-white">
      <nav className="sticky top-0 z-50 border-b border-[#E5E5E5] bg-[#FDFBF7]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-6">
            <Search className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-black" />
          </div>

          <Link href="/1" className="text-2xl font-medium tracking-widest">
            AESTHETIQUE
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/1/wishlist" className="group relative">
              <Heart className="h-5 w-5 text-gray-400 transition-colors group-hover:text-black" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#C19A6B]" />
              )}
            </Link>
            <Link href="/1/cart" className="group relative">
              <ShoppingBag className="h-5 w-5 text-gray-400 transition-colors group-hover:text-black" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#1A1A1A] text-[10px] text-white">
                  {count}
                </span>
              )}
            </Link>
            <User className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-black" />
          </div>
        </div>
        <div className="flex justify-center border-t border-[#F5F5F5] py-3">
          <div className="flex gap-8 text-xs tracking-widest text-gray-500">
            <Link
              href="/1/shop?category=Men"
              className="transition-colors hover:text-black"
            >
              MEN
            </Link>
            <Link
              href="/1/shop?category=Women"
              className="transition-colors hover:text-black"
            >
              WOMEN
            </Link>
            <Link
              href="/1/shop?category=Kids"
              className="transition-colors hover:text-black"
            >
              KIDS
            </Link>
            <Link
              href="/1/shop?category=Accessories"
              className="transition-colors hover:text-black"
            >
              ACCESSORIES
            </Link>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="mt-20 border-t border-[#E5E5E5] px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <h3 className="mb-6 text-lg">AESTHETIQUE</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Defining modern luxury through sustainable practices and timeless
              design.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-widest text-gray-400">
              SHOP
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/1/shop">New Arrivals</Link>
              </li>
              <li>
                <Link href="/1/shop">Bestsellers</Link>
              </li>
              <li>
                <Link href="/1/shop">Coming Soon</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-widest text-gray-400">
              CARE
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Contact Us</li>
              <li>Shipping & Returns</li>
              <li>Size Guide</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-widest text-gray-400">
              NEWSLETTER
            </h4>
            <div className="flex border-b border-black py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <button className="text-xs font-bold tracking-widest">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl justify-between text-xs text-gray-400">
          <p>© 2026 Aesthetique. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
