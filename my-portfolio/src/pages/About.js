import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">About Me</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          I am a full-stack developer with a background in customer service and business development.
          With my passion for problem-solving and delivering quality code, I transitioned into software engineering.
        </p>
        
        <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">Technical Skills</h3>
        <div className="mt-4">
          <div className="mb-4">
            <label className="text-gray-700 dark:text-gray-300">HTML, CSS, JavaScript</label>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-teal-500 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-gray-700 dark:text-gray-300">React, Vue.js</label>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-teal-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-gray-700 dark:text-gray-300">Node.js, Express, Django, Flask</label>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-teal-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-gray-700 dark:text-gray-300">MongoDB, MySQL, SQLite</label>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-teal-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-gray-700 dark:text-gray-300">Python, C, JavaScript</label>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-teal-500 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-gray-700 dark:text-gray-300">Docker, Git, Postman, Trello</label>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-teal-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
