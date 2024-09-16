import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">About Me</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          I am a full-stack developer with a background in customer service and business development.
          With my passion for problem-solving and delivering quality code, I transitioned into software engineering.
          My skills include React, Node.js, Python, and database management. I also have experience with project management and DevOps tools.
        </p>
        <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">Technical Skills</h3>
        <ul className="mt-4 text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-4">
          <li>HTML, CSS, JavaScript, React, Vue.js</li>
          <li>Node.js, Express, Django, Flask</li>
          <li>MongoDB, MySQL, SQLite</li>
          <li>Python, C, JavaScript</li>
          <li>Docker, Git, Postman, Trello</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
