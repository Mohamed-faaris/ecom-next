"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types";
import { useCart } from "@/hooks/use-cart";
import { Star, Shield, RefreshCw, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Theme3Product({ product }: { product: Product }) {
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
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="flex items-center justify-center bg-slate-50 p-8">
              <div className="relative aspect-square w-full max-w-lg">
                <Image
                  src={selectedColor.images[0] || ""}
                  alt={product.name}
                  fill
                  className="object-contain mix-blend-multiply"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="p-8 lg:p-12">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-md bg-blue-100 px-2 py-1 text-xs font-bold tracking-wide text-blue-700 uppercase">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="rounded-md bg-green-100 px-2 py-1 text-xs font-bold tracking-wide text-green-700 uppercase">
                    New Arrival
                  </span>
                )}
              </div>

              <h1 className="mb-2 text-3xl font-bold text-slate-900 lg:text-4xl">
                {product.name}
              </h1>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-current" : "text-slate-200"}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-500">
                  {product.reviewCount} Reviews
                </span>
              </div>

              <p className="mb-8 leading-relaxed text-slate-600">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="mb-3 text-sm font-bold text-slate-900">
                  Color: {selectedColor.name}
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`h-10 w-10 rounded-full border-2 p-0.5 ${selectedColor.name === color.name ? "border-blue-600" : "border-transparent"}`}
                    >
                      <div
                        className="h-full w-full rounded-full border border-slate-200"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-sm font-bold text-slate-900">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-lg border px-4 py-2 text-sm font-bold transition-colors ${
                        selectedSize === size
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-8">
                <span className="text-4xl font-bold text-slate-900">
                  ${product.price}
                </span>
                <Button
                  onClick={handleAddToCart}
                  className="rounded-xl bg-blue-600 px-8 py-6 text-lg text-white shadow-lg shadow-blue-200 hover:bg-blue-700"
                >
                  Add to Cart
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center rounded-xl bg-slate-50 p-4 text-center">
                  <Truck className="mb-2 h-6 w-6 text-slate-400" />
                  <span className="text-xs font-bold text-slate-700">
                    Free Shipping
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-slate-50 p-4 text-center">
                  <RefreshCw className="mb-2 h-6 w-6 text-slate-400" />
                  <span className="text-xs font-bold text-slate-700">
                    Free Returns
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-slate-50 p-4 text-center">
                  <Shield className="mb-2 h-6 w-6 text-slate-400" />
                  <span className="text-xs font-bold text-slate-700">
                    2 Year Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
