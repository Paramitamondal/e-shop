"use client";

import Image from "next/image";
import Link from "next/link";
import { brands } from "@/data/brands";

export default function BrandsSection() {
  // হোম পেজে আমরা প্রথম ৮টি ব্র্যান্ড দেখাচ্ছি
  const topBrands = brands.slice(0, 8);

  return (
    <section className="mt-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Top Brands</h2>
        <Link
          href="/brands"
          className="text-red-500 text-sm font-medium hover:underline"
        >
          See All →
        </Link>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-4">
        {topBrands.map((b, i) => (
          <Link 
            key={i}
            href={`/brands?select=${encodeURIComponent(b.name)}`} 
            className="group cursor-pointer"
          >
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="w-full h-20 relative overflow-hidden bg-white">
                <Image
                  src={b.logo}
                  alt={b.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-gray-700 text-center py-2 group-hover:text-red-600 truncate px-1">
                {b.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}