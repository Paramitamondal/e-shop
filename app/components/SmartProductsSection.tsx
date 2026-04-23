"use client";

import { Heart, Eye, GitCompare, ShoppingCart } from "lucide-react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
};

export default function SmartProductsSection({ title }: { title: string }) {
  const products: Product[] = [
    { id: 1, name: "iPhone 15 Pro", price: 129999, image: "/iphone15.png", rating: 4.8 },
    { id: 2, name: "Samsung S24 Ultra", price: 119999, image: "/samsungs24.png", rating: 4.7 },
    { id: 3, name: "OnePlus 12", price: 64999, image: "/oneplus12.png", rating: 4.6 },
    { id: 4, name: "Xiaomi 14", price: 54999, image: "/xaomi.png", rating: 4.5 },
  ];

  return (
    <section className="mt-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5 px-1">
        <h2 className="text-lg md:text-xl font-bold text-gray-900">
          {title}
        </h2>

        <Link href="/products" className="text-red-500 text-sm hover:underline">
          See All →
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-white border rounded-xl overflow-hidden hover:shadow-xl transition relative h-[320px]"
          >

            {/* IMAGE */}
            <div className="h-[55%] flex items-center justify-center bg-gray-50">
              <img
                src={p.image}
                className="h-28 object-contain group-hover:scale-105 transition"
              />
            </div>

            {/* CONTENT */}
            <div className="p-3 h-[45%] flex flex-col justify-between">

              {/* NAME + RATING ALWAYS VISIBLE */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                  {p.name}
                </h3>

                <p className="text-xs text-yellow-500 mt-1">
                  ⭐ {p.rating} <span className="text-gray-400">(4.5k)</span>
                </p>

                <p className="text-red-500 font-bold mt-1">
                  ₹{p.price}
                </p>
              </div>

              {/* ACTION ROW (ALWAYS VISIBLE - IMPORTANT FIX) */}
              <div className="flex items-center justify-between mt-2">

                <button className="p-1.5 border rounded-md hover:text-red-500">
                  <Heart size={16} />
                </button>

                <button className="p-1.5 border rounded-md hover:text-blue-500">
                  <GitCompare size={16} />
                </button>

                <button className="p-1.5 border rounded-md hover:text-green-500">
                  <Eye size={16} />
                </button>

              </div>

            </div>

            {/* HOVER ADD TO CART (BOTTOM OVERLAY) */}
            <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition bg-red-500 text-white text-sm font-medium py-2 flex items-center justify-center gap-2">

              <ShoppingCart size={16} />
              Add to Cart

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}