import React from 'react';

export default function About() {
  return (
    <section className="px-6 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        About Dr. DHANSHREE'S Dental Clinic
      </h2>

      <p className="text-gray-700 mb-4">
        <strong>Dr. Dhanshree Ghuge (Sanap)</strong> is a highly experienced and caring dental surgeon based in Lohegaon, Pune. She is passionate about improving smiles and providing pain-free, modern dental care for patients of all ages.
      </p>

      <p className="text-gray-700 mb-4">
        At our clinic, we prioritize patient comfort, hygiene, and the use of advanced technology to offer top-quality treatments ranging from basic dental checkups to complex cosmetic and surgical procedures.
      </p>

      <p className="text-gray-700 mb-4">
        We believe every smile is unique, and we are committed to helping you maintain yours with personalized care.
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Why Choose Us?</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Experienced and qualified dental surgeon</li>
          <li>Modern equipment and advanced techniques</li>
          <li>Affordable and transparent pricing</li>
          <li>Comfortable and hygienic clinic environment</li>
          <li>Friendly, patient-first approach</li>
        </ul>
      </div>
    </section>
  );
}
