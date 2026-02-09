"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types";
import { useCart } from "@/hooks/use-cart";
import { Star } from "lucide-react";

export default function Theme2Product({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) return;

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

  if (!selectedColor) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="grid min-h-screen grid-cols-1 border-b-2 border-[#333] lg:grid-cols-12">
        {/* Gallery */}
        <div className="relative border-r-2 border-[#333] bg-[#111] lg:col-span-7">
          <div className="sticky top-[100px] flex h-[80vh] w-full items-center justify-center p-8">
            <Image
              src={selectedColor.images[0] || ""}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
          <div className="absolute top-4 left-4 bg-[#CCFF00] px-2 py-1 text-xs font-black tracking-widest text-black uppercase">
            Stock: High
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
          <h1 className="mb-4 text-5xl leading-[0.9] font-black text-white uppercase lg:text-7xl">
            {product.name}
          </h1>
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-3xl text-[#CCFF00]">
              ${product.price}
            </span>
            <div className="flex items-center gap-1 text-gray-400">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-mono text-sm">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          </div>

          <div className="my-8 space-y-8 border-t-2 border-b-2 border-[#333] py-8">
            <div>
              <h3 className="mb-4 text-xs font-black text-[#666] uppercase">
                Select Skin
              </h3>
              <div className="flex gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`h-12 w-12 border-2 ${selectedColor.name === color.name ? "border-[#CCFF00]" : "border-[#333]"}`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-black text-[#666] uppercase">
                Fit Check
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border-2 py-4 font-black uppercase transition-all ${
                      selectedSize === size
                        ? "border-[#CCFF00] bg-[#CCFF00] text-black"
                        : "border-[#333] bg-transparent text-white hover:border-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full skew-y-1 bg-white py-6 text-xl font-black tracking-widest text-black uppercase transition-colors hover:skew-y-0 hover:bg-[#CCFF00]"
          >
            Secure the Bag
          </button>

          <p className="mt-8 font-mono text-xs leading-relaxed text-gray-500 uppercase">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
