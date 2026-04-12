"use client";

import { useCart } from "../store/cart";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

type Props = {
  product?: Product;
};

export default function ProductCard({ product }: Props) {
  const addToCart = useCart((state) => state.addToCart);
  const router = useRouter();

  // ❗ SAFE CHECK (IMPORTANT)
  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || "",
    });
  };

  return (
    <div className="border rounded-lg p-3 shadow-sm hover:shadow-md transition bg-white">

      {/* IMAGE (SAFE) */}
      <img
        src={product.image || "/placeholder.png"}
        alt={product.name || "product"}
        className="w-full h-40 object-cover rounded"
      />

      {/* NAME */}
      <h2 className="mt-2 font-semibold text-lg">
        {product.name || "No Name"}
      </h2>

      {/* PRICE */}
      <p className="text-gray-600">
        ₹{product.price || 0}
      </p>

      {/* BUTTONS */}
      <div className="flex gap-2 mt-3">

        <button
          onClick={handleAddToCart}
          className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Add to Cart
        </button>

        <button
          onClick={() => router.push("/cart")}
          className="flex-1 border py-2 rounded hover:bg-gray-100"
        >
          Buy Now
        </button>

      </div>
    </div>
  );
}