import React from 'react';

export default function Home() {
  return (
    <section className="text-center py-10 px-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">
        Welcome to Dr. DHANSHREE'S Dental Clinic
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-6">
        We are committed to providing you and your family with the highest quality dental care in a friendly, modern, and comfortable environment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold text-xl text-blue-600">Cosmetic Dentistry</h3>
          <p className="text-gray-600 mt-2">Brighten your smile with our cosmetic dental treatments.</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold text-xl text-blue-600">Root Canal Treatment</h3>
          <p className="text-gray-600 mt-2">Pain-free and modern RCT procedures to save your natural teeth.</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold text-xl text-blue-600">Dental Implants</h3>
          <p className="text-gray-600 mt-2">Permanent solutions for missing teeth with implants.</p>
        </div>
      </div>
    </section>
  );
}
