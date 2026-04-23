"use client";
// Amader aar 'useState' ba 'selectedCategory' dorkar nei
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Step 3 onujayi Categories-er bhetore ekhon Link logic ache */}
        <Categories />
        
        <Hero />

        {/* Home Page ekhon shudhu generic sections dekhabe */}
        <div id="product-list" className="space-y-10">
          {/* Alada offset dewa ache jate duplicate product na ashe */}
          <ProductsSection title="Flash Sale" limit={4} offset={0} />
          <ProductsSection title="Featured Products" limit={4} offset={4} />
          <ProductsSection title="Top Rated" limit={4} offset={8} />
        </div>
      </div>
    </div>
  );
}