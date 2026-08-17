"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { ShoppingCart, Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { useCart } from "../../store/cart";
import { products } from "@/data/products";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const addToCart = useCart((state) => state.addToCart);

  const product = products.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState("");
  const [color, setColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-600 font-medium">
        Product not found
      </div>
    );
  }

  const images = [product.image, product.image, product.image];

  // fake original price for discount look
  const originalPrice = Math.round(Number(product.price) * 1.3);
  const discountPercent = Math.round(
    ((originalPrice - Number(product.price)) / originalPrice) * 100
  );

  // category অনুযায়ী option ঠিক করছি
  const variantOptions: Record<string, string[]> = {
    mobile: ["64GB", "128GB", "256GB"],
    kids: ["S", "M", "L", "XL"],
  };

  const variantLabel: Record<string, string> = {
    mobile: "Storage",
    kids: "Size",
  };

  const options = variantOptions[product.category] || [];
  const label = variantLabel[product.category] || "Option";

  return (
    <div className="bg-gray-50 min-h-screen py-8">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-10 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - IMAGES */}
        <div className="flex gap-4">

          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onMouseEnter={() => setActiveImage(i)}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-16 object-cover border-2 rounded-lg cursor-pointer transition ${
                  activeImage === i
                    ? "border-red-500"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="flex-1 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center p-6 relative">
            {discountPercent > 0 && (
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discountPercent}%
              </span>
            )}
            <img
              src={images[activeImage]}
              className="max-h-[400px] object-contain"
            />
          </div>

        </div>

        {/* RIGHT SIDE - INFO */}
        <div>

          <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-1">
            {product.category || "Featured Product"}
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            {product.name}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm text-gray-500">(128 reviews)</span>
            <span className="text-xs text-green-600 font-medium border-l pl-2">
              In Stock
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-3 mt-4">
            <p className="text-3xl font-bold text-gray-900">
              ₹{product.price}
            </p>
            {discountPercent > 0 && (
              <p className="text-lg text-gray-400 line-through">
                ₹{originalPrice}
              </p>
            )}
          </div>

          {/* VARIANT (Storage / Size — category অনুযায়ী) */}
          {options.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-gray-900 text-sm">{label}</h3>
              <div className="flex gap-2 flex-wrap">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setVariant(opt)}
                    className={`px-4 h-10 border rounded-lg font-medium text-sm transition ${
                      variant === opt
                        ? "bg-gray-900 text-white border-gray-900"
                        : "border-gray-300 text-gray-700 hover:border-gray-500"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* COLOR */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-gray-900 text-sm">Color</h3>
            <div className="flex gap-2">
              {["Black", "Red", "Blue"].map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition ${
                    color === c
                      ? "bg-gray-900 text-white border-gray-900"
                      : "border-gray-300 text-gray-700 hover:border-gray-500"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2 text-gray-900 text-sm">Quantity</h3>
            <div className="flex items-center border border-gray-300 rounded-lg w-fit">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-9 h-9 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-l-lg"
              >
                −
              </button>
              <span className="w-10 text-center font-medium text-gray-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-9 h-9 text-lg font-semibold text-gray-700 hover:bg-gray-100 rounded-r-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-6 text-sm leading-relaxed">
            Premium quality product crafted with the finest materials,
            designed for comfort, durability, and everyday style.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-white border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-gray-50 transition"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>

            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition"
            >
              Buy Now
            </button>
          </div>

          {/* DELIVERY INFO */}
          <div className="mt-8 border-t pt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Truck size={18} className="text-gray-500" />
              Free delivery on orders over ₹999
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <RotateCcw size={18} className="text-gray-500" />
              7-day easy return policy
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <ShieldCheck size={18} className="text-gray-500" />
              100% authentic product guarantee
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}