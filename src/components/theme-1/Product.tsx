"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types";
import { useCart } from "@/hooks/use-cart";
import { Check, Heart } from "lucide-react";
import { useWishlist } from "@/hooks/use-wishlist";

export default function Theme1Product({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!selectedColor || !selectedSize) return null;

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: selectedColor.images[0] || "",
      colorName: selectedColor.name,
      size: selectedSize,
      quantity: 1,
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Images */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
            <Image
              src={selectedColor.images[0] || ""}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Simulating gallery if more images existed */}
            {selectedColor.images.slice(1).map((img, i) => (
              <div key={i} className="relative aspect-[3/4] bg-gray-100">
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="h-fit lg:sticky lg:top-32">
          <div className="mb-8 border-b border-gray-200 pb-8">
            <h1 className="mb-2 font-serif text-4xl text-gray-900 italic">
              {product.name}
            </h1>
            <p className="mb-6 font-light tracking-wide text-gray-500">
              {product.tagline}
            </p>
            <p className="text-2xl font-medium text-gray-900">
              ${product.price}
            </p>
          </div>

          <div className="space-y-8">
            {/* Colors */}
            <div>
              <span className="mb-4 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                Color — {selectedColor.name}
              </span>
              <div className="flex gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 transition-all ${
                      selectedColor.name === color.name
                        ? "ring-2 ring-black ring-offset-2"
                        : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <span className="mb-4 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                Size — {selectedSize}
              </span>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[3rem] border px-4 py-3 text-sm transition-all ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-200 text-gray-600 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black py-4 text-xs font-bold tracking-widest text-white transition-opacity hover:opacity-80"
              >
                ADD TO BAG
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`flex items-center justify-center border px-6 transition-colors ${
                  isInWishlist(product.id)
                    ? "border-red-200 bg-red-50 text-red-500"
                    : "border-gray-200 hover:border-black"
                }`}
              >
                <Heart
                  className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-current" : ""}`}
                />
              </button>
            </div>

            {/* Info */}
            <div className="mt-12 space-y-6 border-t border-gray-200 pt-12 text-sm leading-relaxed text-gray-600">
              <p>{product.description}</p>
              <ul className="list-disc space-y-1 pl-4 marker:text-gray-400">
                {product.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
