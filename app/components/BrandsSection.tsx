"use client";

import Image from "next/image";
import Link from "next/link";

export default function BrandsSection() {
  const brands = [
    { name: "Nike", logo: "/nike.png" },
    { name: "Adidas", logo: "/adidas.png" },
    { name: "Puma", logo: "/puma.png" },
    { name: "Apple", logo: "/apple.png" },
    { name: "Samsung", logo: "/samsung-brands.png" },
    { name: "Sony", logo: "/sony.png" },
    { name: "Xiaomi", logo: "/xiaomi.png" },
    { name: "OnePlus", logo: "/oneplus.png" },
  ];

  return (
    <section className="mt-8 px-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Top Brands
        </h2>

        <Link
          href="/brands"
          className="text-red-500 text-sm font-medium hover:underline"
        >
          See All →
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-4">

        {brands.map((b, i) => (
          <div
            key={i}
            className="group bg-white border border-gray-100 rounded-xl p-3 flex flex-col items-center justify-center
            hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >

            {/* LOGO BOX */}
            <div className="w-16 h-16 md:w-18 md:h-18 flex items-center justify-center">
              <Image
                src={b.logo}
                alt={b.name}
                width={70}
                height={70}
                className="object-contain w-full h-full"
              />
            </div>

            {/* NAME */}
            <p className="mt-2 text-[12px] md:text-sm text-gray-600 group-hover:text-gray-900 transition">
              {b.name}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}