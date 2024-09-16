import React from 'react';

const Contact = () => {
      return (
              <section className="min-h-screen flex items-center justify-center">
                <form className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Me</h2>
                  <input className="w-full p-2 mb-4 border dark:border-gray-600 rounded" type="text" placeholder="Your Name" required />
                  <input className="w-full p-2 mb-4 border dark:border-gray-600 rounded" type="email" placeholder="Your Email" required />
                  <textarea className="w-full p-2 mb-4 border dark:border-gray-600 rounded" placeholder="Your Message" required></textarea>
                  <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-400">Send</button>
                </form>
              </section>
            );
};

export default Contact;
