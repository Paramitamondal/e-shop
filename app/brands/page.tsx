"use client";

import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FaShoppingCart, FaBolt } from "react-icons/fa";

const brandNames = [
  "Adidas", "Aeropostale", "Aldo", "AllenSolly", "Amante", "And",
  "Asics", "Aurelia", "Baggit", "Bansri", "Bata", "Bathbodyworks", "Bharatsthali", "Biba",
  "Biotique", "Blingvine", "Brog", "Bvlgari", "Candere", "Caprese", "Carmesi", "Casio",
  "Catwalk", "Charles_keith", "Chumbak", "Citizen", "Clarks", "Clovia", "Colorbar", "Coloressence",
  "Craftsvilla", "Crocs", "Da milano", "Dermawear", "Dkny",
  "Elle", "Enn", "Esbeda", "Ethos", "Eva young", "Fab india", "Faballey",
  "Fastrack", "Fila", "Fizzy Goblet", "Flying machine", "Forest essential", "Forever 21", "Hide sign", "House of vian", "Hush puppies",
  "ilian organics", "Inc5", "Indya", "inner sense", "Isharya", "Jaypore", "Jockey", "juicy chemistry",
  "Kala niketan", "Kalanjali", "kalya shastra", "kalyan jwellers", "kama ayurveda", "kanhai jweles", "kazo", "Lavie",
  "Lakme", "Label ritu kumar", "kruthika", "Khadims", "Libas", "Levi's", "Whirlpool", "Mango",
  "Mamaearth", "Flipkart", "Malabar", "Lulu sky", "Lotus", "Mioree", "Metro shoes", "Meena bazar",
  "Marks spencer", "Manyavar", "Needilust", "Nappa Dori", "Nalli", "Mochi", "Neemli naturals",
  "Nike", "Nykaa", "Only", "Ontisuka tiger", "Pa maxima", "Pahadi local", "Pairfait", "Palm good",
  "People", "Pepe jeans", "Pipa bella", "Pp pastel pop", "Puma", "Pure earth", "Regal", "Reebok",
  "Raw beauty shop", "Rangriti", "Quills soills", "Sahnaz", "Vanheusen",
  "Zara", "Wrangler", "Woodland", "Titan", "Skechers", "Samsung", "Apple", "Mi",
  "Oneplus", "Foodpanda", "Lg", "Test brand", "Sunfeast-1"
];

const getDynamicProducts = (name: string) => {
  const logo = `/brands/${name.toLowerCase().replace(/ /g, "-")}.png`;
  return [
    { id: `${name}-1`, name: `${name} Classic Collection`, price: "45,000", spec: "High durability, authentic brand material with 1-year official warranty.", img: logo },
    { id: `${name}-2`, name: `${name} Exclusive Edition`, price: "60,000", spec: "Premium special design, lightweight build, and enhanced comfort for daily use.", img: logo }
  ];
};

const allBrands = brandNames.map((name) => ({
  name,
  logo: `/brands/${name.toLowerCase().replace(/ /g, "-")}.png`,
}));

function BrandsContent() {
  const searchParams = useSearchParams();
  const selectFromUrl = searchParams.get("select");

  const [page, setPage] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  useEffect(() => {
    if (selectFromUrl) {
      const decodedName = decodeURIComponent(selectFromUrl);
      setSelectedBrand(decodedName);
      setSelectedProduct(getDynamicProducts(decodedName)[0]);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  }, [selectFromUrl]);

  const perPage = 16;
  const totalPages = Math.ceil(allBrands.length / perPage);
  const brands = allBrands.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="bg-white min-h-screen py-10 text-black">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-black text-center mb-8 uppercase tracking-tighter">Brands</h1>

        {/* BRAND GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-10">
          {brands.map((b, i) => (
            <div 
              key={i} 
              onClick={() => { setSelectedBrand(b.name); setSelectedProduct(null); }}
              className={`text-center cursor-pointer p-2 border rounded-xl transition-all ${selectedBrand === b.name ? 'border-red-500 bg-red-50 scale-105 shadow-md' : 'border-gray-100 hover:border-gray-300'}`}
            >
              <div className="bg-white aspect-square relative mb-1">
                <Image src={b.logo} alt={b.name} fill className="object-contain p-1" />
              </div>
              <p className="text-[10px] font-bold uppercase truncate">{b.name}</p>
            </div>
          ))}
        </div>

        {/* PAGINATION (Based on 5d7ea06c-577e-4df7-943c-48c690533672) */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center border-[1.5px] border-gray-400 rounded-xl overflow-hidden bg-white shadow-sm">
            <button 
              onClick={() => setPage(1)} 
              className="px-5 py-2.5 border-r border-gray-400 hover:bg-gray-100 font-bold transition-colors text-gray-700"
            >
              First
            </button>
            <button 
              onClick={() => setPage(Math.max(1, page - 1))} 
              className="px-5 py-2.5 border-r border-gray-400 hover:bg-gray-100 font-bold transition-colors text-gray-700"
            >
              &lt;
            </button>
            <div className="px-8 py-2.5 bg-[#2D3343] text-white font-bold text-lg min-w-[100px] text-center border-r border-gray-400">
              {page} / {totalPages}
            </div>
            <button 
              onClick={() => setPage(Math.min(totalPages, page + 1))} 
              className="px-5 py-2.5 border-r border-gray-400 hover:bg-gray-100 font-bold transition-colors text-gray-700"
            >
              &gt;
            </button>
            <button 
              onClick={() => setPage(totalPages)} 
              className="px-5 py-2.5 hover:bg-gray-100 font-bold transition-colors text-gray-700"
            >
              Last
            </button>
          </div>
        </div>

        {/* PRODUCT LIST SECTION */}
        {selectedBrand && (
          <div className="mb-10">
            <h2 className="text-xl font-black mb-6 border-l-4 border-red-600 pl-3 uppercase tracking-tight">
              {selectedBrand} COLLECTION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getDynamicProducts(selectedBrand).map((p) => (
                <div 
                  key={p.id} 
                  onClick={() => setSelectedProduct(p)}
                  className={`relative p-6 rounded-2xl flex items-center gap-6 cursor-pointer transition-all border-2 
                    ${selectedProduct?.id === p.id ? 'border-red-500 bg-gray-50 shadow-sm' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'}`}
                >
                  <div className="w-24 h-16 relative bg-white rounded-md overflow-hidden flex-shrink-0 border shadow-sm">
                    <Image src={p.img} alt={p.name} fill className="object-contain p-2" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-gray-800 text-lg leading-tight mb-1">{p.name}</h3>
                    <p className="text-red-600 font-black text-2xl italic">Price: {p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRODUCT SPECIFICATION */}
        {selectedProduct && (
          <div className="mt-12 bg-white border-[3px] border-black p-8 rounded-[40px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-2/5 aspect-square relative bg-gray-50 rounded-3xl border-2 border-gray-100 shadow-inner">
              <Image src={selectedProduct.img} alt={selectedProduct.name} fill className="object-contain p-10" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-4xl font-black mb-2 italic uppercase tracking-tighter leading-none">{selectedProduct.name}</h2>
              <p className="text-5xl font-black text-red-600 mb-8 italic">Price: {selectedProduct.price}</p>
              
              <div className="relative bg-gray-100 p-6 rounded-2xl mb-10 border-l-[10px] border-black">
                <span className="absolute -top-3 left-6 bg-white px-2 text-[10px] font-black uppercase tracking-widest text-gray-400">Product Features</span>
                <p className="text-gray-700 font-bold leading-relaxed text-lg">{selectedProduct.spec}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => alert('Add to Cart feature is coming soon!')}
                  className="flex-1 bg-[#2D2D2D] text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-black transition-all active:scale-95 shadow-lg"
                >
                  <FaShoppingCart /> ADD TO CART
                </button>
                <button 
                  onClick={() => alert('Buy Now feature is coming soon!')}
                  className="flex-1 bg-[#E11D48] text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-red-700 transition-all active:scale-95 shadow-lg"
                >
                  <FaBolt /> BUY NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BrandsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 font-bold">Loading...</div>}>
      <BrandsContent />
    </Suspense>
  );
}