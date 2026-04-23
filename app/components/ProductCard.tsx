"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../store/cart";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductCard({ id, name, price, image,category }: Props) {
  const [added, setAdded] = useState(false);

  const addToCart = useCart((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      category,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition">

      <img
        src={image}
        className="w-full h-44 object-cover rounded-lg"
      />

      <h3 className="mt-3 text-lg font-semibold text-gray-900">
        {name}
      </h3>

      <p className="text-gray-900 font-bold">
        ₹{price}
      </p>

      {/* ADD TO CART BUTTON */}
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full border border-pink-300 text-pink-600 py-2 rounded-full 
        hover:bg-pink-50 transition flex items-center justify-center gap-2 group"
      >
        <ShoppingCart 
          size={16} 
          className="opacity-0 group-hover:opacity-100 transition"
        />

        Add to Cart
      </button>

      {added && (
        <p className="text-yellow-600 text-sm mt-2 font-medium">
          ✓ Added to cart
        </p>
      )}
    </div>
  );
}