import Header from "./components/Header";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <div className="flex flex-col">

     

      {/* FIXED ORDER */}
      <Categories />
      <Hero />

      <ProductsSection title="Flash Sale" />
      <ProductsSection title="Featured Products" />
      <ProductsSection title="Top Rated" />
      <ProductsSection title="New Arrivals" />

    </div>
  );
}