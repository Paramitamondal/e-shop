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
          subtitle="Summer Sale - Up to 70% Off Fashion Collection"
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
          <ProductsSection title="Kids Section" />
          <ProductsSection title="Top Rated" />
        </div>

        {/* MOBILE APP SECTION */}
        <div className="bg-[#F5F6F8] py-10 px-5 mt-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/073/756/218/non_2x/eshop-mobile-app-ui-ux-design-template-free-vector.jpg"
                alt="eShop Mobile App"
                className="w-[260px] md:w-[320px] rounded-xl shadow-lg"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                eShop Mobile App
              </h2>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                Affordable Ecommerce Platform
              </p>
              <p className="text-gray-500 mt-3 leading-relaxed">
                Shop with us at affordable prices and get exciting cashback & offers!
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://apple.com/app-store"
                  target="_blank"
                  className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full hover:bg-gray-800 transition-all"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  className="flex items-center gap-2 bg-[#22C55E] text-white px-5 py-3 rounded-full hover:bg-green-600 transition-all"
                >
                  Google Play
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}