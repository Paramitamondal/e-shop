"use client";

import { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../../data/products";

export default function ProductsPage() {

  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return category === "all"
      ? products
      : products.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="bg-white min-h-screen">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">

        {/* SIDEBAR */}
        <aside className="w-full md:w-[260px] border-r bg-white p-6">

          <h2 className="font-bold text-lg mb-6 text-gray-900">
            Filters
          </h2>

          <div className="space-y-4 text-gray-900 font-semibold">

            <label className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={category === "all"}
                onChange={() => setCategory("all")}
              />
              All Products
            </label>

            <label className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={category === "mobile"}
                onChange={() => setCategory("mobile")}
              />
              Mobile
            </label>

            <label className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={category === "kids"}
                onChange={() => setCategory("kids")}
              />
              Kids
            </label>

          </div>

        </aside>

        {/* RIGHT CONTENT */}
        <main className="flex-1 p-6 md:p-8 bg-white">

          <div className="flex justify-between items-center mb-6">

            <h1 className="text-2xl font-bold text-gray-900">
              Products
            </h1>

            <p className="text-sm font-semibold text-gray-600">
              {filtered.length} items
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {filtered.length === 0 ? (
              <p className="text-gray-500">No products found</p>
            ) : (
              filtered.map((p) => (
                <ProductCard key={p.id} {...p} variant="category" />
              ))
            )}

          </div>

        </main>

      </div>

    </div>
  );
}