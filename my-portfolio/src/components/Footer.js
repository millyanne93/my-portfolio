import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-500 dark:bg-teal-700 py-4">
      <div className="container mx-auto text-center text-white dark:text-gray-300">
        &copy; {new Date().getFullYear()} Millyanne Wanjala. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
