export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      
      <h1 className="text-xl font-bold">
        Eshop
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        className="border px-3 py-1 w-96"
      />

      <div>
        Cart 🛒
      </div>

    </div>
  );
}