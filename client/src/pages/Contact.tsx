import React from 'react';

export default function Contact() {
  return (
    <section className="px-6 py-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Contact Us
      </h2>

      <div className="bg-white shadow rounded p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-blue-600">Clinic Address</h3>
          <p className="text-gray-700">
            Dr. DHANSHREE'S Dental Clinic<br />
            Shop no. 2, Muktai Plaza, Wadgaon Shinde Road, opposite to Eastern Royale society, Pathare Wasti, Lohegaon, Pune, <br />
            Maharashtra 411047
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600">Phone</h3>
          <p className="text-gray-700">📞 +918275172931</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600">Email</h3>
          <p className="text-gray-700">dr.dhanshreedentalclinic@gmail.com</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Mobile number"
            />
          </div>

          <div>
            <select className="w-full border rounded px-3 py-2">
              <option value="general">General Check-up</option>
              <option value="whitening">Teeth Whitening</option>
              <option value="braces">Braces Consultation</option>
              <option value="implants">Dental Implants</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              placeholder="Your message"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        <div className="pt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.171178219932!2d73.9285482!3d18.6033058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7a86d8f74af%3A0x6a9c3fab4620f1c3!2sDr.%20DHANSHREE&#39;S%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1720606359574!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          />
        </div>
      </div>
    </section>
  );
}
