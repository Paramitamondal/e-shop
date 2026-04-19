"use client";

import Link from "next/link";
import { useState } from "react";

export default function SellersPage() {
  const [search, setSearch] = useState("");

  const sellers = [
    {
      name: "Super Market",
      shop: "Metro Merchants Mart",
      image: "/seller1.png",
      rating: 4,
    },
    {
      name: "Skyline Seller hub",
      shop: "Skyline Seller hub",
      image: "/seller2.png",
      rating: 5,
    },
    {
      name: "Gujarat technological university",
      shop: "UrbanTrade Emporium",
      image: "/seller3.png",
      rating: 5,
    },
  ];

  const filtered = sellers.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.shop.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="bg-gray-200 px-6 py-4 text-sm text-gray-800 font-medium">
        Home &gt; seller
      </div>

      <div className="px-6 py-6">

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Sellers
        </h1>

        {/* FILTER ROW */}
        <div className="flex flex-wrap items-center gap-4 mb-6">

          <select className="border px-4 py-2 rounded w-64 bg-white text-gray-900 font-medium">
            <option>Relevance</option>
            <option>Top Rated</option>
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search Seller"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-80 bg-white text-gray-900"
          />

          <div className="flex items-center gap-2">
            <span className="text-gray-800 font-medium">
              Show:
            </span>

            <select className="border px-3 py-2 rounded bg-white text-gray-900 font-medium">
              <option>12</option>
              <option>16</option>
              <option>20</option>
            </select>
          </div>

        </div>

        {/* SELLERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((seller, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <img
                src={seller.image}
                className="w-52 h-52 object-cover mx-auto rounded-lg"
              />

              <div className="text-yellow-500 mt-3 text-lg">
                {"★".repeat(seller.rating)}
                {"☆".repeat(5 - seller.rating)}
              </div>

              <h3 className="font-semibold text-lg text-gray-900 mt-2">
                {seller.name}
              </h3>

              <p className="text-gray-700 text-sm">
                {seller.shop}
              </p>

              <Link href={`/sellers/${seller.name}`}>
                <button className="mt-4 border-2 border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-50 font-medium">
                  View Products
                </button>
              </Link>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}