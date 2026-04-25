"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";

const allProducts = [
  { id: 1, name: "iPhone 15 Pro", price: 129999, image: "/iphone.jpg", category:"mobile" },
  { id: 2, name: "Samsung S24", price: 119999, image: "/samsung.jpg", category:"mobile" },
  { id: 3, name: "OnePlus 12", price: 64999, image: "/oneplus.jpg", category:"mobile" },
  { id: 4, name: "Xiaomi 14", price: 54999, image: "/xiaomi.jpg", category:"mobile" },
];

export default function ProductsPage() {

const [category,setCategory] = useState("all")

const filtered =
category === "all"
? allProducts
: allProducts.filter(p=>p.category===category)

return (
<div className="bg-white min-h-screen">

<div className="max-w-7xl mx-auto flex">

{/* sidebar */}
<aside className="w-[260px] border-r bg-white p-6">

<h2 className="font-bold text-lg mb-6">
Filters
</h2>

<div className="space-y-3 font-semibold">

<label className="flex gap-2">
<input type="radio" onChange={()=>setCategory("all")} />
All
</label>

<label className="flex gap-2">
<input type="radio" onChange={()=>setCategory("mobile")} />
Mobile
</label>

</div>

</aside>

{/* right */}
<main className="flex-1 p-8 bg-white">

<h1 className="text-2xl font-bold mb-6">
All Products
</h1>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{filtered.map(p=>(
<ProductCard key={p.id} {...p}/>
))}

</div>

</main>

</div>
</div>
);
}