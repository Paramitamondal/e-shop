"use client";

import Link from "next/link";

// "export default" lekha khub guruttopurno
export default function AllCategoriesPage() {
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

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800 uppercase tracking-widest">
          All Categories
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              href={`/products/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full aspect-square rounded-4xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 border border-gray-100">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <p className="mt-4 text-sm font-bold text-gray-700 group-hover:text-pink-600 transition-colors">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}