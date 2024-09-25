import React from 'react';

// screenshots
import trackrScreenshot from '../assets/images/trackr.png';
import eduAdaptScreenshot from '../assets/images/eduadapt.png';
import teleThriveScreenshot from '../assets/images/telethrive.png';

// ProjectCard component
const ProjectCard = ({ title, description, techStack, githubLink, liveDemoLink, screenshot }) => (
  <div className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
    <img src={screenshot} alt={`${title} Screenshot`} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {techStack.split(', ').map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="mt-6">
      <a href={githubLink} className="bg-teal-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-teal-400">GitHub</a>
      {liveDemoLink && <a href={liveDemoLink} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-400">Live Demo</a>}
    </div>
  </div>
);
// Projects page
const Projects = () => {
  return (
    <section className="min-h-screen py-16 bg-custom-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Trackr project */}
          <ProjectCard
            title="Trackr"
            description="A web-based equipment tracking system."
            techStack="React, Node.js, MongoDB, Tailwind CSS"
            githubLink="https://github.com/millyanne93/trackr"
            liveDemoLink="https://trackr-demo.com"
            screenshot={trackrScreenshot} 
          />
          {/* EduAdapt project */}
          <ProjectCard
            title="EduAdapt"
            description="An adaptive learning platform using AI for personalized content."
            techStack="Node.js, React, Gemini AI, Tailwind CSS"
            githubLink="https://github.com/millyanne93/eduadapt"
            screenshot={eduAdaptScreenshot} 
          />
          {/* Tele-Thrive project */}
          <ProjectCard
            title="Tele-Thrive"
            description="Connecting patients with licensed therapists for virtual mental health support."
            techStack="Flask, HTML, CSS, JavaScript, Bootstrap"
            githubLink="https://github.com/ynot93/tele-thrive"
            screenshot={teleThriveScreenshot} 
          />
          {/* More */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
