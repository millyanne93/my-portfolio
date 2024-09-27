import React from 'react';
import { FaLinkedin, FaTwitter, FaBriefcase, FaEnvelope, FaGithub } from 'react-icons/fa'; // Import GitHub icon

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-custom-black">
      {/* Contact Form */}
      <form className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-900">
        <h2 className="text-xl font-semibold text-black-700 dark:text-gray-300 mb-6">Have a Project in Mind? Let's Chat!</h2>
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

      {/* Social Media Section */}
      <div className="mt-8 flex space-x-6">
        <a
          href="https://www.linkedin.com/in/millyanne-wanjala-5365306b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.twitter.com/millyanne254"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~018f1d860f073c0488"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaBriefcase size={30} />
        </a>
        <a
          href="mailto:nimmyanne20@gmail.com"
          className="text-white hover:text-gray-400"
        >
          <FaEnvelope size={30} />
        </a>
        {/* GitHub Profile Link */}
        <a
          href="https://github.com/millyanne93"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;

