"use client";

import { useState, useEffect } from "react";
import type { CartItem } from "@/types";
import { toast } from "sonner";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) =>
          i.productId === item.productId &&
          i.colorName === item.colorName &&
          i.size === item.size,
      );
      if (existing) {
        toast.success("Cart updated");
        return prev.map((i) =>
          i.productId === item.productId &&
          i.colorName === item.colorName &&
          i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i,
        );
      }
      toast.success("Added to cart");
      return [...prev, item];
    });
  };

  const removeFromCart = (itemId: string, colorName: string, size: string) => {
    setCart((prev) =>
      prev.filter(
        (i) =>
          !(
            i.productId === itemId &&
            i.colorName === colorName &&
            i.size === size
          ),
      ),
    );
    toast.info("Removed from cart");
  };

  const updateQuantity = (
    itemId: string,
    colorName: string,
    size: string,
    delta: number,
  ) => {
    setCart((prev) =>
      prev.map((i) => {
        if (
          i.productId === itemId &&
          i.colorName === colorName &&
          i.size === size
        ) {
          const newQty = Math.max(1, i.quantity + delta);
          return { ...i, quantity: newQty };
        }
        return i;
      }),
    );
  };

  const clearCart = () => setCart([]);

  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    count,
    total,
    isClient,
  };
}
