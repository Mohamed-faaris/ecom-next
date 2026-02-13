"use client";

import { useCart } from "@/hooks/use-cart";
import Link from "next/link";
import Image from "next/image";
import { Trash } from "lucide-react";

export default function Theme2Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-[#050505] text-white">
        <h2 className="mb-4 text-6xl font-black text-[#333] uppercase">
          Empty.
        </h2>
        <Link
          href="/2/shop"
          className="text-2xl font-black text-[#CCFF00] uppercase decoration-wavy hover:underline"
        >
          Fill It Up
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] px-4 py-12 text-white">
      <h1 className="mb-12 text-center text-6xl font-black text-[#222] uppercase select-none md:text-9xl">
        Checkout
      </h1>

      <div className="mx-auto max-w-6xl border-2 border-[#333]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="border-r-2 border-[#333] md:col-span-2">
            {cart.map((item) => (
              <div
                key={`${item.productId}-${item.colorName}-${item.size}`}
                className="group relative flex flex-col gap-6 border-b-2 border-[#333] p-6 transition-colors hover:bg-[#111] md:flex-row"
              >
                <div className="relative h-32 w-32 shrink-0 border-2 border-[#333]">
                  <Image
                    src={item.image || ""}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-black uppercase">
                    {item.name}
                  </h3>
                  <p className="mb-4 font-mono text-[#666]">
                    {item.colorName} // {item.size}
                  </p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.colorName,
                          item.size,
                          -1,
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center bg-[#222] font-bold hover:bg-[#CCFF00] hover:text-black"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.colorName,
                          item.size,
                          1,
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center bg-[#222] font-bold hover:bg-[#CCFF00] hover:text-black"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-2xl font-bold text-[#CCFF00]">
                    ${item.price * item.quantity}
                  </p>
                  <button
                    onClick={() =>
                      removeFromCart(item.productId, item.colorName, item.size)
                    }
                    className="mt-4 text-[#333] transition-colors hover:text-red-600"
                  >
                    <Trash className="h-6 w-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-24 h-fit bg-[#CCFF00] p-8 text-black">
            <h2 className="mb-8 border-b-2 border-black pb-4 text-4xl font-black uppercase">
              Total
            </h2>
            <div className="mb-4 flex justify-between font-mono text-xl font-bold">
              <span>SUBTOTAL</span>
              <span>${total}</span>
            </div>
            <div className="mb-8 flex justify-between font-mono text-xl font-bold opacity-50">
              <span>SHIPPING</span>
              <span>$0</span>
            </div>
            <div className="mb-12 flex justify-between text-4xl font-black">
              <span>PAY</span>
              <span>${total}</span>
            </div>
            <button className="w-full bg-black py-6 text-2xl font-black text-white uppercase transition-transform hover:scale-105 hover:shadow-xl">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
