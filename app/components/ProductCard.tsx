"use client";

import { ShoppingCart } from "lucide-react";
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

  // CATEGORY PAGE DESIGN
  if (variant === "category") {
    return (
      <div className="bg-white border rounded-xl overflow-hidden group hover:shadow-lg transition">

        {/* IMAGE */}
        <div className="relative w-full h-64 bg-gray-50">

          <img
            src={image}
            className="w-full h-full object-cover"
          />

          {/* SALE BADGE */}
          <span className="absolute top-3 left-3 bg-pink-400 text-white text-xs px-2 py-1 rounded-full">
            SALE
          </span>

          {/* HOVER ADD TO CART */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 
          text-white py-3 opacity-0 group-hover:opacity-100 transition">

            <button
              onClick={() => addToCart({ id, name, price, image })}
              className="w-full flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>

          </div>

        </div>

        {/* CONTENT */}
        <div className="p-3">

          <h3 className="text-sm font-medium text-gray-900">
            {name}
          </h3>

          <p className="text-gray-900 font-bold text-sm">
            ₹{price}
          </p>

        </div>
      </div>
    );
  }

  // DEFAULT DESIGN (UNCHANGED)
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