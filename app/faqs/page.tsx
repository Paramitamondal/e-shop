"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQsPage() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the minimum order value ?",
      a: "There is no minimum order value. You can place order for any amount."
    },
    {
      q: "How fast can you deliver?",
      a: "We usually deliver within 2-5 business days depending on your location."
    },
    {
      q: "Can I change the delivery address of my order?",
      a: "Yes, you can change your address before the order is shipped."
    },
    {
      q: "GST?",
      a: "GST will be applied during checkout based on your location."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-6">

      {/* breadcrumb */}
      <p className="text-sm font-semibold text-gray-900 mb-6">
        Home &gt; FAQs
      </p>

      <div className="bg-white rounded-2xl shadow-md p-8">

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="/faqs.png"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-4">

            {faqs.map((item, i) => (
              <div
                key={i}
                className="border rounded-xl p-4 hover:shadow-sm transition"
              >
                <div
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="font-bold text-gray-900 text-lg">
                    {item.q}
                  </h3>

                  <ChevronDown
                    className={`transition ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {open === i && (
                  <p className="mt-3 text-gray-800 font-medium">
                    {item.a}
                  </p>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}