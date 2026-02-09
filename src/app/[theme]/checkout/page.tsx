"use client";

import { useCart } from "@/hooks/use-cart";
import { use, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CheckoutPage({
  params,
}: {
  params: Promise<{ theme: string }>;
}) {
  const { theme } = use(params);
  const { cart, total, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      clearCart();
      toast.success("Order placed successfully!");
      router.push(`/${theme}`);
    }, 2000);
  };

  const bgClass =
    theme === "2"
      ? "bg-black text-white"
      : theme === "3"
        ? "bg-slate-50 text-slate-900"
        : "bg-[#FDFBF7] text-[#1A1A1A]";
  const inputClass =
    theme === "2"
      ? "bg-[#111] border-[#333] text-white focus:border-[#CCFF00]"
      : theme === "3"
        ? "bg-white border-slate-200 text-slate-900 focus:ring-2 focus:ring-blue-500"
        : "bg-transparent border-b border-gray-300 focus:border-black rounded-none px-0";

  const btnClass =
    theme === "2"
      ? "bg-[#CCFF00] text-black font-black uppercase hover:bg-white"
      : theme === "3"
        ? "bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700"
        : "bg-black text-white text-xs tracking-widest hover:opacity-80";

  return (
    <div className={`min-h-screen px-6 py-20 ${bgClass}`}>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h1
            className={`mb-8 text-3xl ${theme === "2" ? "font-black uppercase" : theme === "1" ? "font-serif italic" : "font-bold"}`}
          >
            Checkout
          </h1>
          <form onSubmit={handleCheckout} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                placeholder="First Name"
                className={`w-full border p-4 transition-all outline-none ${inputClass}`}
              />
              <input
                required
                placeholder="Last Name"
                className={`w-full border p-4 transition-all outline-none ${inputClass}`}
              />
            </div>
            <input
              required
              type="email"
              placeholder="Email"
              className={`w-full border p-4 transition-all outline-none ${inputClass}`}
            />
            <input
              required
              placeholder="Address"
              className={`w-full border p-4 transition-all outline-none ${inputClass}`}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                placeholder="City"
                className={`w-full border p-4 transition-all outline-none ${inputClass}`}
              />
              <input
                required
                placeholder="Zip Code"
                className={`w-full border p-4 transition-all outline-none ${inputClass}`}
              />
            </div>

            <div className="pt-8">
              <h2 className="mb-4 text-sm font-bold uppercase opacity-50">
                Payment
              </h2>
              <div className="space-y-4">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="accent-current"
                  />
                  <span>Credit Card</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-current"
                  />
                  <span>PayPal</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-current"
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>

            <button
              disabled={loading}
              className={`mt-8 w-full py-4 transition-all ${btnClass}`}
            >
              {loading ? "Processing..." : `Place Order - $${total}`}
            </button>
          </form>
        </div>

        <div>
          <h2
            className={`mb-8 text-xl ${theme === "2" ? "font-black uppercase" : theme === "1" ? "font-serif italic" : "font-bold"}`}
          >
            Order Summary
          </h2>
          <div className="space-y-4 opacity-80">
            {cart.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between text-sm"
              >
                <span>
                  {item.quantity}x {item.name}{" "}
                  <span className="opacity-50">({item.size})</span>
                </span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div
            className={`mt-8 border-t pt-8 ${theme === "2" ? "border-[#333]" : "border-gray-200"} flex justify-between text-xl font-bold`}
          >
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
