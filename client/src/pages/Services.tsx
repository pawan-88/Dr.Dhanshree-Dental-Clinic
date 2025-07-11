import React from 'react';

export default function Services() {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Our Dental Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Dental Checkup & Cleaning', desc: 'Routine oral exams and professional teeth cleaning.' },
          { title: 'Tooth Fillings', desc: 'Safe and long-lasting dental fillings for cavities.' },
          { title: 'Root Canal Treatment (RCT)', desc: 'Advanced RCT with minimal pain and maximum care.' },
          { title: 'Tooth Extraction', desc: 'Safe extraction procedures with proper healing care.' },
          { title: 'Dental Implants', desc: 'Permanent solution for missing teeth using implants.' },
          { title: 'Braces & Aligners', desc: 'Improve smile and bite alignment with modern orthodontics.' },
          { title: 'Teeth Whitening', desc: 'Brighten your teeth with safe whitening treatments.' },
          { title: 'Child Dentistry', desc: 'Gentle dental care specially designed for kids.' },
          { title: 'Cosmetic Dentistry', desc: 'Smile designing, veneers, and aesthetic dental work.' },
        ].map((service, idx) => (
          <div key={idx} className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
