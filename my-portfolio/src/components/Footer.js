import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-4">
      <div className="container mx-auto text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Millyanne Wanjala. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
