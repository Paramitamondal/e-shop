// ✅ Product type (best practice)
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

// ✅ All products data
export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 129999,
    image: "/iphone15.png",
    category: "mobile",
  },
  {
    id: 2,
    name: "Samsung S24",
    price: 119999,
    image: "/samsungs24.png",
    category: "mobile",
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: 64999,
    image: "/oneplus12.png",
    category: "mobile",
  },
  {
    id: 4,
    name: "Xiaomi 14",
    price: 54999,
    image: "/xaomi.png",
    category: "mobile",
  },

  {
    id: 5,
    name: "Kids Dress",
    price: 699,
    image: "/kids1.png",
    category: "kids",
  },
  {
    id: 6,
    name: "Girls Coat",
    price: 899,
    image: "/kids2.png",
    category: "kids",
  },
  {
    id: 7,
    name: "Winter Jacket",
    price: 1299,
    image: "/kids3.png",
    category: "kids",
  },
  {
    id: 8,
    name: "Party Wear",
    price: 999,
    image: "/kids4.png",
    category: "kids",
  },
];