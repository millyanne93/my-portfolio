import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-custom-black">
      <form className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-900">
        <h2 className="text-3xl font-semibold text-black-700 dark:text-gray-300 mb-6">Contact Me</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-black-600 dark:text-gray-300" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-black-600 dark:text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-black-600 dark:text-gray-300" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-300"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
