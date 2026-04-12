import ProductCard from "./ProductCard";

export default function ProductsSection({ title }: { title: string }) {
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 499,
      image: "/product.jpg",
    },
    {
      id: 2,
      name: "bag",
      price: 999,
      image: "/product1.jpg",
    },
  ];

  return (
    <div className="px-6 py-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}