"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]); // Array of Product IDs
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("wishlist");
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse wishlist", e);
      }
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, isClient]);

  const toggleWishlist = (productId: string) => {
    if (wishlist.includes(productId)) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      toast.info("Removed from wishlist");
    } else {
      setWishlist((prev) => [...prev, productId]);
      toast.success("Added to wishlist");
    }
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  return {
    wishlist,
    toggleWishlist,
    isInWishlist,
    isClient,
  };
}
