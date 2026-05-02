"use client";

import Link from "next/link";
import ProductCard from "../components/ProductCard";

type Props = {
  title: string;
};

const products = [
  { id: 1, name: "iPhone 15 Pro", price: 129999, image: "/iphone15.png" },
  { id: 2, name: "Samsung S24 Ultra", price: 119999, image: "/samsungs24.png" },
  { id: 3, name: "OnePlus 12", price: 64999, image: "/oneplus12.png" },
  { id: 4, name: "Xiaomi 14", price: 54999, image: "/xaomi.png" },
];

export default function SmartProductsSection({ title }: Props) {
  return (
    <section className="bg-white p-5 rounded-xl">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>

        <Link href="/products" className="text-red-500 font-medium hover:underline">
          See All →
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
            variant="category"   // 🔥 MUST for animated design
          />
        ))}

      </div>

    </section>
  );
}