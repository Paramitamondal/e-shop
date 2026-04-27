"use client";
import { useState } from "react";

export default function AffiliateRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    address: "",
    website: "",
    app: "",
  });

  const [error, setError] = useState("");

  const submit = () => {
    if (!form.name) return setError("Oops! Full Name is required");
    if (!form.email) return setError("Oops! Email is required");
    if (!form.phone) return setError("Oops! Mobile is required");
    if (!form.password) return setError("Oops! Password is required");
    if (form.password !== form.confirm)
      return setError("Oops! Password mismatch");
    if (!form.address) return setError("Oops! Address required");

    setError("");
    alert("Account Created ✅");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg text-black">
{/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-500 text-white px-2 py-1 font-bold rounded">
            M
          </div>
          <h1 className="text-2xl font-bold text-black-900">
            eShop
          </h1>
        </div>
        <h2 className="text-center mb-4">Create Affiliate Account</h2>

        <input
          placeholder="Full Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 mb-2"
        />

        <input
          placeholder="Email *"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-2 mb-2"
        />

        <input
          placeholder="Mobile *"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border p-2 mb-2"
        />

        <input
          type="password"
          placeholder="Password *"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full border p-2 mb-2"
        />

        <input
          type="password"
          placeholder="Confirm Password *"
          value={form.confirm}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          className="w-full border p-2 mb-2"
        />

        <input
          placeholder="Address *"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="w-full border p-2 mb-2"
        />

        <input
          placeholder="Your Website"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          className="w-full border p-2 mb-2"
        />

        <input
          placeholder="Your Mobile App"
          value={form.app}
          onChange={(e) => setForm({ ...form, app: e.target.value })}
          className="w-full border p-2 mb-3"
        />

        {error && <p className="text-red-500 mb-2">⚠ {error}</p>}

        <button
          onClick={submit}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Create Account
        </button>

      </div>
    </div>
  );
}