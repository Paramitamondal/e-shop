"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../store/cart";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard(product: Product) {
  const addToCart = useCart((state) => state.addToCart);

  return (
    <div className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition">

      {/* IMAGE FULL WIDTH */}
      <div className="w-full h-44 bg-gray-50">
        <img
          src={product.image}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-3">

        {/* TITLE */}
        <h3 className="text-sm font-medium mt-2 text-gray-900">
          {product.name}
        </h3>

        {/* PRICE (BLACK) */}
        <p className="text-gray-900 font-bold text-sm mb-3">
          ₹{product.price}
        </p>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={() => addToCart(product)}
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