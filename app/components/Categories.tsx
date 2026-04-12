"use client";
import { useState } from "react";

export default function Categories() {
  const [active, setActive] = useState("Fashion");

  const categories = [
    "Fashion",
    "Furniture",
    "Electronics",
    "Mobile",
    "Beauty",
    "Grocery",
    "Sports",
  ];

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex gap-4 overflow-x-auto">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded cursor-pointer border transition
              ${
                active === cat
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
          >
            {cat}
          </div>
        ))}
      </div>

      <button className="text-blue-500 whitespace-nowrap">
        See All
      </button>
    </div>
  );
}