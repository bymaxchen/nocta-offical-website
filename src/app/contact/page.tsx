"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from '@formspree/react';

const ContactPage: React.FC = () => {

  const [state, handleSubmit] = useForm("mjkwqrke");  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

if (state.succeeded) {
  return (
    <div className="flex flex-col px-6 items-center justify-center min-h-[50vh] space-y-4">
      <Image
        src="/contact-success.png"
        alt="Form submitted successfully"
        width={300}
        height={300}
        priority
      />
      <p className="text-center text-lg mt-2">
        We&apos;ve received your message. We&apos;ll get back to you shortly.
      </p>
    </div>
  );
}



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="service" className="block mb-1 font-medium">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-black text-white"
            required
          >
            <option value="">Select a service</option>
            <option value="Full Product Builds">Full Product Builds</option>
            <option value="Module / Feature Dev">Module / Feature Dev</option>
            <option value="MVP Prototyping">MVP Prototyping</option>
            <option value="Maintenance & Handoff">Maintenance & Handoff</option>
            <option value="other">other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
