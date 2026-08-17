"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { products as allProducts } from "@/data/products";

const subCategories:any = {
furniture:["Bed","Chair","Sofa","Table","Wardrobe","Desk"],
fashion:["Men","Women","Kids","Shoes","Accessories"],
beauty:["Skincare","Makeup","Hair","Perfume"],
watch:["Apple","Noise","Boat","Titan"],
electronics:["Speaker","Headphone","Camera","tv"],
"digital-product":["UI Kit","Templates","Ebook","Software"],
"home-application":["Kitchen","Cleaning","air-conditioner","refrigerator","washing-machine","heater"],
vegetable:["Leafy","Root","Fresh","Organic"],
decor:["Wall","Light","Art","Table Decor"],
laptop:["Apple","HP","Dell","Asus","Lenovo"],
mobile:["Apple","Samsung","OnePlus","Xiaomi","Vivo"],
grocery:["Rice","Oil","Snacks","Daily Needs"],
sports:["Football","Cricket","Gym","Outdoor"],
toys:["Kids","Soft Toys","Remote","Puzzle"],
books:["Story","Education","Programming","Novel"]
};

export default function CategoryPage(){

const params = useParams();
const category = params.category as string;

const [selectedSub,setSelectedSub]=useState("");

const formattedCategory = category.toLowerCase();

let filtered = allProducts.filter(
(p)=>p.category===formattedCategory
);

if(selectedSub){
filtered = filtered.filter(p=>p.sub===selectedSub)
}

return(
<div className="bg-white min-h-screen">

<div className="max-w-7xl mx-auto flex">

<div className="w-72 border-r min-h-screen p-6">

<h2 className="text-xl font-extrabold text-gray-900 mb-6">
Filters
</h2>

</div>

<div className="flex-1 p-8">

{/* TOP BAR */}
<div className="flex justify-between items-center mb-6">

<h1 className="text-2xl font-extrabold text-gray-900">
Products
</h1>

<div className="flex gap-6 text-sm font-extrabold text-gray-700">
<span className="cursor-pointer hover:text-black">Relevance</span>
<span className="cursor-pointer hover:text-black">Popular</span>
<span className="cursor-pointer hover:text-black">Latest</span>
</div>

</div>

<h2 className="text-xl font-extrabold text-gray-900 mb-6 capitalize">
{formattedCategory} Category
</h2>

{!selectedSub && subCategories[formattedCategory] && (
<div className="flex gap-8 mb-8">
{subCategories[formattedCategory].map((item:string)=>(
<div
key={item}
onClick={()=>setSelectedSub(item)}
className="text-center cursor-pointer"
>
<div className="w-16 h-16 rounded-full bg-gray-100 mx-auto mb-2 overflow-hidden">
<img
src={`/products/${formattedCategory}/${item.toLowerCase()}.png`}
onError={(e:any)=>e.target.style.display="none"}
className="w-full h-full object-cover"
/>
</div>

<p className="text-sm font-extrabold text-gray-900">
{item}
</p>

</div>
))}
</div>
)}

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

{filtered.map((p)=>(
<div key={p.id}>
<ProductCard {...p} variant="category" />
</div>
))}

</div>

</div>

</div>

</div>
)
}