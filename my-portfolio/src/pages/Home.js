import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hello, I'm Millyanne Wanjala</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          A Full-Stack Developer with experience in building web applications.
          Based in Kenya, I specialize in creating seamless user experiences using modern technologies.
          I'm constantly learning and experimenting with new tools to enhance my development skills.
        </p>
        <a href="/projects" role="button" className="mt-12 px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded">
          See My Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
