import React from 'react';

const ProjectCard = ({ title, description, techStack, githubLink, liveDemoLink }) => (
  <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Tech Stack: {techStack}</p>
    <div className="mt-6">
      <a href={githubLink} className="text-teal-500 hover:text-teal-400 mr-4">GitHub</a>
      {liveDemoLink && <a href={liveDemoLink} className="text-teal-500 hover:text-teal-400">Live Demo</a>}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <ProjectCard 
            title="Trackr"
            description="A web-based equipment tracking system."
            techStack="React, Node.js, MongoDB, Tailwind CSS"
            githubLink="https://github.com/millyanne93/trackr"
            liveDemoLink="https://trackr-demo.com"
          />
          <ProjectCard 
            title="EduAdapt"
            description="An adaptive learning platform using AI for personalized content."
            techStack="Node.js, React, Gemini AI, Tailwind CSS"
            githubLink="https://github.com/millyanne93/eduadapt"
          />
          <ProjectCard
            title="tele-thrive"
            description="Connecting patients with licensed therapists for virtual mental health support.."
            techStack="Flask (Backend), HTML, CSS, JavaScript (Frontend), Bootstrap (Styling)]"
            githubLink="https://github.com/ynot93/tele-thrive"
          />
          {/* more projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
