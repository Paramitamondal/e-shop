"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-6">

      {/* breadcrumb */}
      <p className="text-sm font-semibold text-gray-900 mb-6">
        Home &gt; Contact Us
      </p>

      {/* TOP CONTACT INFO */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-10 border">

        <div className="space-y-6">

          {/* address */}
          <div className="flex gap-4 items-start">
            <MapPin className="text-red-500 mt-1" size={22} />

            <div>
              <p className="font-bold text-lg text-gray-900">
                Find Us
              </p>

              <p className="text-gray-800 font-medium">
                Time Square Empire, WRTeam, Mirzapar Highway,
                Bhuj, Kutch, Gujarat - 370001
              </p>
            </div>
          </div>

          {/* phone */}
          <div className="flex gap-4 items-start">
            <Phone className="text-red-500 mt-1" size={22} />

            <div>
              <p className="font-bold text-lg text-gray-900">
                Contact Us
              </p>

              <p className="text-gray-800 font-medium">
                1234567890
              </p>
            </div>
          </div>

          {/* email */}
          <div className="flex gap-4 items-start">
            <Mail className="text-red-500 mt-1" size={22} />

            <div>
              <p className="font-bold text-lg text-gray-900">
                Email Us
              </p>

              <p className="text-gray-800 font-medium">
                eshop@gmail.com
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Contact Us
        </h2>

        <p className="text-gray-800 font-medium mt-3">
          Reach out to us from our contact form and we will get back to you shortly.
        </p>
      </div>

      {/* CONTACT FORM */}
      <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto border">

        <div className="grid md:grid-cols-2 gap-6">

          <input
            placeholder="Your Name"
            className="border-2 border-gray-200 rounded-lg px-4 py-3 font-medium text-gray-900 outline-none focus:border-red-400"
          />

          <input
            placeholder="Email Address"
            className="border-2 border-gray-200 rounded-lg px-4 py-3 font-medium text-gray-900 outline-none focus:border-red-400"
          />

          <input
            placeholder="Phone Number"
            className="border-2 border-gray-200 rounded-lg px-4 py-3 font-medium text-gray-900 outline-none focus:border-red-400"
          />

          <input
            placeholder="Subject"
            className="border-2 border-gray-200 rounded-lg px-4 py-3 font-medium text-gray-900 outline-none focus:border-red-400"
          />

        </div>

        <textarea
          placeholder="Your Message"
          rows={5}
          className="border-2 border-gray-200 rounded-lg px-4 py-3 mt-6 w-full font-medium text-gray-900 outline-none focus:border-red-400"
        />

        <button className="mt-6 bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-full font-semibold">
          Send Message
        </button>

      </div>

    </div>
  );
}