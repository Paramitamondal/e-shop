export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  sub?: string;
  brand?: string;
};

export const products: Product[] = [

  /* ================= FURNITURE ================= */
  { id: 1, name: "Wood Chair", price: 3500, image: "/products/furniture/1.png", category: "furniture", sub: "Chair", brand: "Ikea" },
  { id: 2, name: "Office Table", price: 7500, image: "/products/furniture/2.png", category: "furniture", sub: "Table", brand: "Ikea" },
  { id: 3, name: "Sofa Set", price: 12000, image: "/products/furniture/3.png", category: "furniture", sub: "Sofa", brand: "Urban" },
  { id: 4, name: "Bed", price: 15000, image: "/products/furniture/4.png", category: "furniture", sub: "Bed", brand: "Urban" },
  { id: 5, name: "Wardrobe", price: 11000, image: "/products/furniture/5.png", category: "furniture", sub: "Wardrobe", brand: "Home" },

  /* ================= FASHION ================= */
  { id: 10, name: "T Shirt", price: 599, image: "/products/fashion/1.png", category: "fashion", sub: "Men", brand: "Nike" },
  { id: 11, name: "Jeans", price: 1299, image: "/products/fashion/2.png", category: "fashion", sub: "Men", brand: "Levis" },
  { id: 12, name: "Jacket", price: 2499, image: "/products/fashion/3.png", category: "fashion", sub: "Men", brand: "Zara" },
  { id: 13, name: "Hoodie", price: 1599, image: "/products/fashion/4.png", category: "fashion", sub: "Men", brand: "Nike" },
  { id: 14, name: "Sneakers", price: 2999, image: "/products/fashion/5.png", category: "fashion", sub: "Shoes", brand: "Adidas" },

  /* ================= BEAUTY ================= */
  { id: 28, name: "Face Wash", price: 299, image: "/products/beauty/1.png", category: "beauty", sub: "Skincare", brand: "Lakme" },
  { id: 29, name: "Moisturizer", price: 499, image: "/products/beauty/2.png", category: "beauty", sub: "Skincare", brand: "Nivea" },
  { id: 30, name: "Serum", price: 799, image: "/products/beauty/3.png", category: "beauty", sub: "Skincare", brand: "Mamaearth" },
  { id: 31, name: "Lipstick", price: 599, image: "/products/beauty/4.png", category: "beauty", sub: "Makeup", brand: "Lakme" },
  { id: 32, name: "Perfume", price: 1299, image: "/products/beauty/5.png", category: "beauty", sub: "Perfume", brand: "Fogg" },

  /* ================= WATCH ================= */
  { id: 40, name: "Apple Watch", price: 35000, image: "/products/watch/1.png", category: "watch", sub: "Apple", brand: "Apple" },
  { id: 41, name: "Noise Watch", price: 2999, image: "/products/watch/2.png", category: "watch", sub: "Noise", brand: "Noise" },
  { id: 42, name: "Boat Watch", price: 2499, image: "/products/watch/3.png", category: "watch", sub: "Boat", brand: "Boat" },
  { id: 43, name: "Titan Watch", price: 4999, image: "/products/watch/4.png", category: "watch", sub: "Titan", brand: "Titan" },

  /* ================= ELECTRONICS ================= */
  { id: 50, name: "Bluetooth Speaker", price: 1999, image: "/products/electronics/1.png", category: "electronics", sub: "Speaker", brand: "JBL" },
  { id: 51, name: "Headphone", price: 2499, image: "/products/electronics/2.png", category: "electronics", sub: "Headphone", brand: "Sony" },
  { id: 52, name: "Camera", price: 45999, image: "/products/electronics/3.png", category: "electronics", sub: "Camera", brand: "Canon" },

  /* ================= DIGITAL PRODUCT ================= */
  { id: 60, name: "UI Kit", price: 499, image: "/products/digital/1.jpg", category: "digital-product", sub: "UI Kit", brand: "Design" },
  { id: 61, name: "Ebook", price: 199, image: "/products/digital/2.jpg", category: "digital-product", sub: "Ebook", brand: "PDF" },

  /* ================= HOME APPLICATION ================= */
  { id: 70, name: "Mixer Grinder", price: 3499, image: "/products/home-application/1.png", category: "home-application", sub: "Kitchen", brand: "Philips" },
  { id: 71, name: "Air Fryer", price: 5999, image: "/products/home-application/2.png", category: "home-application", sub: "Kitchen", brand: "Pigeon" },

  /* ================= VEGETABLE ================= */
  { id: 80, name: "Tomato", price: 40, image: "/products/vegetables/1.jpg", category: "vegetable", sub: "Fresh", brand: "Fresh" },
  { id: 81, name: "Potato", price: 30, image: "/products/vegetables/2.jpg", category: "vegetable", sub: "Fresh", brand: "Fresh" },

  /* ================= DECOR ================= */
  { id: 90, name: "Wall Frame", price: 899, image: "/products/decor/1.jpg", category: "decor", sub: "Wall", brand: "Home" },
  { id: 91, name: "Lamp", price: 1299, image: "/products/decor/2.jpg", category: "decor", sub: "Light", brand: "Home" },

  /* ================= LAPTOP ================= */
  { id: 101, name: "Macbook Air", price: 98000, image: "/products/laptop/1.jpg", category: "laptop", sub: "Apple", brand: "Apple" },
  { id: 102, name: "HP Pavilion", price: 65000, image: "/products/laptop/2.jpg", category: "laptop", sub: "HP", brand: "HP" },

  /* ================= MOBILE ================= */
  { id: 110, name: "iPhone 15", price: 120000, image: "/products/mobile/1.jpg", category: "mobile", sub: "Apple", brand: "Apple" },
  { id: 111, name: "Samsung S24", price: 110000, image: "/products/mobile/2.jpg", category: "mobile", sub: "Samsung", brand: "Samsung" },
  { id: 112, name: "OnePlus 12", price: 64999, image: "/oneplus12.png", category: "mobile", sub: "OnePlus", brand: "OnePlus" },
  { id: 113, name: "Xiaomi 14", price: 54999, image: "/xaomi.png", category: "mobile", sub: "Xiaomi", brand: "Xiaomi" },

  /* ================= GROCERY ================= */
  { id: 120, name: "Rice", price: 1200, image: "/products/grocery/1.jpg", category: "grocery", sub: "Rice", brand: "India Gate" },
  { id: 121, name: "Oil", price: 180, image: "/products/grocery/2.jpg", category: "grocery", sub: "Oil", brand: "Fortune" },

  /* ================= SPORTS ================= */
  { id: 130, name: "Football", price: 799, image: "/products/sports/1.jpg", category: "sports", sub: "Football", brand: "Nivia" },
  { id: 131, name: "Cricket Bat", price: 1499, image: "/products/sports/2.jpg", category: "sports", sub: "Cricket", brand: "SG" },

  /* ================= TOYS ================= */
  { id: 140, name: "Toy Car", price: 499, image: "/products/toys/1.jpg", category: "toys", sub: "Kids", brand: "Fun" },
  { id: 141, name: "Teddy Bear", price: 699, image: "/products/toys/2.jpg", category: "toys", sub: "Soft Toys", brand: "Fun" },

  /* ================= BOOKS ================= */
  { id: 150, name: "Story Book", price: 299, image: "/products/books/1.jpg", category: "books", sub: "Story", brand: "Penguin" },
  { id: 151, name: "Programming Book", price: 599, image: "/products/books/2.jpg", category: "books", sub: "Programming", brand: "OReilly" },

  /* ================= KIDS (CLOTHING) ================= */
  { id: 160, name: "Kids Dress", price: 699, image: "/kids1.png", category: "kids", sub: "Girls", brand: "Home" },
  { id: 161, name: "Girls Coat", price: 899, image: "/kids2.png", category: "kids", sub: "Girls", brand: "Home" },
  { id: 162, name: "Winter Jacket", price: 1299, image: "/kids3.png", category: "kids", sub: "Boys", brand: "Home" },
  { id: 163, name: "Party Wear", price: 999, image: "/kids4.png", category: "kids", sub: "Girls", brand: "Home" },

];