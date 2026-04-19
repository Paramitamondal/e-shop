"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const slides = [
    {
      image: "/banner1.png",
      title: "Mega Sale",
      subtitle: "Up To 50% Off",
    },
    {
      image: "/banner2.png",
      title: "New Arrivals",
      subtitle: "Latest Collection",
    },
    {
      image: "/banner3.png",
      title: "Trending Products",
      subtitle: "Best Deals Today",
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
    <div className="px-6 py-4">
      <div className="relative w-full h-[360px] md:h-[420px] rounded-2xl overflow-hidden">

        {/* IMAGE */}
        <img
          src={slides[current].image}
          className="w-full h-full object-cover"
        />

        {/* TEXT */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white drop-shadow-lg">
          <p className="text-sm font-semibold tracking-wide">
            LIMITED TIME OFFER
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
            {slides[current].title}
            <br />
            {slides[current].subtitle}
          </h1>

          <button className="mt-5 bg-white text-black px-6 py-2 rounded-lg font-semibold">
            Shop Now
          </button>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === current ? "bg-white" : "bg-white/60"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}