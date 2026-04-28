"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const slides = [
    {
      image: "/banner1.png",
      title: "Mega Sale",
      subtitle: "Up To 50% Off",
      category: "fashion",
    },
    {
      image: "/banner2.png",
      title: "New Arrivals",
      subtitle: "Latest Collection",
      category: "mobile",
    },
    {
      image: "/banner3.png",
      title: "Trending Products",
      subtitle: "Best Deals Today",
      category: "electronics",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-3 sm:px-4 md:px-6 py-3 md:py-4">
      <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden">

        {/* IMAGE */}
        <img
          src={slides[current].image}
          alt="banner"
          className="w-full h-full object-cover"
        />

        {/* TEXT */}
        <div className="absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 text-white drop-shadow-lg max-w-[90%] sm:max-w-[70%] md:max-w-[60%]">
          <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide">
            LIMITED TIME OFFER
          </p>

          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mt-1 md:mt-2 leading-tight">
            {slides[current].title}
            <br />
            {slides[current].subtitle}
          </h1>

          {/* SHOP NOW */}
          <Link
            href={`/products/${slides[current].category}`}
            className="inline-block mt-3 md:mt-5 bg-white text-black px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg font-semibold text-sm md:text-base"
          >
            Shop Now
          </Link>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer ${
                i === current ? "bg-white" : "bg-white/60"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}