"use client";

import Link from "next/link";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";

export default function Theme3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { count } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/3" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <span className="text-xl font-bold text-white italic">A</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  ATHLETIK
                </span>
              </Link>
              <div className="hidden space-x-8 md:flex">
                <Link
                  href="/3/shop?category=Men"
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                >
                  Men
                </Link>
                <Link
                  href="/3/shop?category=Women"
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                >
                  Women
                </Link>
                <Link
                  href="/3/shop?category=Kids"
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                >
                  Kids
                </Link>
                <Link
                  href="/3/shop"
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                >
                  Sale
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search gear..."
                  className="w-64 rounded-full bg-slate-100 py-2 pr-4 pl-10 text-sm transition-all focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <Link
                href="/3/cart"
                className="relative rounded-full p-2 transition-colors hover:bg-slate-100"
              >
                <ShoppingCart className="h-5 w-5 text-slate-700" />
                {count > 0 && (
                  <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                    {count}
                  </span>
                )}
              </Link>
              <button className="rounded-full p-2 hover:bg-slate-100 sm:hidden">
                <Menu className="h-5 w-5 text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-slate-900 py-12 text-slate-300">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          <div>
            <h5 className="mb-4 font-bold text-white">Shop</h5>
            <ul className="space-y-2 text-sm">
              <li>Running</li>
              <li>Training</li>
              <li>Outdoor</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-bold text-white">Support</h5>
            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Warranty</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-bold text-white">Company</h5>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 font-bold text-white">Stay Connected</h5>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded bg-slate-800 px-3 py-2 text-sm"
              />
              <button className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
                Go
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
