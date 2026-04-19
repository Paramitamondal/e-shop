"use client";
import { useState } from "react";

export default function Categories() {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { name: "Furniture", image: "/furniture.png" },
    { name: "Fashion", image: "/fashion.png" },
    { name: "Beauty", image: "/beauty.png" },
    { name: "Watch", image: "/watch.png" },
    { name: "Electronics", image: "/electronics.png" },
    { name: "Digital product", image: "/digital.png" },
    { name: "Home appliances", image: "/home-appliances.png" },
    { name: "Vegetable", image: "/vegetables.png" },
    { name: "Decor", image: "/decor.png" },
    { name: "Laptop", image: "/laptops.png" },
    { name: "Mobile", image: "/mobiles.png" },
    { name: "Grocery", image: "/grocery.png" },
    { name: "Sports", image: "/sports.png" },
    { name: "Toys", image: "/toys.png" },
    { name: "Books", image: "/books.png" },
  ];

  const visible = showAll ? categories : categories.slice(0, 7);

  return (
    <div className="px-4 md:px-8 py-6 bg-white">
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-5">

        {/* SEE ALL - no card */}
        <div
          onClick={() => setShowAll(!showAll)}
          className="cursor-pointer text-center flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-2 gap-1">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <div className="w-4 h-4 bg-blue-400 rounded"></div>
            <div className="w-4 h-4 bg-blue-300 rounded"></div>
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
          </div>

          <p className="mt-2 text-sm font-semibold text-gray-900">
            {showAll ? "Show Less" : "See All"}
          </p>
        </div>

        {/* CATEGORIES */}
        {visible.map((cat) => (
          <div
            key={cat.name}
            className="cursor-pointer text-center"
          >
            <div className="h-28 md:h-32 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={cat.image}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="mt-2 text-sm font-semibold text-gray-900">
              {cat.name}
            </p>
          </div>
        ))}

      </div>
    </div>
  );

}