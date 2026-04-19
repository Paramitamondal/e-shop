import Categories from "./components/Categories";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto">

        <Categories />
        <Hero />

        <ProductsSection title="Flash Sale" />
        <ProductsSection title="Featured Products" />
        <ProductsSection title="Top Rated" />

      </div>

    </div>
  );
}