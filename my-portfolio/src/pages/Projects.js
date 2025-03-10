import React, { useState } from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGlobe } from "react-icons/fa";
import { SiMongodb, SiFlask, SiTailwindcss, SiJavascript, SiBootstrap } from "react-icons/si";
import trackrScreenshot from "../assets/images/trackr.png";
import eduAdaptScreenshot from "../assets/images/eduadapt.png";
import teleThriveScreenshot from "../assets/images/telethrive.png";
import portfolioScreenshot from "../assets/images/Portfolio.png";
import planitScreenshot from "../assets/images/planit.png";

// Icons for tech stack
const techIcons = {
  React: <FaReact className="text-blue-500 text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-2xl" />,
  Python: <FaPython className="text-yellow-400 text-2xl" />,
  Flask: <SiFlask className="text-black text-2xl" />,
  HTML: <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-2xl" />,
  JavaScript: <SiJavascript className="text-yellow-500 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-500 text-2xl" />,
  Bootstrap: <SiBootstrap className="text-purple-600 text-2xl" />,
  "Live Demo": <FaGlobe className="text-gray-400 text-2xl" />,
};

// Project data
const projectData = [
  {
    title: "Trackr",
    description: "A web-based equipment tracking system with QR scanning & real-time tracking.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/trackr",
    liveSiteLink: "https://trackr-kd45.vercel.app/",
    screenshot: trackrScreenshot,
    category: "Full Stack",
    featured: true,
  },
  {
    title: "PlanIt",
    description: "A task management application with seamless UI/UX.",
    techStack: ["React", "Flask", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/PlanIt",
    screenshot: planitScreenshot,
    category: "Web Development",
  },
  {
    title: "EduAdapt",
    description: "An adaptive learning platform using AI for personalized content.",
    techStack: ["Node.js", "React", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/eduadapt",
    screenshot: eduAdaptScreenshot,
    category: "Full Stack",
  },
  {
    title: "Tele-Thrive",
    description: "Virtual therapy platform connecting patients with therapists.",
    techStack: ["Flask", "HTML", "CSS", "JavaScript", "Bootstrap"],
    githubLink: "https://github.com/ynot93/tele-thrive",
    screenshot: teleThriveScreenshot,
    category: "Backend",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio showcasing my projects & skills.",
    techStack: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/millyanne93/my-portfolio",
    liveSiteLink: "https://millyanne93.github.io/my-portfolio/",
    screenshot: portfolioScreenshot,
    category: "Web Development",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  // Filter projects dynamically
  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="min-h-screen py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-6">My Projects</h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Explore my recent work and see how I've helped clients transform ideas into reality.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-10 space-x-2">
          {["All", "Web Development", "Backend", "Full Stack"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`filter-btn px-6 py-2 rounded-md ${
                filter === category ? "bg-purple-600 text-white" : "text-white hover:text-gray-300"
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards with Flip Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card show" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <img src={project.screenshot} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold text-white text-center">{project.title}</h3>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between">
                    <p className="text-gray-400 text-center mb-4">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex justify-center space-x-3 mb-4">
                      {project.techStack.map((tech, index) => (
                        <span key={index}>{techIcons[tech] || tech}</span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex justify-center space-x-4">
                      <a
                        href={project.githubLink}
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
                      >
                        View Code
                      </a>
                      {project.liveSiteLink && (
                        <a
                          href={project.liveSiteLink}
                          className="px-4 py-2 border border-purple-600 text-purple-400 rounded-md hover:bg-purple-600 hover:text-white transition duration-300"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
