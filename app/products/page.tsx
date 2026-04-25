"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";

const allProducts = [
  { id: 1, name: "iPhone 15 Pro", price: 129999, image: "/iphone15.png", category:"mobile" },
  { id: 2, name: "Samsung S24", price: 119999, image: "/samsungs24.png", category:"mobile" },
  { id: 3, name: "OnePlus 12", price: 64999, image: "/oneplus12.png", category:"mobile" },
  { id: 4, name: "Xiaomi 14", price: 54999, image: "/xaomi.png", category:"mobile" },

  { id: 5, name: "Kids Dress", price: 699, image: "/kids1.png", category:"kids" },
  { id: 6, name: "Girls Coat", price: 899, image: "/kids2.png", category:"kids" },
  { id: 7, name: "Winter Jacket", price: 1299, image: "/kids3.png", category:"kids" },
  { id: 8, name: "Party Wear", price: 999, image: "/kids4.png", category:"kids" },
];

export default function ProductsPage() {

  const [category,setCategory] = useState("all")

  const filtered =
    category === "all"
      ? allProducts
      : allProducts.filter(p=>p.category===category)

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
                checked={category==="all"}
                onChange={()=>setCategory("all")}
              />
              All Products
            </label>

            <label className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                checked={category==="mobile"}
                onChange={()=>setCategory("mobile")}
              />
              Mobile
            </label>

            <label className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                checked={category==="kids"}
                onChange={()=>setCategory("kids")}
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

            {filtered.map(p=>(
              <ProductCard key={p.id} {...p}/>
            ))}

          </div>

        </main>

      </div>

    </div>
  );
}