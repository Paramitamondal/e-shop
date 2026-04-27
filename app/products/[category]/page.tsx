"use client";

import { useParams } from "next/navigation";
import ProductCard from "../../components/ProductCard";

const allProducts = [

/* ================= FURNITURE ================= */
{ id: 1, name: "Wood Chair", price: 3500, image: "/products/furniture/1.jpg", category: "furniture", brand:"Ikea" },
{ id: 2, name: "Office Table", price: 7500, image: "/products/furniture/2.jpg", category: "furniture", brand:"Ikea" },
{ id: 3, name: "Sofa Set", price: 12000, image: "/products/furniture/3.jpg", category: "furniture", brand:"Urban" },
{ id: 4, name: "Bed", price: 15000, image: "/products/furniture/4.jpg", category: "furniture", brand:"Urban" },
{ id: 5, name: "Wardrobe", price: 11000, image: "/products/furniture/5.jpg", category: "furniture", brand:"Home" },

/* ================= FASHION ================= */
{ id: 10, name: "T Shirt", price: 599, image: "/products/fashion/1.jpg", category: "fashion", brand:"Nike" },
{ id: 11, name: "Jeans", price: 1299, image: "/products/fashion/2.jpg", category: "fashion", brand:"Levis" },
{ id: 12, name: "Jacket", price: 2499, image: "/products/fashion/3.jpg", category: "fashion", brand:"Zara" },
{ id: 13, name: "Hoodie", price: 1599, image: "/products/fashion/4.jpg", category: "fashion", brand:"Nike" },
{ id: 14, name: "Sneakers", price: 2999, image: "/products/fashion/5.jpg", category: "fashion", brand:"Adidas" },

/* ================= BEAUTY ================= */
{ id: 28, name: "Face Wash", price: 299, image: "/products/beauty/1.jpg", category: "beauty", brand:"Lakme" },
{ id: 29, name: "Moisturizer", price: 499, image: "/products/beauty/2.jpg", category: "beauty", brand:"Nivea" },
{ id: 30, name: "Serum", price: 799, image: "/products/beauty/3.jpg", category: "beauty", brand:"Mamaearth" },
{ id: 31, name: "Lipstick", price: 599, image: "/products/beauty/4.jpg", category: "beauty", brand:"Lakme" },
{ id: 32, name: "Perfume", price: 1299, image: "/products/beauty/5.jpg", category: "beauty", brand:"Fogg" },

/* ================= WATCH ================= */
{ id: 40, name: "Apple Watch", price: 35000, image: "/products/watch/1.jpg", category: "watch", brand:"Apple" },
{ id: 41, name: "Noise Watch", price: 2999, image: "/products/watch/2.jpg", category: "watch", brand:"Noise" },
{ id: 42, name: "Boat Watch", price: 2499, image: "/products/watch/3.jpg", category: "watch", brand:"Boat" },
{ id: 43, name: "Titan Watch", price: 4999, image: "/products/watch/4.jpg", category: "watch", brand:"Titan" },

/* ================= ELECTRONICS ================= */
{ id: 50, name: "Bluetooth Speaker", price: 1999, image: "/products/electronics/1.jpg", category: "electronics", brand:"JBL" },
{ id: 51, name: "Headphone", price: 2499, image: "/products/electronics/2.jpg", category: "electronics", brand:"Sony" },
{ id: 52, name: "Camera", price: 45999, image: "/products/electronics/3.jpg", category: "electronics", brand:"Canon" },

/* ================= DIGITAL PRODUCT ================= */
{ id: 60, name: "UI Kit", price: 499, image: "/products/digital/1.jpg", category: "digital-product", brand:"Design" },
{ id: 61, name: "Ebook", price: 199, image: "/products/digital/2.jpg", category: "digital-product", brand:"PDF" },

/* ================= HOME APPLICATION ================= */
{ id: 70, name: "Mixer Grinder", price: 3499, image: "/products/home-appliances/1.jpg", category: "home-application", brand:"Philips" },
{ id: 71, name: "Air Fryer", price: 5999, image: "/products/home-appliances/2.jpg", category: "home-application", brand:"Pigeon" },

/* ================= VEGETABLE ================= */
{ id: 80, name: "Tomato", price: 40, image: "/products/vegetables/1.jpg", category: "vegetable", brand:"Fresh" },
{ id: 81, name: "Potato", price: 30, image: "/products/vegetables/2.jpg", category: "vegetable", brand:"Fresh" },

/* ================= DECOR ================= */
{ id: 90, name: "Wall Frame", price: 899, image: "/products/decor/1.jpg", category: "decor", brand:"Home" },
{ id: 91, name: "Lamp", price: 1299, image: "/products/decor/2.jpg", category: "decor", brand:"Home" },

/* ================= LAPTOP ================= */
{ id: 101, name: "Macbook Air", price: 98000, image: "/products/laptop/1.jpg", category: "laptop", brand:"Apple" },
{ id: 102, name: "HP Pavilion", price: 65000, image: "/products/laptop/2.jpg", category: "laptop", brand:"HP" },

/* ================= MOBILE ================= */
{ id: 110, name: "iPhone 15", price: 120000, image: "/products/mobile/1.jpg", category: "mobile", brand:"Apple" },
{ id: 111, name: "Samsung S24", price: 110000, image: "/products/mobile/2.jpg", category: "mobile", brand:"Samsung" },

/* ================= GROCERY ================= */
{ id: 120, name: "Rice", price: 1200, image: "/products/grocery/1.jpg", category: "grocery", brand:"India Gate" },
{ id: 121, name: "Oil", price: 180, image: "/products/grocery/2.jpg", category: "grocery", brand:"Fortune" },

/* ================= SPORTS ================= */
{ id: 130, name: "Football", price: 799, image: "/products/sports/1.jpg", category: "sports", brand:"Nivia" },
{ id: 131, name: "Cricket Bat", price: 1499, image: "/products/sports/2.jpg", category: "sports", brand:"SG" },

/* ================= TOYS ================= */
{ id: 140, name: "Toy Car", price: 499, image: "/products/toys/1.jpg", category: "toys", brand:"Fun" },
{ id: 141, name: "Teddy Bear", price: 699, image: "/products/toys/2.jpg", category: "toys", brand:"Fun" },

/* ================= BOOKS ================= */
{ id: 150, name: "Story Book", price: 299, image: "/products/books/1.jpg", category: "books", brand:"Penguin" },
{ id: 151, name: "Programming Book", price: 599, image: "/products/books/2.jpg", category: "books", brand:"OReilly" },

];

const subCategories: any = {
furniture: ["Bed","Chair","Sofa","Table","Wardrobe","Desk"],
fashion: ["Men","Women","Kids","Shoes","Accessories"],
beauty: ["Skincare","Makeup","Hair","Perfume"],
watch: ["Apple","Noise","Boat","Titan"],
electronics: ["Speaker","Headphone","Camera","Accessories"],
"digital-product": ["UI Kit","Templates","Ebook","Software"],
"home-application": ["Kitchen","Cleaning","Cooling","Heating"],
vegetable: ["Leafy","Root","Fresh","Organic"],
decor: ["Wall","Light","Art","Table Decor"],
laptop: ["Apple","HP","Dell","Asus","Lenovo"],
mobile: ["Apple","Samsung","OnePlus","Xiaomi","Vivo"],
grocery: ["Rice","Oil","Snacks","Daily Needs"],
sports: ["Football","Cricket","Gym","Outdoor"],
toys: ["Kids","Soft Toys","Remote","Puzzle"],
books: ["Story","Education","Programming","Novel"]
};

export default function CategoryPage() {

const params = useParams();
const category = params.category as string;

const formattedCategory = category.toLowerCase();

const filtered = allProducts.filter(
(p)=>p.category === formattedCategory
);

return (
<div className="bg-white min-h-screen">

<div className="max-w-7xl mx-auto flex">

<div className="w-72 border-r min-h-screen p-6">

<h2 className="font-bold text-xl mb-6">
Filters
</h2>

<div className="mb-8">
<p className="font-bold mb-3 text-gray-900">
Price
</p>

<div className="space-y-2 text-sm font-bold">
<label className="block"><input type="checkbox" /> Under ₹1000</label>
<label className="block"><input type="checkbox" /> ₹1000 - ₹5000</label>
<label className="block"><input type="checkbox" /> Above ₹5000</label>
</div>
</div>

<div className="mb-8">
<p className="font-bold mb-3 text-gray-900">
Choose Brand
</p>

<div className="space-y-2 text-sm font-bold">
<label className="block"><input type="checkbox" /> Apple</label>
<label className="block"><input type="checkbox" /> Samsung</label>
<label className="block"><input type="checkbox" /> Nike</label>
<label className="block"><input type="checkbox" /> Adidas</label>
<label className="block"><input type="checkbox" /> Ikea</label>
<label className="block"><input type="checkbox" /> Zara</label>
</div>
</div>

</div>

<div className="flex-1 p-8">

<h1 className="text-2xl font-bold mb-6 capitalize">
{formattedCategory}
</h1>

{subCategories[formattedCategory] && (
<div className="flex gap-8 mb-8">

{subCategories[formattedCategory].map((item:string)=>(
<div key={item} className="text-center">

<div className="w-16 h-16 rounded-full bg-gray-100 mx-auto mb-2 overflow-hidden">
<img
src={`/subcategory/${item.toLowerCase()}.png`}
className="w-full h-full object-cover"
/>
</div>

<p className="text-sm font-bold text-gray-900">
{item}
</p>

</div>
))}

</div>
)}

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

{filtered.map((p)=>(
<ProductCard
key={p.id}
id={p.id}
name={p.name}
price={p.price}
image={p.image}
/>
))}

</div>

</div>

</div>

</div>
);
}