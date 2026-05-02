"use client";

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

  if (variant === "category") {
    return (
      <div className="group cursor-pointer">

        {/* IMAGE */}
        <div className="relative w-full h-64 overflow-hidden rounded-xl">

          <img
            src={image}
            className="w-full h-full object-cover"
          />

          {/* RIGHT SIDE ICONS (DARK + BOLD + SLIDE) */}
          <div className="absolute top-3 right-0 flex flex-col gap-3
            translate-x-10 opacity-0 
            group-hover:translate-x-0 group-hover:opacity-100
            transition-all duration-300 ease-in-out">

            <div className="bg-black text-white p-2 rounded-full shadow cursor-pointer hover:scale-110 transition">
              <Heart size={18} />
            </div>

            <div className="bg-black text-white p-2 rounded-full shadow cursor-pointer hover:scale-110 transition">
              <Eye size={18} />
            </div>

            <div className="bg-black text-white p-2 rounded-full shadow cursor-pointer hover:scale-110 transition">
              <GitCompare size={18} />
            </div>

          </div>

          {/* ADD TO CART (BIGGER + SMOOTH UP) */}
          <div className="absolute bottom-0 left-0 w-full 
            bg-black/80 text-white text-center py-3
            translate-y-full opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-300 ease-in-out">

            <button
              onClick={() => addToCart({ id, name, price, image })}
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

      </div>
    );
  }

  // DEFAULT (UNCHANGED)
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