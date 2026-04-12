"use client";

import { useState } from "react";

export default function Hero() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-white px-6 py-10 mt-4">

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1">

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Best Products <br />
            For Your Lifestyle
          </h1>

          <p className="text-gray-600 mt-3">
            Discover amazing deals on fashion, electronics & more
          </p>

          {/* SEARCH BAR */}
          <div className="mt-6 flex items-center bg-white border rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 outline-none"
            />

            <button className="bg-black text-white px-6 py-3 hover:bg-gray-800">
              Search
            </button>
          </div>

          {/* BUTTON */}
          <button className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Shop Now
          </button>

        </div>

        {/* RIGHT SIDE IMAGE */}
   <div className="flex-1 flex justify-center">
  <img
    src="/hero-product.png"
    alt="Product Banner"
    className="w-full max-w-sm md:max-w-md object-contain"
  />
</div>

      </div>
    </div>
  );
}