import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Login() {
  const [isTenant, setIsTenant] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    password: "",
    phone: "",
    email: "",
    address: "",
    image: "",
  });

  async function handleRegister(e) {
    e.preventDefault();

    const { data, error } = await supabase.from("accounts").insert([
      {
        full_name: form.fullname,
        username: form.username,
        password: form.password, // ⚠️ should hash later
        role: "tenant",
        phone_number: form.phone,
        email: form.email,
        address: form.address,
        image: form.image,
      },
    ]);

    if (error) {
      alert("❌ Error: " + error.message);
    } else {
      alert("✅ Account created! Redirecting...");
      window.location.href = "/reservation";
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {!isTenant ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <button
            onClick={() => setIsTenant(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Tenant? Create Account
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleRegister}
          className="bg-white p-6 rounded-lg shadow-md w-96"
        >
          <h2 className="text-2xl font-bold mb-4">Tenant Registration</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-2 border rounded"
            onChange={(e) => setForm({ ...form, fullname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-2 border rounded"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-2 border rounded"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-2 mb-2 border rounded"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-2 border rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full p-2 mb-2 border rounded"
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded w-full"
          >
            Register & Reserve
          </button>
        </form>
      )}
    </div>
  );
}
