"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../store/cart";
import { products } from "@/data/products";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const addToCart = useCart((state) => state.addToCart);

  const product = products.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Black");

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  // fake extra images (same image for now)
  const images = [product.image, product.image, product.image];

  return (
    <div className="bg-white min-h-screen p-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex gap-4">

          {/* SMALL IMAGES */}
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-16 object-cover border rounded cursor-pointer ${
                  activeImage === i ? "border-black" : "border-gray-200"
                }`}
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="flex-1 bg-white border rounded-xl flex items-center justify-center p-6">
            <img
              src={images[activeImage]}
              className="max-h-[400px] object-contain"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <h1 className="text-2xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="text-xl font-bold mt-3 text-black">
            ₹{product.price}
          </p>

          {/* SIZE */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex gap-2">
              {["S", "M", "L"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 border rounded ${
                    size === s ? "bg-black text-white" : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* COLOR */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex gap-2">
              {["Black", "Red", "Blue"].map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-3 py-1 border rounded ${
                    color === c ? "bg-black text-white" : ""
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-6">
            Premium quality product with best design and durability.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}