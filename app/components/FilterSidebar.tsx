"use client";

export default function FilterSidebar() {
  return (
    <div className="space-y-6">

      <h2 className="font-bold text-lg text-gray-900">
        Attributes
      </h2>

      {/* FILTER ITEMS */}
      <div className="space-y-4 text-sm">

        <details open>
          <summary className="cursor-pointer font-semibold text-gray-900">
            Battery Power
          </summary>
          <div className="mt-2 space-y-2">
            <label className="flex gap-2">
              <input type="checkbox" />
              3000 mAh
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              4000 mAh
            </label>
          </div>
        </details>

        <details>
          <summary className="cursor-pointer font-semibold text-gray-900">
            Color
          </summary>
        </details>

        <details>
          <summary className="cursor-pointer font-semibold text-gray-900">
            Display Size
          </summary>
        </details>

        <details>
          <summary className="cursor-pointer font-semibold text-gray-900">
            Connectivity
          </summary>
        </details>

      </div>

      {/* BRANDS */}
      <div>

        <h3 className="font-bold text-gray-900 mb-3">
          Brands
        </h3>

        <div className="grid grid-cols-4 gap-2">

          <div className="border p-2 rounded">
            <img src="/brand1.png" />
          </div>

          <div className="border p-2 rounded">
            <img src="/brand2.png" />
          </div>

          <div className="border p-2 rounded">
            <img src="/brand3.png" />
          </div>

          <div className="border p-2 rounded">
            <img src="/brand4.png" />
          </div>

        </div>

      </div>

    </div>
  );
}