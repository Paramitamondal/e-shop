"use client";

import { useRouter } from "next/navigation";

export default function PromoBanner() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/categories/fashion")}
      className="cursor-pointer w-full h-56 mt-8 rounded-xl relative overflow-hidden flex items-center justify-center text-white"
    >

      {/* IMAGE */}
      <img
        src="/promobanner.png"
        alt="Fashion Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* TEXT */}
      <div className="relative text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          BIG PROMO
        </h2>
        <p className="text-sm md:text-lg mt-2">
          Summer Sale – Up to 70% Off Fashion Collection
        </p>
      </div>

    </div>
  );
}