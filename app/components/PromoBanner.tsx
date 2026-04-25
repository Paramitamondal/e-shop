"use client";

import { useRouter } from "next/navigation";

type Props = {
  image: string;
  title: string;
  subtitle: string;
  link: string;
};

export default function PromoBanner({
  image,
  title,
  subtitle,
  link,
}: Props) {

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(link)}
      className="cursor-pointer w-full h-56 mt-8 rounded-xl relative overflow-hidden flex items-center justify-center text-white"
    >

      {/* IMAGE */}
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* TEXT */}
      <div className="relative text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          {title}
        </h2>

        <p className="text-sm md:text-lg mt-2">
          {subtitle}
        </p>
      </div>

    </div>
  );
}