"use client";

import { useParams } from "next/navigation";
import ProductCard from "../../components/ProductCard";

const allProducts = [
  { id: 1, name: "iPhone 15 Pro", price: 129999, image: "/iphone.jpg", category: "mobile" },
  { id: 2, name: "Samsung S24", price: 119999, image: "/samsung.jpg", category: "mobile" },
  { id: 3, name: "OnePlus 12", price: 64999, image: "/oneplus.jpg", category: "mobile" },
  { id: 4, name: "Xiaomi 14", price: 54999, image: "/xiaomi.jpg", category: "mobile" },
];

export default function CategoryPage() {
  const params = useParams();
  const category = params.category;

  const filtered = allProducts.filter(
    (p) => p.category === category
  );

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-2xl font-bold mb-6 capitalize">
        {category} Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

    </div>
  );
}