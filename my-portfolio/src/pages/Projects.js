import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiFlask, SiTailwindcss, SiJavascript, SiBootstrap } from 'react-icons/si'; // Import Bootstrap icon

// Screenshots
import trackrScreenshot from '../assets/images/trackr.png';
import eduAdaptScreenshot from '../assets/images/eduadapt.png';
import teleThriveScreenshot from '../assets/images/telethrive.png';
import portfolioScreenshot from '../assets/images/Portfolio.png';
import planitScreenshot from '../assets/images/planit.png';

// Icons for tech stack
const techIcons = {
  React: <FaReact className="text-blue-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Python: <FaPython className="text-yellow-400" />,
  Flask: <SiFlask className="text-black" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-500" />,
  "Gemini AI": <FaPython className="text-purple-500" />, // Placeholder icon for Gemini AI
  Bootstrap: <SiBootstrap className="text-purple-600" /> // Bootstrap icon
};

// ProjectCard component
const ProjectCard = ({ title, description, techStack, githubLink, liveSiteLink, screenshot }) => (
  <div className="p-6 rounded-lg border border-gray-900 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 bg-white dark:bg-gray-800 shadow-lg">
    <img src={screenshot} alt={`${title} Screenshot`} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
    <p className="mt-2 text-black dark:text-gray-300">{description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {techStack.split(', ').map((tech, index) => (
        <span key={index} className="text-xl">
          {techIcons[tech] || tech} {/* Fallback to text if no icon found */}
        </span>
      ))}
    </div>
    <div className="mt-6">
      <a 
        href={githubLink} 
        className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-2 rounded-full mr-4 transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700"
      >
        GitHub
      </a>
      {liveSiteLink && (
        <a 
          href={liveSiteLink} 
          className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700"
        >
          Check Live Site
        </a>
      )}
    </div>
  </div>
);

// Projects page
const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-white dark:text-white mb-8 cursor-pointer hover:text-[#A28DEC]">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PlanIt project */}
          <ProjectCard
            title="PlanIt"
            description="Task management application."
            techStack="React, Flask, MongoDB, Tailwind CSS"
            githubLink="https://github.com/millyanne93/PlanIt"
            screenshot={planitScreenshot}
          />
          {/* Trackr project */}
          <ProjectCard
            title="Trackr"
            description="A web-based equipment tracking system."
            techStack="React, Node.js, MongoDB, Tailwind CSS"
            githubLink="https://github.com/millyanne93/trackr"
            liveSiteLink="https://trackr-kd45.vercel.app/"
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
          {/* Portfolio project */}
          <ProjectCard
            title="Portfolio"
            description="Portfolio Website"
            techStack="React, Tailwind CSS"
            githubLink="https://github.com/millyanne93/my-portfolio"
            liveSiteLink="https://millyanne93.github.io/my-portfolio/"
            screenshot={portfolioScreenshot}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
