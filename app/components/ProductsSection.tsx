"use client";

import ProductCard from "./ProductCard";

type Props = {
  title: string;
};

export default function ProductsSection({ title }: Props) {
  const products = [
    {
      id: 1,
      name: "Running Shoes",
      price: 499,
      image: "/product1.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 999,
      image: "/product2.jpg",
    },
    {
      id: 3,
      name: "T-Shirt",
      price: 1499,
      image: "/product4.png",
    },
    {
      id: 4,
      name: "Laptop",
      price: 45999,
      image: "/product5.png",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-10 mt-6 rounded-xl">

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

    </section>
  );
}