"use client";

import Link from "next/link";
import { Heart, Eye, GitCompare, ShoppingCart, Star } from "lucide-react";
import { useCart } from "../store/cart";

type Props = {
  title: string;
};

const products = [
  { id: 1, name: "iPhone 15 Pro", price: 129999, image: "/iphone15.png", rating: 5 },
  { id: 2, name: "Samsung S24 Ultra", price: 119999, image: "/samsungs24.png", rating: 4 },
  { id: 3, name: "OnePlus 12", price: 64999, image: "/oneplus12.png", rating: 4 },
  { id: 4, name: "Xiaomi 14", price: 54999, image: "/xaomi.png", rating: 4 },
];

export default function SmartProductsSection({ title }: Props) {
  const addToCart = useCart((state) => state.addToCart);

  return (
    <section className="bg-white p-5 rounded-xl">

      {/* header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          {title}
        </h2>

        <Link
          href="/products"
          className="text-red-500 font-medium hover:underline"
        >
          See All →
        </Link>
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-white border rounded-xl hover:shadow-lg transition relative overflow-hidden"
          >

            {/* IMAGE AREA FULL WIDTH */}
            <div className="relative h-44 bg-gray-50">

              <img
                src={p.image}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />

              {/* RIGHT ICONS */}
              <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white p-1.5 rounded-full shadow">
                  <Heart size={14} />
                </button>

                <button className="bg-white p-1.5 rounded-full shadow">
                  <GitCompare size={14} />
                </button>

                <button className="bg-white p-1.5 rounded-full shadow">
                  <Eye size={14} />
                </button>
              </div>

              {/* ADD TO CART HOVER */}
              <div
                onClick={() => addToCart(p)}
                className="absolute bottom-0 left-0 w-full bg-gray-500 text-white text-sm py-2 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition cursor-pointer"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </div>

            </div>

            {/* TEXT AREA */}
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900">
                {p.name}
              </h3>

              {/* STARS */}
              <div className="flex gap-1 mt-1">
                {Array.from({ length: p.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* PRICE BLACK */}
              <p className="text-black font-bold text-sm mt-1">
                ₹{p.price}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}