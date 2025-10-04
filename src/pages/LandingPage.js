import React from "react";

export default function LandingPage() {
  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-6 py-4 z-50">
        <h1 className="text-xl font-bold">🏠 Boarding House</h1>
        <nav>
          <a href="#pricing" className="mx-3 hover:text-blue-600">Pricing</a>
          <a href="#about" className="mx-3 hover:text-blue-600">About</a>
          <a href="#details" className="mx-3 hover:text-blue-600">Details</a>
          <a href="/login" className="ml-6 bg-blue-600 text-white px-4 py-2 rounded-lg">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gray-100" id="home">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Boarding House</h2>
        <p className="text-lg text-gray-700">Affordable, safe, and comfortable living spaces.</p>
        <img src="https://via.placeholder.com/800x400" alt="boarding" className="mt-6 rounded-lg shadow-lg" />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="h-screen flex flex-col justify-center items-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <p className="text-gray-700">Single Room - $200/month</p>
        <p className="text-gray-700">Shared Room - $120/month</p>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-lg text-center">
          We provide comfortable boarding houses with safe facilities and easy online reservations.
        </p>
      </section>

      {/* Details Section */}
      <section id="details" className="h-screen flex flex-col justify-center items-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Details</h2>
        <p className="max-w-lg text-center">
          Convenient location, 24/7 access, free Wi-Fi, and friendly community.
        </p>
      </section>
    </div>
  );
}
