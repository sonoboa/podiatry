'use client';
import { useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    setProducts((prev) => [
      ...prev,
      { id: Date.now(), description: `First Name, Last Name ${prev.length + 1}` },
    ]);
  };

  const removeProduct = () => {
    setProducts((prev) => prev.slice(0, -1));
  };

  const clearProducts = () => {
    setProducts([]);
  };

  const updateDescription = (id, newDescription) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, description: newDescription } : product
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 flex flex-col items-center">
      <section className="w-full max-w-9xl bg-white rounded-l shadow-xl p-18 space-y-8">
        {/* Header Info */}
        <div className="text-center space-y-5">
          <h1 className="text-6xl font-bold text-teal-600">Final Exam 343</h1>

          <h2 className="text-3xl font-semibold text-gray-800">Noboa, Stalyn</h2>

          <h3 className="text-lg font-medium text-gray-600">Spring 2025</h3>

        </div>

        {/* Certification Intro */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-teal-600">
            Welcome to the website of A.B.C. Podiatry Office!
          </h1>
          <h2 className="text-lg font-medium text-gray-800">
            We provide extensive foot care for patients of all ages. Our experienced and knowledgeable podiatrists are dedicated to helping you keep your feet healthy and pain-free.
          </h2>
          <h2 className="text-lg font-medium text-gray-800">
            Some of the common conditions we treat include bunions, diabetic foot care, and plantar fascitis.
          </h2>
          <h2 className="text-lg font-medium text-gray-800 italic">
            We hope to see you soon!
          </h2>
          <h2 className="text-lg font-medium text-gray-800 underline">
            Use the buttons below to book an appointment:
          </h2>
        </div>

        {/* Name List */}
        <div className="space-y-3" id="display">
          {products.map((className) => (
            <div
              key={className.id}
              className="bg-gray-100 border border-gray-300 rounded-lg p-3 shadow-sm"
            >
              <input
                type="text"
                value={className.description}
                onChange={(e) => updateDescription(className.id, e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={addProduct}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow font-semibold"
          >
            ➕ Book an appointment
          </button>
          <button
            onClick={removeProduct}
            className="bg-orange-400 hover:bg-orange-700 text-white px-5 py-2 rounded-md shadow font-semibold"
          >
            ➖ Cancel appointment
          </button>
          <button
            onClick={clearProducts}
            className="bg-gray-400 hover:bg-gray-800 text-white px-5 py-2 rounded-md shadow font-semibold"
          >
            🔄 Reset
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-700 text-lg">
          Contact the office at{' '}
          <a
            href="mailto:appointments@qcstudent.xyz"
            className="text-blue-600 underline hover:text-blue-800"
          >
            appointments@qcstudent.xyz
          </a>{' '}
          for any questions prior to your visit.
        </p>
      </section>
    </main>
  );
}