"use client";

import { useCart } from "@/hooks/use-cart";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Theme3Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-slate-50 text-slate-900">
        <h2 className="mb-4 text-2xl font-bold">Your cart is empty</h2>
        <Link
          href="/3/shop"
          className="font-medium text-blue-600 hover:text-blue-700"
        >
          Start Shopping &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            {cart.map((item) => (
              <div
                key={`${item.productId}-${item.colorName}-${item.size}`}
                className="flex items-center gap-6 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-50">
                  <Image
                    src={item.image || ""}
                    alt={item.name}
                    fill
                    className="object-cover mix-blend-multiply"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {item.colorName} • {item.size}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-bold text-slate-900">
                      ${item.price}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center rounded-lg bg-slate-100 p-1">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.colorName,
                          item.size,
                          -1,
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded font-bold text-slate-500 shadow-sm transition-all hover:bg-white hover:text-slate-900"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.colorName,
                          item.size,
                          1,
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded font-bold text-slate-500 shadow-sm transition-all hover:bg-white hover:text-slate-900"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      removeFromCart(item.productId, item.colorName, item.size)
                    }
                    className="p-2 text-slate-400 transition-colors hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-slate-900">
                Order Summary
              </h2>
              <div className="mb-6 space-y-4">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">${total}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Shipping estimate</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Tax estimate</span>
                  <span className="font-medium text-slate-900">$0</span>
                </div>
              </div>
              <div className="mb-6 border-t border-slate-100 pt-4">
                <div className="flex justify-between text-lg font-bold text-slate-900">
                  <span>Order Total</span>
                  <span>${total}</span>
                </div>
              </div>
              <Button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-6 text-lg font-bold text-white shadow-lg shadow-blue-100 hover:bg-blue-700">
                Checkout <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
