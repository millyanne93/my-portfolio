import React, { useState } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-teal-500 dark:bg-teal-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-xl font-semibold text-white dark:text-gray-200">Personal Portfolio</a>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="text-white dark:text-gray-300">Home</a>
          <a href="/about" className="text-white dark:text-gray-300">About</a>
          <a href="/projects" className="text-white dark:text-gray-300">Projects</a>
          <a href="/contact" className="text-white dark:text-gray-300">Contact</a>
          <button onClick={toggleDarkMode} className="ml-4 text-white dark:text-gray-300">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
