"use client";

import Image from "next/image";
import Link from "next/link";
import { brands } from "@/data/brands";

export default function BrandsSection() {

  const topBrands = brands.slice(0, 8);

  return (
    <section className="mt-8 px-4">

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

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-4">

        {topBrands.map((b, i) => (
          <div
            key={i}
            className="group bg-white border border-gray-100 rounded-xl p-3 flex flex-col items-center justify-center
            hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >

            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src={b.logo}
                alt={b.name}
                width={70}
                height={70}
                className="object-contain w-full h-full"
              />
            </div>

            <p className="mt-2 text-sm font-medium text-gray-700">
              {b.name}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}