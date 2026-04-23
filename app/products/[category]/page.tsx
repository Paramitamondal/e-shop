"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import ProductCard from "@/app/components/ProductCard";


export default function CategoryPage() {
  const params = useParams();
  const categoryName = params.category as string;

  // --- Apnar Product List (Ekhane 100+ product thakte hobe) ---
  const products = [
    // --- FASHION (7 Products) ---
 { id: 1, name: "Classic T-Shirt", price: 599, image: "/product/Classic T-Shirt.webp", category: "Fashion" },
  { id: 2, name: "Running Shoes", price: 1299, image: "/product/Running Shoes.webp", category: "Fashion" },
  { id: 3, name: "Denim Jacket", price: 2499, image: "/product/Denim Jacket.webp", category: "Fashion" },
  { id: 4, name: "Cotton Chinos", price: 1599, image: "/product/Cotton Chinos.jpg", category: "Fashion" },
  { id: 5, name: "Summer Dress", price: 1899, image: "/product/Summer Dress.jpg", category: "Fashion" },
  { id: 6, name: "Leather Belt", price: 799, image: "/product/Leather Belt.jpg", category: "Fashion" },
  { id: 7, name: "Sunglasses", price: 999, image: "/product/Sunglasses.jpg", category: "Fashion" },

  // --- ELECTRONICS (7 Products) ---
  { id: 8, name: "Gaming Mouse", price: 1500, image: "/product/Gaming Mouse.jpg", category: "Electronics" },
  { id: 9, name: "Mechanical Keyboard", price: 3500, image: "/product/Mechanical Keyboard.jpg", category: "Electronics" },
  { id: 10, name: "Laptop Stand", price: 800, image: "/product/Laptop Stand.jpg", category: "Electronics" },
  { id: 11, name: "Wireless Earbuds", price: 2500, image: "/product/Wireless Earbuds.jpg", category: "Electronics" },
  { id: 12, name: "Power Bank", price: 1200, image: "/product/Power Bank.jpg", category: "Electronics" },
  { id: 13, name: "Bluetooth Speaker", price: 2200, image: "/product/Bluetooth Speaker.jpg", category: "Electronics" },
  { id: 14, name: "USB-C Hub", price: 1800, image: "/product/USB-C Hub.jpg", category: "Electronics" },

  // --- FURNITURE (7 Products) ---
  { id: 15, name: "Office Chair", price: 5500, image: "/product/Office Chair.jpg", category: "Furniture" },
  { id: 16, name: "Wooden Desk", price: 8500, image: "/product/Wooden Desk.jpg", category: "Furniture" },
  { id: 17, name: "Bookshelf", price: 4200, image: "/product/Bookshelf.jpg", category: "Furniture" },
  { id: 18, name: "Sofa Set", price: 25000, image: "/product/Sofa Set.jpg", category: "Furniture" },
  { id: 19, name: "Dining Table", price: 15000, image: "/product/Dining Table.jpg", category: "Furniture" },
  { id: 20, name: "Bedside Table", price: 3000, image: "/product/Bedside Table.jpg", category: "Furniture" },
  { id: 21, name: "Wardrobe", price: 18000, image: "/product/Wardrobe.jpg", category: "Furniture" },

  // --- WATCH (7 Products) ---
  { id: 22, name: "Smart Watch V8", price: 2999, image: "/product/Smart Watch V8.jpg", category: "Watch" },
  { id: 23, name: "Analog Classic", price: 1999, image: "/product/Analog Classic.jpg", category: "Watch" },
  { id: 24, name: "Digital Sport", price: 1500, image: "/product/Digital Sport.jpg", category: "Watch" },
  { id: 25, name: "Luxury Gold Watch", price: 8500, image: "/product/Luxury Gold Watch.jpg", category: "Watch" },
  { id: 26, name: "Chronograph Watch", price: 4500, image: "/product/Chronograph Watch.jpg", category: "Watch" },
  { id: 27, name: "Minimalist Watch", price: 2200, image: "/product/Minimalist Watch.jpg", category: "Watch" },
  { id: 28, name: "Leather Strap Watch", price: 2800, image: "/product/Leather Strap Watch.jpg", category: "Watch" },
// --- BEAUTY (7 Products) ---
  { id: 29, name: "Face Wash", price: 299, image: "/product/Face Wash.jpg", category: "Beauty" },
  { id: 30, name: "Moisturizer", price: 450, image: "/product/Moisturizer.jpg", category: "Beauty" },
  { id: 31, name: "Sunscreen SPF 50", price: 599, image: "/product/Sunscreen SPF 50.jpg", category: "Beauty" },
  { id: 32, name: "Lip Balm", price: 150, image: "/product/Lip Balm.jpg", category: "Beauty" },
  { id: 33, name: "Hair Serum", price: 850, image: "/product/Hair Serum.jpg", category: "Beauty" },
  { id: 34, name: "Night Cream", price: 1200, image: "/product/Night Cream.jpg", category: "Beauty" },
  { id: 35, name: "Perfume Spray", price: 2500, image: "/product/Perfume Spray.jpg", category: "Beauty" },

  // --- DIGITAL PRODUCT (7 Products) ---
  { id: 36, name: "Adobe Subscription", price: 1500, image: "/product/Adobe Subscription.jpg", category: "Digital Product" },
  { id: 37, name: "E-Book React Guide", price: 500, image: "/product/E-Book React Guide.jpg", category: "Digital Product" },
  { id: 38, name: "Stock Photo Pack", price: 2000, image: "/product/Stock Photo Pack.jpg", category: "Digital Product" },
  { id: 39, name: "Online Course Voucher", price: 3000, image: "/product/Online Course Voucher.jpg", category: "Digital Product" },
  { id: 40, name: "Premium Font Kit", price: 1200, image: "/product/Premium Font Kit.jpg", category: "Digital Product" },
  { id: 41, name: "Website Template", price: 4500, image: "/product/Website Template.jpg", category: "Digital Product" },
  { id: 42, name: "Gaming Gift Card", price: 1000, image: "/product/Gaming Gift Card.jpg", category: "Digital Product" },

  // --- HOME APPLIANCES (7 Products) ---
  { id: 43, name: "Rice Cooker", price: 3500, image: "/product/Rice Cooker.jpg", category: "Home Application" },
  { id: 44, name: "Microwave Oven", price: 12500, image: "/product/Microwave Oven.jpg", category: "Home Application" },
  { id: 45, name: "Vacuum Cleaner", price: 8500, image: "/product/Vacuum Cleaner.jpg", category: "Home Application" },
  { id: 46, name: "Air Purifier", price: 15000, image: "/product/Air Purifier.jpg", category: "Home Application" },
  { id: 47, name: "Electric Kettle", price: 1800, image: "/product/Electric Kettle.jpg", category: "Home Application" },
  { id: 48, name: "Iron Machine", price: 2200, image: "/product/Iron Machine.jpg", category: "Home Application" },
  { id: 49, name: "Juicer Mixer", price: 4500, image: "/product/Juicer Mixer.jpg", category: "Home Application" },
  // --- VEGETABLE (7 Products) ---
  { id: 50, name: "Fresh Tomato", price: 40, image: "/product/Fresh Tomato.jpg", category: "Vegetable" },
  { id: 51, name: "Potato Local", price: 30, image: "/product/Potato Local.jpg", category: "Vegetable" },
  { id: 52, name: "Green Chili", price: 100, image: "/product/Green Chili.jpg", category: "Vegetable" },
  { id: 53, name: "Fresh Onion", price: 60, image: "/product/Fresh Onion.jpg", category: "Vegetable" },
  { id: 54, name: "Carrot Red", price: 50, image: "/product/Carrot Red.jpg", category: "Vegetable" },
  { id: 55, name: "Cauliflower", price: 45, image: "/product/Cauliflower.jpg", category: "Vegetable" },
  { id: 56, name: "Fresh Spinach", price: 20, image: "/product/Fresh Spinach.jpg", category: "Vegetable" },

  // --- DECOR (7 Products) ---
  { id: 57, name: "Wall Painting", price: 1500, image: "/product/Wall Painting.jpg", category: "Decor" },
  { id: 58, name: "Table Lamp", price: 1200, image: "/product/Table Lamp.jpg", category: "Decor" },
  { id: 59, name: "Flower Vase", price: 800, image: "/product/Flower Vase.jpg", category: "Decor" },
  { id: 60, name: "Scented Candles", price: 450, image: "/product/Scented Candles.jpg", category: "Decor" },
  { id: 61, name: "Wall Clock", price: 950, image: "/product/Wall Clock.jpg", category: "Decor" },
  { id: 62, name: "Decorative Mirror", price: 2500, image: "/product/Decorative Mirror.jpg", category: "Decor" },
  { id: 63, name: "Cushion Cover Set", price: 600, image: "/product/Cushion Cover Set.jpg", category: "Decor" },

  // --- LAPTOP (7 Products) ---
  { id: 64, name: "MacBook Air", price: 95000, image: "/product/MacBook Air.jpg", category: "Laptop" },
  { id: 65, name: "HP Pavilion", price: 65000, image: "/product/HP Pavilion.jpg", category: "Laptop" },
  { id: 66, name: "Dell Inspiron", price: 58000, image: "/product/Dell Inspiron.jpg", category: "Laptop" },
  { id: 67, name: "Asus ROG Gaming", price: 110000, image: "/product/Asus ROG Gaming.jpg", category: "Laptop" },
  { id: 68, name: "Lenovo Yoga", price: 85000, image: "/product/Lenovo Yoga.jpg", category: "Laptop" },
  { id: 69, name: "Acer Aspire 5", price: 45000, image: "/product/Acer Aspire 5.jpg", category: "Laptop" },
  { id: 70, name: "MSI Modern 14", price: 52000, image: "/product/MSI Modern 14.jpg", category: "Laptop" },

  // --- MOBILE (7 Products) ---
  { id: 71, name: "iPhone 15 Pro", price: 135000, image: "/product/iPhone 15 Pro.jpg", category: "Mobile" },
  { id: 72, name: "Samsung S24 Ultra", price: 125000, image: "/product/Samsung S24 Ultra.jpg", category: "Mobile" },
  { id: 73, name: "Google Pixel 8", price: 75000, image: "/product/Google Pixel 8.jpg", category: "Mobile" },
  { id: 74, name: "OnePlus 12", price: 65000, image: "/product/OnePlus 12.jpg", category: "Mobile" },
  { id: 75, name: "Xiaomi 14", price: 60000, image: "/product/Xiaomi 14.jpg", category: "Mobile" },
  { id: 76, name: "Vivo V30 Pro", price: 42000, image: "/product/Vivo V30 Pro.jpg", category: "Mobile" },
  { id: 77, name: "Nothing Phone 2", price: 38000, image: "/product/Nothing Phone 2.jpg", category: "Mobile" },

  // --- GROCERY (7 Products) ---
  { id: 78, name: "Basmati Rice 5kg", price: 750, image: "/product/Basmati Rice 5kg.jpg", category: "Grocery" },
  { id: 79, name: "Sunflower Oil 1L", price: 160, image: "/product/Sunflower Oil 1L.jpg", category: "Grocery" },
  { id: 80, name: "Tata Salt", price: 28, image: "/product/Tata Salt.jpg", category: "Grocery" },
  { id: 81, name: "Red Label Tea", price: 350, image: "/product/Red Label Tea.jpg", category: "Grocery" },
  { id: 82, name: "Amul Butter", price: 250, image: "/product/Amul Butter.jpg", category: "Grocery" },
  { id: 83, name: "Aashirvaad Atta", price: 210, image: "/product/Aashirvaad Atta.jpg", category: "Grocery" },
  { id: 84, name: "Sugar Premium", price: 45, image: "/product/Sugar Premium.jpg", category: "Grocery" },

  // --- SPORTS (7 Products) ---
  { id: 85, name: "Cricket Bat", price: 2500, image: "/product/Cricket Bat.jpg", category: "Sports" },
  { id: 86, name: "Football Size 5", price: 1200, image: "/product/Football Size 5.jpg", category: "Sports" },
  { id: 87, name: "Badminton Racket", price: 1800, image: "/product/Badminton Racket.jpg", category: "Sports" },
  { id: 88, name: "Yoga Mat", price: 650, image: "/product/Yoga Mat.jpg", category: "Sports" },
  { id: 89, name: "Dumbbells 5kg", price: 900, image: "/product/Dumbbells 5kg.jpg", category: "Sports" },
  { id: 90, name: "Running Shoes", price: 3500, image: "/product/Running Shoes.jpg", category: "Sports" },
  { id: 91, name: "Basketball", price: 1400, image: "/product/Basketball.jpg", category: "Sports" },

  // --- TOYS (7 Products) ---
  { id: 92, name: "Remote Control Car", price: 1500, image: "/product/Remote Control Car.jpg", category: "Toys" },
  { id: 93, name: "Teddy Bear Large", price: 850, image: "/product/Teddy Bear Large.jpg", category: "Toys" },
  { id: 94, name: "Lego Set", price: 2200, image: "/product/Lego Set.jpg", category: "Toys" },
  { id: 95, name: "Barbie Doll", price: 1200, image: "/product/Barbie Doll.jpg", category: "Toys" },
  { id: 96, name: "Puzzle Game", price: 350, image: "/product/Puzzle Game.jpg", category: "Toys" },
  { id: 97, name: "Action Figure", price: 950, image: "/product/Action Figure.jpg", category: "Toys" },
  { id: 98, name: "Electric Train", price: 2800, image: "/product/Electric Train.jpg", category: "Toys" },

  // --- BOOKS (7 Products) ---
  { id: 99, name: "Harry Potter Set", price: 3500, image: "/product/Harry Potter Set.jpg", category: "Books" },
  { id: 100, name: "Atomic Habits", price: 450, image: "/product/Atomic Habits.jpg", category: "Books" },
  { id: 101, name: "The Alchemist", price: 300, image: "/product/The Alchemist.jpg", category: "Books" },
  { id: 102, name: "Rich Dad Poor Dad", price: 400, image: "/product/Rich Dad Poor Dad.jpg", category: "Books" },
  { id: 103, name: "Coding in Python", price: 650, image: "/product/Coding in Python.jpg", category: "Books" },
  { id: 104, name: "History of World", price: 800, image: "/product/History of World.jpg", category: "Books" },
  { id: 105, name: "Graphic Novel", price: 550, image: "/product/Graphic Novel.jpg", category: "Books" },

  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // URL-er dash (-) soriye space kora ebong match kora
      const formattedURL = categoryName?.replace(/-/g, ' ').toLowerCase();
      return p.category.toLowerCase() === formattedURL;
    });
  }, [categoryName]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header thakle ekhane thakbe, but boro Category Bar thakbe na */}
      
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb - Flipkart style */}
        <nav className="text-xs text-gray-500 mb-4">
          Home  &gt;  Products  &gt;  <span className="capitalize">{categoryName?.replace(/-/g, ' ')}</span>
        </nav>

        {/* Heading Section */}
        <div className="flex items-baseline gap-3 mb-8 border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-900 capitalize">
            {categoryName?.replace(/-/g, ' ')}
          </h1>
          <p className="text-gray-500 text-sm">
            ({filteredProducts.length} items found)
          </p>
        </div>
        
        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                {...product}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-40">
            <p className="text-gray-400 text-lg font-medium">Sorry, no products found!</p>
          </div>
        )}
      </div>
    </div>
  );
}