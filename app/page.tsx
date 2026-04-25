"use client";

import Categories from "./components/Categories";
import Hero from "./components/Hero";
import BrandsSection from "./components/BrandsSection";
import PromoBanner from "./components/PromoBanner";
import SmartProductsSection from "./components/SmartProductsSection";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">

        <Categories />
        <Hero />

        <div className="mt-8">
          <BrandsSection />
        </div>

        {/* PROMO 1 */}
        <PromoBanner
          image="/promobanner.png"
          title="BIG PROMO"
          subtitle="Summer Sale – Up to 70% Off Fashion Collection"
          link="/categories/fashion"
        />

        {/* SMART PRODUCTS */}
        <div className="mt-10">
          <SmartProductsSection title="Smart Products" />
        </div>

        {/* PROMO 2 */}
        <PromoBanner
          image="/promobanner1.png"
          title="ELECTRONICS SALE"
          subtitle="Up to 50% Off On Smart Gadgets"
          link="/products/electronics"
        />

        <div className="space-y-10 mt-12">
          <ProductsSection title="Flash Sale" />
          <ProductsSection title="Kids Section" />   {/* ✅ changed */}
          <ProductsSection title="Top Rated" />
        </div>

      </div>
    </div>
  );
}