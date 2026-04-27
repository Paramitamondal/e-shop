"use client";
import { useState } from "react";

export default function SellerRegister() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
    business: "",
    tax: "",
  });

  const [error, setError] = useState("");

  const next = () => {
    if (step === 1) {
      if (!form.name) return setError("Oops! Full Name is required");
      if (!form.phone) return setError("Oops! Mobile Number is required");
      if (!form.email) return setError("Oops! Email is required");
      if (!form.password) return setError("Oops! Password is required");
      if (form.password !== form.confirm)
        return setError("Oops! Passwords do not match");
    }

    if (step === 2 && !form.business)
      return setError("Oops! Business Address is required");

    if (step === 4 && !form.tax)
      return setError("Oops! Tax Number is required");

    setError("");
    setStep(step + 1);
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
            eShop multivendor
          </h1>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="font-semibold mb-3">Personal Details</h2>

            <div className="mb-2">
              <label>Full Name <span className="text-red-500">*</span></label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border p-2 mt-1"
              />
            </div>

            <div className="mb-2">
              <label>Mobile <span className="text-red-500">*</span></label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border p-2 mt-1"
              />
            </div>

            <div className="mb-2">
              <label>Email <span className="text-red-500">*</span></label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border p-2 mt-1"
              />
            </div>

            <div className="mb-2">
              <label>Password <span className="text-red-500">*</span></label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full border p-2 mt-1"
              />
            </div>

            <div className="mb-2">
              <label>Confirm Password <span className="text-red-500">*</span></label>
              <input
                type="password"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                className="w-full border p-2 mt-1"
              />
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="font-semibold mb-3">Business</h2>

            <div className="mb-2">
              <label>Business Address <span className="text-red-500">*</span></label>
              <input
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="w-full border p-2 mt-1"
              />
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2 className="font-semibold mb-3">Store</h2>

            <input type="file" className="w-full border p-2 mt-1" />
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <h2 className="font-semibold mb-3">Tax</h2>

            <div className="mb-2">
              <label>Tax Number <span className="text-red-500">*</span></label>
              <input
                value={form.tax}
                onChange={(e) => setForm({ ...form, tax: e.target.value })}
                className="w-full border p-2 mt-1"
              />
            </div>
          </>
        )}

        {error && <p className="text-red-500 mt-2">⚠ {error}</p>}

        <div className="mt-4">
          {step < 4 ? (
            <button onClick={next} className="bg-red-500 text-white px-4 py-2 rounded">
              Next
            </button>
          ) : (
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          )}
        </div>

      </div>
    </div>
  );
}