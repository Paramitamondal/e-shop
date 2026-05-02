"use client";

import Link from "next/link"; // ✅ ADD THIS
import { ShoppingCart, Heart, Eye, GitCompare } from "lucide-react";
import { useCart } from "../store/cart";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  variant?: "default" | "category";
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  variant = "default"
}: Product) {

  const addToCart = useCart((state) => state.addToCart);

  /* ================= CATEGORY (SMART SECTION) ================= */
  if (variant === "category") {
    return (

      // ✅ WRAP WITH LINK
      <Link href={`/product/${id}`} className="group cursor-pointer block">

        {/* IMAGE */}
        <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-white">

          <img
            src={image}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />

          {/* RIGHT ICONS */}
          <div className="absolute top-3 right-3 flex flex-col gap-3
            transform translate-x-12 opacity-0
            group-hover:translate-x-0 group-hover:opacity-100
            transition-all duration-500 ease-in-out">

            <div className="bg-black text-white p-2.5 rounded-full shadow-lg">
              <Heart size={18} strokeWidth={2.5} />
            </div>

            <div className="bg-black text-white p-2.5 rounded-full shadow-lg">
              <Eye size={18} strokeWidth={2.5} />
            </div>

            <div className="bg-black text-white p-2.5 rounded-full shadow-lg">
              <GitCompare size={18} strokeWidth={2.5} />
            </div>

          </div>

          {/* ADD TO CART */}
          <div className="absolute left-0 bottom-0 w-full
            transform translate-y-full
            group-hover:translate-y-0
            bg-black text-white text-center py-3
            transition-all duration-500 ease-in-out">

            <button
              onClick={(e) => {
                e.preventDefault(); // 🔥 VERY IMPORTANT
                addToCart({ id, name, price, image });
              }}
              className="flex items-center justify-center gap-2 w-full font-bold text-sm"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>

          </div>

        </div>

        {/* TEXT */}
        <div className="mt-3">

          <p className="text-sm font-bold text-gray-900">
            {name}
          </p>

          <div className="text-yellow-500 text-sm mt-1 font-bold">
            ★★★★☆
          </div>

          <p className="text-base font-extrabold text-gray-900 mt-1">
            ₹{price}
          </p>

        </div>

      </Link>
    );
  }

  /* ================= DEFAULT (UNCHANGED) ================= */
  return (
    <div className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition">

      <div className="w-full h-44 bg-gray-50">
        <img
          src={image}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">

        <h3 className="text-sm font-medium mt-2 text-gray-900">
          {name}
        </h3>

        <p className="text-gray-900 font-bold text-sm mb-3">
          ₹{price}
        </p>

        <button
          onClick={() => addToCart({ id, name, price, image })}
          className="w-full border border-red-500 text-red-500 py-2 
          rounded-full hover:bg-red-500 hover:text-white 
          transition text-sm font-semibold 
          flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>

      </div>
    </div>
  );
}