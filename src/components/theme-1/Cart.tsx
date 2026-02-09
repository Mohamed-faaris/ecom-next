"use client";

import { useCart } from "@/hooks/use-cart";
import Link from "next/link";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function Theme1Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center space-y-4">
        <h2 className="font-serif text-2xl text-gray-400 italic">
          Your bag is empty.
        </h2>
        <Link
          href="/1/shop"
          className="border-b border-black pb-1 text-sm tracking-widest hover:text-gray-600"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-12 text-center font-serif text-4xl italic">
        Shopping Bag
      </h1>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          {cart.map((item) => (
            <div
              key={`${item.productId}-${item.colorName}-${item.size}`}
              className="flex gap-6 border-b border-gray-100 pb-8"
            >
              <div className="relative h-32 w-24 flex-shrink-0 bg-gray-100">
                <Image
                  src={item.image || ""}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className="font-serif text-lg">{item.name}</h3>
                    <p className="text-sm font-medium">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                  <p className="mt-1 text-xs tracking-widest text-gray-500 uppercase">
                    {item.colorName} / {item.size}
                  </p>
                </div>
                <div className="flex items-end justify-between">
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
                      className="text-gray-400 hover:text-black"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.colorName,
                          item.size,
                          1,
                        )
                      }
                      className="text-gray-400 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      removeFromCart(item.productId, item.colorName, item.size)
                    }
                    className="text-xs text-gray-400 underline hover:text-red-900"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-[#F9F9F9] p-8">
            <h3 className="mb-6 font-serif text-xl">Summary</h3>
            <div className="mb-8 space-y-4 border-b border-gray-200 pb-8 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            <div className="mb-8 flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button className="w-full bg-black py-4 text-xs font-bold tracking-widest text-white transition-colors hover:bg-gray-800">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
