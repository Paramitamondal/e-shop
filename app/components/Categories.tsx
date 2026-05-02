"use client";
import Link from "next/link";

export default function Categories() {
  const categories = [
    { name: "Furniture", image: "/furniture.png" },
    { name: "Fashion", image: "/fashion.png" },
    { name: "Beauty", image: "/beauty.png" },
    { name: "Watch", image: "/watch.png" },
    { name: "Electronics", image: "/electronics.png" },
    { name: "Digital Product", image: "/digital.png" },
    { name: "Home Application", image: "/home-appliances.png" },
    { name: "Vegetable", image: "/vegetables.png" },
    { name: "Decor", image: "/decor.png" },
    { name: "Laptop", image: "/laptops.png" },
    { name: "Mobile", image: "/mobiles.png" },
    { name: "Grocery", image: "/grocery.png" },
    { name: "Sports", image: "/sports.png" },
    { name: "Toys", image: "/toys.png" },
    { name: "Books", image: "/books.png" },
  ];

  const visible = categories.slice(0, 7);

  return (
    <div className="px-4 md:px-8 py-6 bg-white">
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-5">

        {/* ✅ SEE ALL (SAME HEIGHT, BIGGER LOOK) */}
        <Link href="/categories">
          <div className="cursor-pointer text-center group">

            {/* SAME HEIGHT AS CATEGORY */}
            <div className="h-28 md:h-32 flex items-center justify-center">
              
              {/* BIGGER ICON */}
              <div className="grid grid-cols-2 gap-1 scale-125 group-hover:scale-150 transition-transform">
                <div className="w-5 h-5 bg-blue-500 rounded"></div>
                <div className="w-5 h-5 bg-blue-400 rounded"></div>
                <div className="w-5 h-5 bg-blue-300 rounded"></div>
                <div className="w-5 h-5 bg-blue-600 rounded"></div>
              </div>

            </div>

            <p className="mt-2 text-sm font-semibold text-gray-900">
              See All
            </p>
          </div>
        </Link>

        {/* CATEGORIES LIST */}
        {visible.map((cat) => (
          <Link
            key={cat.name}
            href={`/products/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="cursor-pointer text-center group"
          >
            <div className="h-28 md:h-32 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-900">
              {cat.name}
            </p>
          </Link>
        ))}

      </div>
    </div>
  );
}