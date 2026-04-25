"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";

interface ProductsSectionProps {
  title: string;
}

/* 🔥 Different Products for Each Section */
const productData: Record<string, any[]> = {
  "Flash Sale": [
    {
      id: 1,
      name: "Women Cotton Blue Pakistani Kurta Palazzo set",
      price: 699,
      image: "/kurti.png",
    },
    {
      id: 2,
      name: "Revangi Women Printed 2-Piece Co-Ords Sets",
      price: 999,
      image: "/coords.png",
    },
    {
      id: 3,
      name: "Hand Work Pink South Special One Piece",
      price: 1999,
      image: "/one-piece.png",
    },
    {
      id: 4,
      name: "Designer Kurta Sets for Women",
      price: 1699,
      image: "/kurti1.png",
    },
  ],

  /* ✅ Changed from Featured Products → Kids Section */
  "Kids Section": [
    {
      id: 5,
      name: "Kids Cartoon T-Shirt",
      price: 499,
      image: "/kids1.png",
    },
    {
      id: 6,
      name: "Baby Girl Party Dress",
      price: 899,
      image: "/kids2.png",
    },
    {
      id: 7,
      name: "Kids Sneakers",
      price: 1299,
      image: "/kids3.png",
    },
    {
      id: 8,
      name: "Kids Winter Hoodie",
      price: 999,
      image: "/kids4.png",
    },
  ],

  "Top Rated": [
    {
      id: 9,
      name: "Nike Air Shoes",
      price: 4999,
      image: "/shoes.png",
    },
    {
      id: 10,
      name: "Apple Watch Series 9",
      price: 39999,
      image: "/watch.png",
    },
    {
      id: 11,
      name: "Sony Headphones",
      price: 8999,
      image: "/headphone.png",
    },
    {
      id: 12,
      name: "Gaming Keyboard RGB",
      price: 3499,
      image: "/keyboard.png",
    },
  ],
};

export default function ProductsSection({ title }: ProductsSectionProps) {
  const products = productData[title] || [];

  return (
    <section className="bg-white p-5 rounded-xl">
      
      {/* header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          {title}
        </h2>

        <Link
          href="/products"
          className="text-red-500 font-medium hover:underline"
        >
          See All →
        </Link>
      </div>

      {/* products grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

    </section>
  );
}