"use client";
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[var(--secondary-accent)] flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8 mx-auto">
        {/* Header Section */}
        <div className="">
          <h2 className="text-3xl font-bold text-[var(--dark-text)]">Contact Us</h2>
          <p className="mt-2 text-lg text-[var(--dark-text)]">
            We'd love to hear from you! Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[var(--light-bg)] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[var(--dark-text)] mb-4">Send a Message</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--dark-text)]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-b focus:border-b-amber-80 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--dark-text)]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-b focus:border-b-amber-80 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--dark-text)]">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border-b focus:border-b-amber-80 sm:text-sm"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className="bg-dark-bg text-light-text hover:bg-[var(--accent)] hover:text-[var(--light-text)] px-4 py-2 rounded-md font-semibold transition"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[var(--dark-text)] mb-4">Contact Information</h2>
            <div className="space-y-4 text-[var(--dark-text)]">
              <div>
                <p className="font-medium">Email:</p>
                <p>support@example.com</p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p>+1 (123) 456-7890</p>
              </div>
              <div>
                <p className="font-medium">Address:</p>
                <p>123 Business Street, Suite 100<br />City, State, 12345</p>
              </div>
              <div>
                <p className="font-medium">Business Hours:</p>
                <p>Monday - Friday: 9 AM - 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;