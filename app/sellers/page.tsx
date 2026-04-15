export default function Sellers() {
  return (
    <div className="p-5 text-black-900">
      <h1 className="text-3xl font-bold mb-4">Sellers</h1>

      <input
        placeholder="Search Seller"
        className="border p-2 w-full mb-4 rounded"
      />

      <div className="grid grid-cols-2 gap-4">
        <div className="border p-4 rounded">Super Market</div>
        <div className="border p-4 rounded">Skyline Seller Hub</div>
      </div>
    </div>
  );
}